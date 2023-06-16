const Sequelize = require('sequelize')
const sequelize = require('../util/dataBase')
const Product = sequelize.define('product',{
    id:{
        type : Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    price : Sequelize.INTEGER ,
    product : Sequelize.STRING
})
module.exports = Product