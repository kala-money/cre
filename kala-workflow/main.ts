import {
	bytesToHex,
	handler,
	CronCapability,
	EVMClient,
	HTTPClient,
	encodeCallMsg,
	getNetwork,
	hexToBase64,
	LAST_FINALIZED_BLOCK_NUMBER,
	Runner,
	type Runtime,
	consensusMedianAggregation,
	NodeRuntime,
} from '@chainlink/cre-sdk'
import { encodeFunctionData, zeroAddress, encodeAbiParameters, parseAbiParameters } from 'viem'
import { KalaOracleAbi } from '../contracts/abi/KalaOracleAbi'

// Type Definitions
type EvmConfig = {
	chainSelectorName: string
	kalaOracleAddress: string
	kalaConsumerAddress: string
	gasLimit: string
}

type Baselines = {
	t0: string
	g0: string
	s0: string
	b0: string
}

type Config = {
	schedule: string
	goldApi: {
		url: string
		accessToken: string
	}
	silverApi: {
		url: string
		accessToken: string
	}
	pppApi: {
		url: string
	}
	gasApi: {
		url: string
	}
	evms: EvmConfig[]
	baselines: Baselines
}

type MyResult = {
	T0: bigint
	G0: bigint
	S0: bigint
	B0: bigint
	finalResult: bigint
	txHash: string
}

// Helper: Get scaled baselines
const SCALE = 100_000_000n // 10^8

const getBaselines = (config: Config) => {
	return {
		t0: BigInt(config.baselines.t0) * SCALE,
		g0: BigInt(config.baselines.g0) * SCALE,
		s0: BigInt(config.baselines.s0) * SCALE,
		b0: BigInt(config.baselines.b0) * SCALE,
	}
}

// Parsing Helpers
const parseMetalPrice = (resp: any): bigint => {
	const text = new TextDecoder().decode(resp.body)
	const json = JSON.parse(text)

	const price = json.price
	if (typeof price !== "number") {
		throw new Error("Invalid price")
	}

	const [int, frac = ""] = price.toString().split(".")
	const padded = (frac + "00000000").slice(0, 8)

	return BigInt(int + padded)
}


const parsePPPResponse = (resp: any): bigint => {
	const text = new TextDecoder().decode(resp.body)
	try {
		const json = JSON.parse(text)
		const pppVal = json.ppp
		if (typeof pppVal === 'number') {
			return BigInt(Math.round(pppVal * 100_000_000))
		}
		return 0n
	} catch {
		return 0n
	}
}

const parseGasResponse = (resp: any): bigint => {
	const text = new TextDecoder().decode(resp.body)
	try {
		const json = JSON.parse(text)
		const feeString = json.low?.suggestedMaxPriorityFeePerGas
		if (feeString) {
			const fee = parseFloat(feeString)
			if (!isNaN(fee)) {
				return BigInt(Math.round(fee * 100_000_000))
			}
		}
		return 0n
	} catch {
		return 0n
	}
}

// Workflow Steps
const fetchOffchainData = (nodeRuntime: NodeRuntime<Config>): bigint => {
	const httpClient = new HTTPClient()
	const config = nodeRuntime.config

	// Prepare Requests
	const reqGoldData = {
		url: config.goldApi.url,
		method: "GET" as const,
		headers: { "x-access-token": config.goldApi.accessToken }
	}
	const reqSilverData = {
		url: config.silverApi.url,
		method: "GET" as const,
		headers: { "x-access-token": config.silverApi.accessToken }
	}
	const reqPPPData = {
		url: config.pppApi.url,
		method: "GET" as const,
	}
	const reqGasData = {
		url: config.gasApi.url,
		method: "GET" as const,
	}

	// Send Requests
	const respGold = httpClient.sendRequest(nodeRuntime, reqGoldData).result()
	const respSilver = httpClient.sendRequest(nodeRuntime, reqSilverData).result()
	const respPPP = httpClient.sendRequest(nodeRuntime, reqPPPData).result()
	const respGas = httpClient.sendRequest(nodeRuntime, reqGasData).result()

	// Parse Responses
	const valGold = parseMetalPrice(respGold)
	const valSilver = parseMetalPrice(respSilver)
	const valPPP = parsePPPResponse(respPPP)
	const valGas = parseGasResponse(respGas)

	console.log("Fetched Values:", JSON.stringify({
		valPPP: valPPP.toString(),
		valGold: valGold.toString(),
		valSilver: valSilver.toString(),
		valGas: valGas.toString()
	}, null, 2));

	// Calculate Weighted Ratio
	const { t0, g0, s0, b0 } = getBaselines(config)

	// Formula: 1.00 * ((PPP/T0 * 0.4) + (Gold/G0 * 0.2) + (Silver/S0 * 0.2) + (Gas/B0 * 0.2))
	// Calculation scaled by 10^8

	const contribPPP = (valPPP * SCALE / t0) * 40n / 100n
	const contribGold = (valGold * SCALE / g0) * 20n / 100n
	const contribSilver = (valSilver * SCALE / s0) * 20n / 100n
	const contribGas = (valGas * SCALE / b0) * 20n / 100n

	const indexValue = contribPPP + contribGold + contribSilver + contribGas

	// specific rule: from 1e8 to 1e18
	// so for 1e18 / 1e8 = 1e10
	return indexValue * 10_000_000_000n
}

