const {DataTypes}= require("sequelize")

const sequelize = require("./dbconnect")



const User = sequelize.define("user",{
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
    
    phone_number:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true
    },
    createdAt:{
        type:DataTypes.TIME
        
    } ,
    updatedAt:{
        type:DataTypes.TIME   
    }

 
})
const Menu =sequelize.define("menu",{
    
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
    
    phone_number:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true
    },
    createdAt:{
        type:DataTypes.TIME
        
    } ,
    updatedAt:{
        type:DataTypes.TIME   
    }


})

module.exports = User;