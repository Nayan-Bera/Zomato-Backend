const {sequelize}= require("sequelize")


const sequelize = new sequelize("firstdb","root","root",{

    host:"localhost",
    dialect:"mysql",
})

sequelize.authenticate().then(()=>{

    console.log("connected to mysql sucssefully")

}).catch((err)=>{

    console.log("unble to connect due to error"+err)
})