export const KalaOracleAbi = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "_T0",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_G0",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_S0",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_B0",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_price",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "getRiskLevels",
        "inputs": [],
        "outputs": [
            {
                "name": "volatility",
                "type": "uint8",
                "internalType": "enum VolatilityLevel"
            },
            {
                "name": "liquidity",
                "type": "uint8",
                "internalType": "enum LiquidityLevel"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getRoundData",
        "inputs": [
            {
                "name": "_roundId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct KalaOracle.RoundData",
                "components": [
                    {
                        "name": "price",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "t0",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "g0",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "s0",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "b0",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "timestamp",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "lastUpdateTime",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "latestRoundId",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "liquidityLevel",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint8",
                "internalType": "enum LiquidityLevel"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "oracle",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "owner",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "price",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "rounds",
        "inputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "price",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "t0",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "g0",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "s0",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "b0",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "timestamp",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "setOracle",
        "inputs": [
            {
                "name": "_newOracle",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "inputs": [
            {
                "name": "newOwner",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "updatePriceData",
        "inputs": [
            {
                "name": "_price",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_t0",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_g0",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_s0",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_b0",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "updateRiskLevels",
        "inputs": [
            {
                "name": "_volatility",
                "type": "uint8",
                "internalType": "enum VolatilityLevel"
            },
            {
                "name": "_liquidity",
                "type": "uint8",
                "internalType": "enum LiquidityLevel"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "volatilityLevel",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint8",
                "internalType": "enum VolatilityLevel"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "event",
        "name": "OracleUpdated",
        "inputs": [
            {
                "name": "oldOracle",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "newOracle",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "name": "previousOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "newOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "PriceUpdated",
        "inputs": [
            {
                "name": "roundId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "timestamp",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "price",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "t0",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "g0",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "s0",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "b0",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "RiskLevelsUpdated",
        "inputs": [
            {
                "name": "volatility",
                "type": "uint8",
                "indexed": false,
                "internalType": "enum VolatilityLevel"
            },
            {
                "name": "liquidity",
                "type": "uint8",
                "indexed": false,
                "internalType": "enum LiquidityLevel"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "InvalidData",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OwnableInvalidOwner",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "OwnableUnauthorizedAccount",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "Unauthorized",
        "inputs": []
    }
] as const