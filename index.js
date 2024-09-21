const express = require('express')

const {User, Restaurant, Menu, Order, Order_details} = require("./model");

const { Where, Json } = require('sequelize/lib/utils');

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
res.status(400).send("something went wrong")
}

})

app.post("/login", async (req,res)=>{

const {email,password}= req.body;
const findUser = await User.findOne({ where: { email: email } })

if(findUser)
{
    const data= JSON.parse(JSON.stringify(findUser))
    console.log(data.password)
    if(data.password==password){
        res.status(200).send("logged in sussesfully")
    }
    else{
        res.status(401).send("invalid user name or password")
    }
}
else{
    res.status(200).send("user does not exist pls register")
}

})

app.post("/registerRestaurant", async (req,res)=>{

    const {rest_name, rest_address,rest_phone,rest_rating,rest_status} =req.body
    
    try{
        const newRestaurant = await Restaurant.create({
            rest_name, 
            rest_address,
            rest_phone,
            rest_rating,
            rest_status,
     })
    
    if(newRestaurant){
        res.status(201).send("restaurant created succesfully")
    }
}
    catch(err)
    {
    console.log(err)
    res.status(400).send("something went wrong")
    }
    
    })

app.post("/addmenu", async(req,res)=>
    {
    const {restaurant_id, item_name, item_description,item_price, item_rating, item_availability, is_veg} = req.body
    try{

        const newMenu = await Menu.create({
            item_name, 
            restaurant_id,
            item_description,
            item_price, 
            item_rating, 
            item_availability, 
            is_veg
     })
     if(newMenu){
        res.status(201).send("Menu created succesfully")
    }
}
    catch(err)
    {
    console.log(err)
    res.status(400).send("something went wrong")
    }
    

})

app.post("/creatOrder", async(req,res)=>
    {
    const {id, item_id, order_status, quantity, price, payment_method} = req.body
    try{

        const newOrder = await Order_details.create({
            id, 
            item_id,
            order_status,
            quantity,
            price,
            payment_method
     })

     if(newOrder){
       
        try{
            //find the restaurant id from item_id
            //from restaurant id get the menu and from that get the restaurant

            const restaurant_id_data = await Menu.findByPk(item_id);
            const data = JSON.parse(Json.stringify(restaurant_id_data));
            const restaurant_id = data.restaurant_id;

            const order_id_data =JSON.parse(Json.stringify(newOrder));
            const order_id = order_id_data.order_id;

            
            const createOrder = await Order.create({
                order_id,
                item_id,
                restaurant_id,
                id,
                order_status
            
            })
            
        }
        catch(err){
            console.log(err)
        }






    }
}
catch(err)
{
console.log(err)
res.status(400).send("something went wrong")
}


})