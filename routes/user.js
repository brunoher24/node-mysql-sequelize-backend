const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.get('/', userCtrl.findAll);
router.get('/:id', userCtrl.findOne);
//router.get('/login', userCtrl.login);
//router.get('/signup', userCtrl.signup);

module.exports = router;