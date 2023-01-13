import { Request, Response, NextFunction } from 'express';
import { User } from '../models/userModel';
import { createNewUser, getMatchHistory, getUser } from '../services/userService';
import { encrypt } from '../utils/hasher';

export const signInHandler = async (req: Request, res: Response, next: NextFunction) => {
    const userName = req.body.userName;
    var loggedInUser: User = {
        userName: '',
        profilePictureURL: '',
        emailId: '',
        matchHistory: []
    };
    try {
        const password = encrypt(req.body.password);
        const userFromDb = await getUser(userName);
        if (userFromDb) {
            if (userFromDb.password === password) {
                loggedInUser.userName = userFromDb.userName;
                loggedInUser.profilePictureURL = userFromDb.profilePictureURL;
                loggedInUser.emailId = userFromDb.emailId;
                loggedInUser.matchHistory = userFromDb.matchHistory;
                res.status(200).send(loggedInUser);
            } else {
                throw new Error('Wrong password entered!');
            }
        } else {
            throw new Error(`User with name: ${userName} does not exist.`);
        }
    } catch (error) {
        next(error);
    }
}

export const signUpHandler = async (req: Request, res: Response, next: NextFunction) => {
    const userName = req.body.userName;
    try {
        var userFromDb = await getUser(userName);
        if (userFromDb == null) {
            var userObj: User = {
                ...req.body,
                matchHistory: [],
            };
            userObj.password = encrypt(`${userObj.password}`);
            const user: User = await createNewUser(userObj);
            res.status(200).send(user);
        } else {
            throw new Error(`User ${userName} already exists. Login instead.`);
        }
    } catch (error) {
        next(error);
    }
}

export const getMatchHistoryHandler = async (req: Request, res: Response, next: NextFunction) => {
    const userName = req.params.username;
    try {
        const matchHistory = await getMatchHistory(userName);
        if(matchHistory) {
            res.status(200).send(matchHistory);
        } else {
            throw new Error(`User with name: ${userName} does not exist.`);
        }
    } catch (error) {
        next(error);
    }
}

export const setmatchHistoryHandler = async (req: Request, res: Response, next: NextFunction) => { }
