#1: Number Input-Output
    Endpoint: http://127.0.0.1:3010/api/number
    Input:{
            "nums":[3,2,4],
            "target":7
        }
    Output:{
        "state": true,
        "result": [
            0,
            2
        ]
    }

#2: Exchange in Vending Machine
    Endpoint: http://127.0.0.1:3010/api/exchange
    Input: {
        "price":"102",
        "pay":"1000"
    }
    Output:{
        "state": true,
        "result": {
            "1": 1,
            "2": 1,
            "5": 1,
            "20": 2,
            "50": 1,
            "100": 3,
            "500": 1
        }
    } 

#3: Promotion Engine
    Endpoint: http://127.0.0.1:3010/api/promotion
    input: [
            { "type": "A", "amount": 2 },
            { "type": "B", "amount": 2 },
            { "type": "C", "amount": 1 }
        ]
    Output:{
        "state": true,
        "result": {
            "allPrice": 4586,
            "disCountDual": 100,
            "disCount10": 458.6,
            "total": 4027.4
        }
    }