const { Model, DataTypes } = require('sequelize');
const sequelize = require('../services/sequelize');

class Post extends Model {};

Post.init({
    content: DataTypes.STRING,
    date_: DataTypes.DATE,
    user_id: DataTypes.INTEGER
}, { sequelize, modelName: 'post' });

exports.Post = Post;