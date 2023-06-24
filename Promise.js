//Promise in Node JS

const fs = require('fs');

function read(filePath){
    return new Promise((resolve, reject) => {
        fs.readFile(filePath,(err, data) =>{
            if(err)
                reject('Failed during read ');
            else
                resolve(data); 
        })
    })
}


function write(filePath, input){
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, input,(err) => {
            if(err)
                reject('Error while writing');
            else
                resolve("Done write function"); 
        })
    })
}


read(`${__dirname}/states.txt`).then((data) => {
    console.log(data.toString());
    return write(`${__dirname}/test.txt`,'Test input')
}).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
