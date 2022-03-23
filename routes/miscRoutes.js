var express = require('express');
const miscController = require('../controllers/miscController');
var router = express.Router();

router.post('/signin', miscController.signIn);

router.post('/signUp', miscController.signUp);

module.exports = router;
