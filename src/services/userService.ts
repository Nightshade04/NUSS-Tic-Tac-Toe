import { User, UserModel } from "../models/userModel"

export const getUser = async (userName: string) => {
    const userFromDb = await UserModel.findOne({ userName: userName }, { _id: 0, });
    return userFromDb;
}

export const createNewUser = async (userObj: User) => {
    var newUser = new UserModel(userObj);
    const result = (await newUser.save()).toObject();
    const user: any = { ...result };
    delete user.password;
    delete user._id;
    delete user.__v;
    return user;
}

export const getMatchHistory = async (userName: string) => {
    const matchHistory = await UserModel.findOne({ userName: userName }, { _id: 0, matchHistory: 1 });
    return matchHistory;
}

export const setMatchHistory = async (userName: string, newMatchHistory: Array<{ opponentName: string, result: string, }>) => {
    const result = await UserModel.updateOne({ userName: userName }, { matchHistory: newMatchHistory })
    return result;
}
