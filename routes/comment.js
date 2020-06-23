const express = require('express');
const router = express.Router();

const commentCtrl = require('../controllers/comment');

router.get('/:postId', commentCtrl.findAll);
router.get('readone/:id', commentCtrl.findOne);

module.exports = router;