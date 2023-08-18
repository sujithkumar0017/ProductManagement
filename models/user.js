const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
// const sequelize = require('../config/config.json')

const User = sequelize.define('Users',{
  user_id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
  },
  user_name:{
      type: DataTypes.STRING,
      allowNull: false

  },
  phone:{
      type:DataTypes.BIGINT,
      len:{
          args:[10,20],
          msg:"Min length of the phone number is 10"
      },
      allowNull: false

  },
  email:{
      type:DataTypes.STRING,
      validate:{
          isEmail:true,
      },
      allowNull: false,
      // primaryKey: true
  },
  is_active:{
          type:DataTypes.ENUM("True","False"),
          defaultValue:"True"
  },
  password:{
         type:DataTypes.STRING,
         allowNull: false,
  }

});

module.exports  = User