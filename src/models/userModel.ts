import mongoose, { Schema } from "mongoose";

const MatchSchema = new mongoose.Schema({
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

export const UserModel = mongoose.model('user', UserSchema);

export interface User {
    userName: string,
    profilePictureURL: string,
    emailId: string,
    matchHistory: Array<{
        opponentName: string,
        result: string,
    }>
}
