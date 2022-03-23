const UserModel = require('../models/userModel');

exports.signIn = async (req, res, next) => {
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
}

exports.signUp = async (req, res, next) => {
    var userObj = {
        matchHistory: [],
        ...req.body
    };
    var newUser = new UserModel(userObj);

    try {
        const userFromDB = await UserModel.findOne({ 'userName': req.body.userName });
        if (userFromDB == null) {
            await newUser.save();
            res.status(200).send('SignUp Successful');
        } else {
            throw new Error('User with username: ' + req.body.userName + ', already exists. Please try again with a different username.');
        }
    } catch (error) {
        error.status = 400
        next(error);
    }
}