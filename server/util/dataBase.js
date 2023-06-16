const Sequelize = require('sequelize')
const sequelize = new Sequelize('productList','root','password',{
    host:'localhost',
    dialect :'mysql'
})
module.exports = sequelize