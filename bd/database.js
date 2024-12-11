
  

const {Sequelize} = require('sequelize')


  
const sequelize = new Sequelize('logApp','root','Salmeron28',{
    host:'localhost',
    dialect:'mysql'
})


  
module.exports=sequelize;
