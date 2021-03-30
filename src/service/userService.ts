import { UserDao } from "../dao/userDao";
import { logger } from "../logger";
import { UserModel } from "../models/userModels";
import { DELETE_USER, GET_ALLUSER, GET_USER, MESSAGE, UPDATE_USER, USER_CREATE, USER_SERVICE } from "../utils/const";


export class UserService {
    constructor(private userDao: UserDao) {
    }

    async userCreate(body: UserModel): Promise<UserModel | any> {
        logger.info(USER_SERVICE + USER_CREATE + MESSAGE)
        return await this.userDao.userCreate(body);

    }
    async userRead(id: string): Promise<UserModel | any> {
        logger.info(USER_SERVICE + GET_USER + MESSAGE)
        return await this.userDao.userRead(id);
    }
    async userReadAll(): Promise<UserModel | any> {
        logger.info(USER_SERVICE + GET_ALLUSER + MESSAGE)
        return await this.userDao.userReadAll();
    }
    async userUpdate(id: string, body: UserModel): Promise<UserModel | any> {
        logger.info(USER_SERVICE + UPDATE_USER + MESSAGE)
        return await this.userDao.userUpdate(id, body);
    }
    async userDelete(id: string): Promise<UserModel | any> {
        logger.info(USER_SERVICE + DELETE_USER + MESSAGE)
        return await this.userDao.userDelete(id);
    }
}