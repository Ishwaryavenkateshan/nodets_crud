import mongoose from 'mongoose';
import { logger } from '../logger';
import { UserSchema, UserModel } from '../models/userModels';
import { DELETE_USER, GET_ALLUSER, GET_USER, MESSAGE, UPDATE_USER, USER_CREATE, USER_DAO } from '../utils/const';

const UserModel = mongoose.model('user', UserSchema);
export class UserDao {

    async userCreate(body: UserModel) {
        logger.info(USER_DAO + USER_CREATE + MESSAGE)
        const user = new UserModel(body);
        return await user.save();
    }
    async userReadAll() {
        logger.info(USER_DAO + GET_USER + MESSAGE)
        const user = UserModel.find({})
        return await user;
    }
    async userRead(id: string) {
        logger.info(USER_DAO + GET_ALLUSER + MESSAGE)
        const user = UserModel.findOne({ _id: id })
        return await user;
    }
    async userUpdate(id: string, body: UserModel) {
        logger.info(USER_DAO + UPDATE_USER + MESSAGE)
        await UserModel.findByIdAndUpdate(id, body);
        const user = UserModel.findOne({ _id: id })
        return await user;
    }
    async userDelete(id: string) {
        logger.info(USER_DAO + DELETE_USER + MESSAGE)
        const user = UserModel.deleteOne({ _id: id });
        return await user;
    }
}

