const express = require('express')
const User = require("./model");
const { Where } = require('sequelize/lib/utils');

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
try{
    const newUser = await User.create({
        name,
        email,
        password,
        phone_number,
    })
res.status(201).send("user created succsefully");

}
catch(err)
{
console.log(err)

}

})

app.post("/login", async (req,res)=>{

const {email,password}= req.body;
const findUser = await User.findOne({where:{email:email}})

if(findUser)
{
    console.log(findUser)
}

})



