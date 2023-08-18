const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
// const sequelize = require('../config/config.json')

const Products = sequelize.define('products',{
        product_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true

        },
        product_name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        category_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        user_id:{
          type:DataTypes.INTEGER,
          allowNull:false
        },
        price:{
          type:DataTypes.DECIMAL,
          allowNull:false
        },
        image:{
          type:DataTypes.STRING,
          allowNull:false
        },
        description:{
          type:DataTypes.STRING,
          allowNull:false
        }
        

});

module.exports = Products;