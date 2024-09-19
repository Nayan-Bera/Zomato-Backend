const {DataTypes, INTEGER}= require("sequelize")

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
    
    item_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },

    item_name:{
        type:DataTypes.STRING,
        allowNull:false
    },

    item_description:{
        type:DataTypes.STRING,
        allowNull:false,
    },

    item_price:{
        type:DataTypes.INTEGER,
        allowNull:false
    }, 
    
    item_rating:{
        type:DataTypes.INTEGER,
        allowNull:true,   
    },

    item_availability:{
        type:DataTypes.INTEGER,
        allowNull:false,   
    },

    is_veg:{
        type:DataTypes.BOOLEAN,
        allowNull:false,   
    },

    createdAt:{
        type:DataTypes.TIME
        
    },

    updatedAt:{
        type:DataTypes.TIME   
    }

})

const Restaurant = sequelize.define("restaurant",{

    restaurant_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
        
    },

    rest_name:{
        type:DataTypes.STRING,
        allowNull:false

    },

    rest_address:{
        type:DataTypes.STRING,
        allowNull:false
    },

    rest_phone:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true
    },

    rest_rating:{
        type:DataTypes.INTEGER,
        allowNull:true
    },

    rest_status:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },

    createdAt:{
        type:DataTypes.TIME
        
    },

    updatedAt:{
        type:DataTypes.TIME   
    }

})

module.exports = User;
module.exports = Menu;
module.exports = Restaurant;