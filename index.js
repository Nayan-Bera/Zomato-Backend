const express = require('express')


const app = express();

const port =8080;

app.listen(port, (err)=>{

    if(err) console.log("erroe"+ err);

    else console.log("server started succesfully on port"+ port)
})
//this is middleware use to pass your json structure
app.use(express.json());
// create simple get api that gives you some data in response

app.get("/test",(req,res)=>{
    res.status(200).send({name:"avik",
        reason:"meantally sick",age:34
    })
})

app.post("/login",(req,res)=>{
    console.log(req.body)
res.status(200).send("logged in sucessfully")

})



