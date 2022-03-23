const mongoose = require('../utilities/dbConnection');

const MatchSchema = new mongoose.Schema({
    opponentId: {
        type: String,
        required: true
    },
    opponentName: {
        type: String,
        required: true
    },
    result: {
        type: String,
        required: true
    }
});
const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    profilePictureURL: {
        type: String,
        required: true
    },
    matchHistory: [MatchSchema],
    password: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;