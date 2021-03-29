import { UserDao } from "../dao/UserDao";
import { UserModel } from "../models/UserModels";


export class UserService {
    constructor(private userDao: UserDao) {
    }

    async userCreate(body: UserModel): Promise<UserModel |any> {
        return await this.userDao.save(body);

    }
    async userRead(id: string): Promise<UserModel | any> {
        return await this.userDao.getById(id);
    }
    async userReadAll(): Promise<UserModel | any> {
        return await this.userDao.getAll();
    }
    async userUpdate(id: string, body: UserModel): Promise<UserModel | any> {
        return await this.userDao.userUpdate(id, body);
    }
    async userDelete(id: string): Promise<UserModel | any> {
        return await this.userDao.userDelete(id);
    }
}