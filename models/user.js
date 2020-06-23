const { Model, DataTypes } = require('sequelize');
const sequelize = require('../services/sequelize');

class User extends Model {};

User.init({
    name: DataTypes.STRING,
    firstname: DataTypes.STRING,
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER

}, { sequelize, modelName: 'user' });

exports.User = User;