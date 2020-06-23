const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('testnodemysql', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: '8889',
    /*
    pool: {
      max: 5,
      idle: 10000,
      acquire: 60000,
    }
    */
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.log(err, 'Unable to connect to the database!');
});

module.exports = sequelize;