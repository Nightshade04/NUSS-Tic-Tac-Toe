const userModel = require('../models/userModel');

exports.getMatchHistory = async (req, res, next) => {
    const userName = req.params.userName;
    try {
        const userMatchHistoryFromDB = await userModel.findOne({ 'userName': userName }, { '_id': 0, 'matchHistory': 1 });
        if (userMatchHistoryFromDB == null) {
            throw new Error('user with username: ' + userName + ', does not exist.');
        } else {
            res.status(200).send(userMatchHistoryFromDB);
        }
    } catch (error) {
        error.status = 400;
        next(error);
    }
}

exports.setMatchHistory = async (req, res, next) => {
    const userName = req.params.userName;
    const matchHistory = req.body.matchHistory;
    try {
        const userFromDB = await userModel.findOne({'userName': userName});
        if(userFromDB == null) {
            throw new Error('user with username: ' + userName + ', does not exist.');
        } else {
            userFromDB.matchHistory = matchHistory;
            await userFromDB.save();
            res.status(200).send('Updated Successfully');
        }
    } catch (error) {
        error.status = 400;
        next(error);
    }

 }