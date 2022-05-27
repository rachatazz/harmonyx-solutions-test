const express = require("express")
const router = express.Router();

router.post('/number', (req, res) => {
    const { nums, target } = req.body
    function getIndex(arr, target) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i+1; j < arr.length; j++) {
                if (arr[i] + arr[j] === target) return [i, j]
            }
        }
        return []
    }
    const result = getIndex(nums, target)
    res.send({ state: true, result: result })
})

router.post('/exchange', (req, res) => {
    const { price, pay } = req.body
    function exchange(price, pay) {
        if (pay >= price) {
            const type = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
            let haveChange = pay - price;
            const collegtion = [];
            while (haveChange > 0) {
                const myType = type.filter((item) => item <= haveChange)
                haveChange = haveChange - myType[myType.length - 1]
                collegtion.push(myType[myType.length - 1])
            }
            return collegtion
        } else {
            return [0]
        }
    }

    const mustChange = {}
    exchange(+price, +pay).sort().forEach((val) => {
        mustChange[val] = (mustChange[val] || 0) + 1
    })
    res.send({ state: true, result: mustChange })
})

router.post("/promotion", (req, res) => {
    const list = req.body
    function promotion(list) {
        const produceDetail = [
            { type: "A", price: 99, detail: "bag" },
            { type: "B", price: 199, detail: "shirt" },
            { type: "C", price: 3990, detail: "shoes" }
        ];
        const allPrice = list
            .map((item) => {
                const price = produceDetail.find((val) => val.type === item.type).price;
                return item.amount * price;
            })
            .reduce((result, val) => result + val, 0);
        const disCountDual =
            list
                .filter((item) => "AB".includes(item.type))
                .map((item) => item.amount)
                .sort()[0] * 50;
        let disCount10 = 0;
        if (allPrice >= 200) {
            disCount10 = allPrice * 0.1;
        }
        const total = allPrice - disCountDual - disCount10;
        return { allPrice, disCountDual, disCount10, total };
    }
    const result = promotion(list);
    res.send({ state: true, result })
})

module.exports = router;
