const { Model, DataTypes } = require('sequelize');
const sequelize = require('../services/sequelize');

class Comment extends Model {};

Comment.init({
    content: DataTypes.STRING,
    date_: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER
}, { sequelize, modelName: 'comment' });

exports.Comment = Comment;