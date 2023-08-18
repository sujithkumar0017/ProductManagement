'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      product_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true

    },
    product_name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    category_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    user_id:{
      type:Sequelize.INTEGER,
      allowNull:false
    },
    price:{
      type:Sequelize.DECIMAL,
      allowNull:false
    },
    image:{
      type:Sequelize.STRING,
      allowNull:false
    },
    description:{
      type:Sequelize.STRING,
      allowNull:false
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
    await queryInterface.dropTable('products');
  }
};