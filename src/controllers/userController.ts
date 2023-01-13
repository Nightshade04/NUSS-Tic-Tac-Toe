import { Request, Response, NextFunction } from 'express';
import { User } from '../models/userModel';
import { getUser } from '../services/userService';

export const signInHandler = async (req: Request, res: Response, next: NextFunction) => {
    const userName = req.body.userName;
    const password = req.body.password;
    var loggedInUser: User = {
        userName: '',
        profilePictureURL: '',
        emailId: '',
        matchHistory: []
    };
    try {
        const userFromDb = await getUser(userName);
        if (userFromDb.password === password) {
            loggedInUser.userName = userFromDb.userName;
            loggedInUser.profilePictureURL = userFromDb.profilePictureURL;
            loggedInUser.emailId = userFromDb.emailId;
            loggedInUser.matchHistory = userFromDb.matchHistory;
            res.status(200).send(loggedInUser);
        } else {
            throw new Error('Wrong password entered!');
        }
    } catch (error) {
        next(error);
    }
}

export const signUpHandler = async (req: Request, res: Response, next: NextFunction) => { }

export const getMatchHistoryHandler = async (req: Request, res: Response, next: NextFunction) => { }

export const setmatchHistoryHandler = async (req: Request, res: Response, next: NextFunction) => { }
