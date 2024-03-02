## Harmonyx test for a job interview

### Number Input-Output
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.<br>
You can return the answer in any order.<br>
Ex1: Input: nums = [2,7,11,15], target = 9 Output: [0,1] Output: Because nums[0] + nums[1] == 9, we return [0, 1].<br>
Ex2: Input: nums = [3,2,4], target = 6 Output: [1,2].
#### Request
```json
{
    "nums":[3,2,4],
    "target":7
}
```
#### Response
```json
{
    "state": true,
    "result": [
        0,
        2
    ]
}
```
<hr/>

### Exchange in Vending Machine
API for calculating change for a vending machine, The minimum number of coins or bills should be returned. Coin/bill types: [1, 2, 5, 10, 20, 50, 100, 500, 1000].<br>
Input: amount to be paid, amount paid by the customer<br>
Output: coins or bills to be returned
#### Request
```json
{
    "price":"102",
    "pay":"1000"
}
```
#### Response
```json
{
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
```
<hr/>

### Promotion Engine
API for calculating promotion<br>
Input: a list of product SKUs and the quantity of each product purchased.<br>
Output: total amount to be paid<br>
Additional details: The prices of the products and the promotions are predefined as constant.<br>
variables. The calculation will be based on these predefined variables.
#### Request
```json
[
    { "type": "A", "amount": 2 },
    { "type": "B", "amount": 2 },
    { "type": "C", "amount": 1 }
]
```
#### Response
```json
{
    "state": true,
    "result": {
        "allPrice": 4586,
        "disCountDual": 100,
        "disCount10": 458.6,
        "total": 4027.4
    }
}
```