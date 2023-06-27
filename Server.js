const http = require('http');
const { callbackify } = require('util');
const hostname = 'localhost'; 
const port = 8080;

let server = http.createServer((request, response)=>{
    response.end("Connected to Server");
})
server.listen(port, () => console.log("Listening on 8080"))
