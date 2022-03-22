var express = require('express');
var router = express.Router({mergeParams: true});
const userModel = require('../models/userModel');

/* GET users listing. */
router.get('/', (req, res, next) => {
  console.log(req.params, "FROM HERE");
  res.send('respond with a resource');
});

router.put('', () => {});

module.exports = router;
