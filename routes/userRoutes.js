var express = require('express');
var router = express.Router({ mergeParams: true });
const userController = require('../controllers/userController');

/* GET users listing. */
router.get('/getmatchhistory', userController.getMatchHistory);

router.put('/setmatchhistory', userController.setMatchHistory);

module.exports = router;
