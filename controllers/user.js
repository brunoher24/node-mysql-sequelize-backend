// const User = require('../models/user');
const sequelize = require('../services/sequelize');


exports.findAll = (req, res) => {
    sequelize.query(`SELECT * FROM user`, { type: sequelize.QueryTypes.SELECT })
        .then(users => {
            console.log(users);
            res.status(200).json(users);
        })
        .catch(err => {
            console.log('Something bad happened ...', err);
            return res.status(404).send(new Error('Comment not found!'));
        });
}

exports.findOne = (req, res) => {
    const id = req.params.id;
    console.log(id);

    sequelize.query(`SELECT * FROM user 
    WHERE user.id = ?`, { type: sequelize.QueryTypes.SELECT, replacements: [id] })
        .then(user => {
            console.log(user);
            res.status(200).json(user);
        })
        .catch(err => {
            console.log('Something bad happened ...');
            return res.status(404).send(new Error('Comment not found!'));
        });
}