const fs = require('fs');

fs.readFile(`${__dirname}/states.txt`, (err, data) => {
    if(err){
        console.log("Shit!");
    }
    else{
        console.log(data.toString());
    }
})
