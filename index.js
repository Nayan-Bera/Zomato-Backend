const express = require('express')
const user = require("./model")

const app = express();

const port =8080;

app.listen(port, (err)=>{

    if(err) console.log("erroe"+ err);

    else console.log("server started succesfully on port"+ port)
})
//this is middleware use to pass your json structure
app.use(express.json());
// create simple get api that gives you some data in response

app.post("/registeruser", async(req,res)=>{
    const {name,email,Password,Phone_number}= req.body
    console.log(name,email)
    const newuser = await user.create({
        name,email,Password,Phone_number
    })
console.log(newuser)
})


