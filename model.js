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
    Email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },

    Password:{
        type:DataTypes.STRING,
        allowNull:false
    }, 
    
    Phonenumber:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

module.exports = user;