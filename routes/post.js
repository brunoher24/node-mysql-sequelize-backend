const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');

router.get('/', postCtrl.findAll);
router.get('/:id', postCtrl.findOne);

module.exports = router;