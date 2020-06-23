// const Post = require('../models/post');
const sequelize = require('../services/sequelize');


exports.findOne = (req, res) => {
    const postId = req.params.id;

    sequelize.query(`
    SELECT user.name, post.content, DATE_FORMAT(post.date_, \"%d-%m-%Y à %H:%i\") AS date_ FROM post 
    INNER JOIN user ON user.id = post.user_id 
    WHERE post.id = ?`, { type: sequelize.QueryTypes.SELECT, replacements: [postId] })
        .then(post => {
            console.log(post);
            res.status(200).json(post);
        })
        .catch(err => {
            console.log('Something bad happened ...');
            return res.status(404).send(new Error('Post not found!'));
        });
}

exports.findAll = (req, res) => {
    sequelize.query(`
    SELECT user.name AS userName, user.firstname AS userFirstname, post.content, DATE_FORMAT(post.date_, \"%d-%m-%Y à %H:%i\") AS date__
    FROM post 
    INNER JOIN user ON user.id = post.user_id 
    ORDER BY post.date_ DESC`, { type: sequelize.QueryTypes.SELECT })
        .then(posts => {
            console.log(posts);
            return res.status(200).json(posts);
        })
        .catch(err => {
            console.log('Something bad happened ...');
            return res.status(404).send(new Error('Post not found!'));
        });
}