function updatePriceResult(
	runtime: Runtime<Config>,
	chainSelector: bigint,
	finalResult: bigint,
	evmConfig: EvmConfig,
	t0: bigint,
	g0: bigint,
	s0: bigint,
	b0: bigint
): string {
	runtime.log(`Updating price result to ${evmConfig.kalaConsumerAddress} with final result ${finalResult}`)

	const evmClient = new EVMClient(chainSelector)

	const reportData = encodeAbiParameters(
		parseAbiParameters("uint256 price, uint256 T0, uint256 G0, uint256 S0, uint256 B0"),
		[
			finalResult,
			t0,
			g0,
			s0,
			b0
		]
	)

	runtime.log(`Updating price result with detail: ${finalResult}`)

	const reportResponse = runtime
		.report({
			encodedPayload: hexToBase64(reportData),
			encoderName: "evm",
			signingAlgo: "ecdsa",
			hashingAlgo: "keccak256"
		})
		.result()

	const writeReportResult = evmClient
		.writeReport(runtime, {
			receiver: evmConfig.kalaConsumerAddress,
			report: reportResponse,
			gasConfig: {
				gasLimit: evmConfig.gasLimit,
			},
		})
		.result()

	runtime.log("Waiting for write response")

	const txHash = bytesToHex(writeReportResult.txHash || new Uint8Array(32))

	runtime.log(`Write report transaction hash: ${txHash}`)
	runtime.log(`view transaction at https://sepolia.etherscan.io/tx/${txHash}`)

	return txHash
}

const onCronTrigger = (runtime: Runtime<Config>): MyResult => {
	const evmConfig = runtime.config.evms[0]
	const { t0, g0, s0, b0 } = getBaselines(runtime.config)

	const network = getNetwork({
		chainFamily: "evm",
		chainSelectorName: evmConfig.chainSelectorName,
		isTestnet: true
	})
	if (!network) {
		throw new Error("Network not found")
	}

	const offchainValue = runtime.runInNodeMode(fetchOffchainData, consensusMedianAggregation())().result()
	runtime.log(`Success fetch offchain value: ${offchainValue}`)

	const evmClient = new EVMClient(network.chainSelector.selector)
	const callData = encodeFunctionData({
		abi: KalaOracleAbi,
		functionName: "price"
	})

	const _onchainRead = evmClient.callContract(runtime, {
		call: encodeCallMsg({
			from: zeroAddress,
			to: evmConfig.kalaOracleAddress as `0x${string}`,
			data: callData
		}),
		blockNumber: LAST_FINALIZED_BLOCK_NUMBER,
	})

	const finalResultValue = offchainValue

	const txHash = updatePriceResult(
		runtime,
		network.chainSelector.selector,
		offchainValue, // Use offchainValue as the final result
		evmConfig,
		t0,
		g0,
		s0,
		b0
	)

	return {
		T0: t0,
		G0: g0,
		S0: s0,
		B0: b0,
		finalResult: finalResultValue,
		txHash
	}
}

const initWorkflow = (config: Config) => {
	const cron = new CronCapability()
	return [handler(cron.trigger({ schedule: config.schedule }), onCronTrigger)]
}

export async function main() {
	const runner = await Runner.newRunner<Config>()
	await runner.run(initWorkflow)
}