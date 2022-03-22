var express = require('express');
const UserModel = require('../models/userModel');
var router = express.Router();

router.get('/signin', async (req, res, next) => {

  var userName = req.body.userName;
  var password = req.body.password;

  try {
    const userFromDB = await UserModel.findOne({ 'userName': userName }, { '_id': 0 });
    var loggedInUser = {};

    if (userFromDB == null) {
      throw new Error('User not found with username: ' + userName);
    } else {
      if (userFromDB.password === password) {
        loggedInUser.userName = userFromDB.userName;
        loggedInUser.emailId = userFromDB.emailId;
        loggedInUser.profilePictureURL = userFromDB.profilePictureURL;
        res.status(200).send(loggedInUser);
      } else {
        throw new Error('Unauthorized access attempt from user: ' + userName);
      }
    }
  } catch (error) {
    error.status = 400;
    next(error);
  }

});

router.post('/signUp', async (req, res, next) => {

  //TODO : Change password fields by encripting it and adding a salt to save it to DB
  var newUser = new UserModel(req.body);

  try {
    await newUser.save();
    res.status(200).send('SignIn Successful');
  } catch (error) {
    error.status = 400
    next(error);
  }

});

module.exports = router;
