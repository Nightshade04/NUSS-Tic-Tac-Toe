var express = require('express');
var router = express.Router({mergeParams: true});

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.params, "FROM HERE");
  res.send('respond with a resource');
});

module.exports = router;
