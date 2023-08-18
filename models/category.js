const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const category = sequelize.define('categories',{
  category_id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    allowNull:false,
    autoIncrement:true
  },
  category_name:{
      type:DataTypes.STRING,
      allowNull:false
  },
  user_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
  }
});

module.exports = category