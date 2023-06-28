let express = require('express')
let router = express.Router()
let path = require('path')

router.get('/', (req, res) => {
    res.send("This is Get Call");
})

router.get('/login', (req, res) => {
    res.send("This is my login page")
})

module.exports = router
