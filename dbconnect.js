const {Sequelize}= require("sequelize")



const sequelize = new Sequelize("firstdb","root","root",{

    host:"localhost",
    dialect:"mysql",
})

sequelize.authenticate().then(()=>{

    console.log("connected to mysql sucssefully")

}).catch((err)=>{

    console.log("unble to connect due to error"+err)
})

module.exports = sequelize;