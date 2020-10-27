const Sequelize = require('sequelize');

const sequelize = new Sequelize('phpmyadmin', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });


module.exports = sequelize 