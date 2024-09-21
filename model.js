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
        type:DataTypes.BIGINT,
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

    restaurant_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    
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
        type:DataTypes.BIGINT,
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

const Order = sequelize.define("order",{

    order_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
        
    },

    item_id:{
        type:DataTypes.INTEGER,
        allowNull:false

    },

    restaurant_id:{
        type:DataTypes.INTEGER,
        allowNull:false

    },

    id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },

   order_status:{
        type:DataTypes.STRING,
        allowNull:false
    },

    createdAt:{
        type:DataTypes.TIME
        
    },

    updatedAt:{
        type:DataTypes.TIME   
    }

})

const Order_details = sequelize.define("order_details",{

    order_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
        
    },

   item_id:{
        type:DataTypes.INTEGER,
        allowNull:false

    },

    id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },

    quantity:{
        type:DataTypes.INTEGER,
        allowNull:false
    }, 
    
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    },

    payment_method:{
        type:DataTypes.STRING,
        allowNull:false
    },

    createdAt:{
        type:DataTypes.TIME
        
    },

    updatedAt:{
        type:DataTypes.TIME   
    }

})

Menu.belongsTo(Restaurant, { foreignKey:"restaurant_id" })
Restaurant.hasMany(Menu, { foreignKey:"restaurant_id" })

Order.belongsTo(User,{foreignKey:"id"})
User.hasMany(Order,{foreignKey:"id"})
Order_details.belongsTo(Order,{foreignKey:"order_id"})
Order.hasMany(Order_details,{foreignKey:"order_id"})

module.exports = { User: User, Restaurant: Restaurant, Menu: Menu , Order:Order, Order_details:Order_details }
