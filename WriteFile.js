const fs = require('fs');

const inputData = 'gili gili bili bili';
fs.writeFile(`${__dirname}/file1.txt`,inputData, (err) => {
    if(err){
        console.log("Error while writing :( ");
    }
    else{
        console.log("Done write function :) ");
    }
})
