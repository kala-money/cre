export const KalaReceiverAbi = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "_forwarder",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_oracle",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "getExpectedAuthor",
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
        "name": "getExpectedWorkflowId",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getExpectedWorkflowName",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "bytes10",
                "internalType": "bytes10"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getForwarderAddress",
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
        "name": "isResultAnomalous",
        "inputs": [
            {
                "name": "_prospectiveResult",
                "type": "tuple",
                "internalType": "struct KalaConsumer.FinalResult",
                "components": [
                    {
                        "name": "price",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "T0",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "G0",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "S0",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "B0",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "onReport",
        "inputs": [
            {
                "name": "metadata",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "report",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "oracleContract",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract KalaOracle"
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
        "name": "renounceOwnership",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setExpectedAuthor",
        "inputs": [
            {
                "name": "_author",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setExpectedWorkflowId",
        "inputs": [
            {
                "name": "_id",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setExpectedWorkflowName",
        "inputs": [
            {
                "name": "_name",
                "type": "string",
                "internalType": "string"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setForwarderAddress",
        "inputs": [
            {
                "name": "_forwarder",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setOracle",
        "inputs": [
            {
                "name": "_oracle",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "supportsInterface",
        "inputs": [
            {
                "name": "interfaceId",
                "type": "bytes4",
                "internalType": "bytes4"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
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
        "type": "event",
        "name": "ConsumerUpdated",
        "inputs": [
            {
                "name": "oracle",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "ExpectedAuthorUpdated",
        "inputs": [
            {
                "name": "previousAuthor",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "newAuthor",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "ExpectedWorkflowIdUpdated",
        "inputs": [
            {
                "name": "previousId",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            },
            {
                "name": "newId",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "ExpectedWorkflowNameUpdated",
        "inputs": [
            {
                "name": "previousName",
                "type": "bytes10",
                "indexed": true,
                "internalType": "bytes10"
            },
            {
                "name": "newName",
                "type": "bytes10",
                "indexed": true,
                "internalType": "bytes10"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "ForwarderAddressUpdated",
        "inputs": [
            {
                "name": "previousForwarder",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "newForwarder",
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
        "name": "SecurityWarning",
        "inputs": [
            {
                "name": "message",
                "type": "string",
                "indexed": false,
                "internalType": "string"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "InvalidAuthor",
        "inputs": [
            {
                "name": "received",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "expected",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidForwarderAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidSender",
        "inputs": [
            {
                "name": "sender",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "expected",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidWorkflowId",
        "inputs": [
            {
                "name": "received",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "expected",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidWorkflowName",
        "inputs": [
            {
                "name": "received",
                "type": "bytes10",
                "internalType": "bytes10"
            },
            {
                "name": "expected",
                "type": "bytes10",
                "internalType": "bytes10"
            }
        ]
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
        "name": "WorkflowNameRequiresAuthorValidation",
        "inputs": []
    }
] as const;