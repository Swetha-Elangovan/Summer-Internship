let express = require("express")
let app = express();

app.get("/", (req, res) => {
    console.log("This is called");
    res.send(' <div> <p style="color:green"> Name : Swetha<br>DOB : 07-03-2003<br>College : SECE </p> </div>');
});

app.listen(8080, ()=> {
    console.log("Server connected");
});
