const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'tesark',
  password: 'qwerty123',
  database: 'productDB'
});

module.exports = sequelize;