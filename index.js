const express = require('express')


const app = express();

const port =8080;

app.listen(port, (err)=>{

    if(err) console.log("erroe"+ err);

    else console.log("server started succesfully on port"+ port)
})
// create simple get api that gives you some data in response

app.get("/test",(req,res)=>{
    res.status(200).send("hello from me")
})