// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    username:'root',
    password: 'password',
    database: 'just_tech_news_db',
    dialect: 'mysql',
    port: 3306
  });

module.exports = sequelize;