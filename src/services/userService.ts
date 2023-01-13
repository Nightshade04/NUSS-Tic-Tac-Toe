import { UserModel } from "../models/userModel"

export const getUser = async (userName: string) => {
    const userFromDb = await UserModel.findOne({ userName: userName }, { _id: 0, });
    if (userFromDb == null) {
        throw new Error(`User with name: ${userName} does not exist.`);
    } else {
        return userFromDb;
    }
}
