let express = require('express');
let mongoose = require('mongoose')
let app = express();
let router = require('./router/router.js')
let port = 5000;

// DB Connection
mongoose.connect("mongodb://127.0.0.1:27017/expense_tracker", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(()=> console.log("Connected to DB"));
// Middleware
// to change the data in incoming request inoto JSON format
app.use(express.json()); 
app.use(express.urlencoded({extended: true}))
//to connect the routes to express application
app.use(router) 



// At the end of the file
app.listen(port, callBack())

function callBack() {
    console.log("connected to port " + port);
}
