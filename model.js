const {DataTypes}= require("sequelize")

const {Sequelize}= require("./dbconnect")
const sequelize = require("./dbconnect")

const user = sequelize.define("user",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },

    password:{
        type:DataTypes.STRING,
        allowNull:false
    }, 
    
    Phone_number:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true
    }
})

module.exports = user;