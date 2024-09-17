const express = require('express')
const User = require("./model")

const app = express();

const port =8080;

app.listen(port, (err)=>{

    if(err) console.log("erroe"+ err);

    else console.log("server started succesfully on port"+ port)
})
//this is middleware use to pass your json structure
app.use(express.json());
// create simple get api that gives you some data in response

app.post("/registerUser", async(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const phone_number = req.body.phone_number;

   /// const {name,email,Password,Phone_number}= req.body
    console.log(name,email)

    const newUser = await User.create({
        name,
        email,
        password,
        phone_number,
    })

console.log(newUser)

})



