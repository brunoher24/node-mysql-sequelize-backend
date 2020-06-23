// const Comment = require('../models/comment');
const sequelize = require('../services/sequelize');

exports.findAll = (req, res) => {
    const postId = req.params.postId;

    sequelize.query(`
    SELECT user.name AS userNmame, comment.content, DATE_FORMAT(comment.date_, \"%d-%m-%Y à %H:%i\") AS date__ 
    FROM comment 
    INNER JOIN user ON user.id = comment.user_id  
    WHERE comment.post_id = ?
    ORDER BY post.date_ DESC`, { type: sequelize.QueryTypes.SELECT, replacements: [postId] })
        .then(comment => {
            console.log(comment);
            res.status(200).json(comment);
        })
        .catch(err => {
            console.log('Something bad happened ...');
            return res.status(404).send(new Error('Comment not found!'));
        });
}

exports.findOne = (req, res) => {

    const id = req.params.id;
    console.log(id);

    sequelize.query(`
    SELECT user.name, comment.content, DATE_FORMAT(comment.date_, \"%d-%m-%Y à %H:%i\") AS date__ 
    FROM comment 
    INNER JOIN user ON user.id = comment.user_id 
    WHERE comment.id = ?`, { type: sequelize.QueryTypes.SELECT, replacements: [postId] })
        .then(comment => {
            console.log(comment);
            res.status(200).json(comment);
        })
        .catch(err => {
            console.log('Something bad happened ...');
            return res.status(404).send(new Error('Comment not found!'));
        });
}