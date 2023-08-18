const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
// const sequelize = require('../config/config.json')

const roles = sequelize.define('Roles',{
        role_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true

        },
        role_name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        rules:{
            type:DataTypes.STRING,
            allowNull:false,
        }
        

});

module.exports = roles;