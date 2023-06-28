let express = require('express')
let Expense = require('../models/expense.js');
let router = express.Router()
//let path = require('path');
//const expense = require('../models/expense');

/*
router.get('/', (req, res) => {
    res.send("This is Get Call");
})

router.get('/login', (req, res) => {
    res.send("This is my login page")
})
*/

router.post("/expense/create",createExpense);
router.get("/expense/get");
router.patch("/expense/edit/:id");
router.delete("/expense/delete/:id");

async function createExpense(req, res){
    let body = req.body;
    let newExpense = new Expense({
        title: body.title,
        amount: body.amount,
        date: body.date
    });
    await newExpense.save();
    res.json("Expense created");
}
module.exports = router;
