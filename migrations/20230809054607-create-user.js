'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      user_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_name:{
        type: Sequelize.STRING,
        allowNull: false
  
    },
    phone:{
        type:Sequelize.BIGINT,
        len:{
            args:[10,20],
            msg:"Min length of the phone number is 10"
        },
        allowNull: false
  
    },
    email:{
      type:Sequelize.STRING,
      validate:{
          isEmail:true,
      },
      allowNull: false,
      primaryKey: true
    },
    is_active:{
            type:Sequelize.ENUM("True","False"),
            defaultValue:"True"
    },
    password:{
           type:Sequelize.STRING,
           allowNull: false,
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};