const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
// const sequelize = require('../config/config.json')

const User_Roles = sequelize.define('userRoles',{
  id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
  },
  role_id:{
      type: DataTypes.INTEGER,
      allowNull: false

  },
  user_id:{
      type:DataTypes.INTEGER,
      allowNull: false
  },
  
});

module.exports  = User_Roles