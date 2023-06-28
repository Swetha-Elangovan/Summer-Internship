let express = require('express');
//let mongoose = require('mongoose')
let app = express();
let router = require('./router/router.js')

let port = 5000;

 app.use(router)

//! DB Connection
//mongoose.connect("http://localhost:27017");

// At the end of the file
app.listen(port, callBack())

function callBack() {
    console.log("connected to server");
}
   
