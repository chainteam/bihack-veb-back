const abi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "_guid",
                "type": "uint256"
            }
        ],
        "name": "getlastid",
        "outputs": [
            {
                "name": "lastid",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_guid",
                "type": "uint256"
            },
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_status",
                "type": "uint256"
            }
        ],
        "name": "changeStatus",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_guid",
                "type": "uint256"
            },
            {
                "name": "_title",
                "type": "string"
            },
            {
                "name": "_value",
                "type": "uint256"
            },
            {
                "name": "_status",
                "type": "uint256"
            },
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "newRequestr",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_guid",
                "type": "uint256"
            },
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "getRequest",
        "outputs": [
            {
                "name": "_title",
                "type": "string"
            },
            {
                "name": "_value",
                "type": "uint256"
            },
            {
                "name": "_status",
                "type": "uint256"
            },
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_newOwner",
                "type": "address"
            }
        ],
        "name": "addOwner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_guid",
                "type": "uint256"
            },
            {
                "name": "_status",
                "type": "uint256"
            },
            {
                "name": "_title",
                "type": "string"
            },
            {
                "name": "_value",
                "type": "uint256"
            },
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "newObeject",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "guid",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "data",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "string"
            }
        ],
        "name": "_Request",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "guid",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "lastid",
                "type": "uint256"
            }
        ],
        "name": "_Object",
        "type": "event"
    }
];

export default abi;