import { Request, Response } from 'express';
import { UserModel } from '../models/UserModels';
import { UserService } from '../service/UserService';


export class UserController {
    constructor(private userService: UserService) {
    }

    async userCreate(req: Request, res: Response):Promise<UserModel | any > {
        const user: UserModel = await this.userService.userCreate(req.body);
        res.status(200).send(user);
    }
        
    async userRead(req: Request, res: Response):Promise<UserModel | any > {
        const user: UserModel = await this.userService.userRead(req.params.id);
        res.status(200).send(user);
    }
    async userReadAll(req: Request, res: Response):Promise< void > {
        const user: UserModel = await this.userService.userReadAll();
        res.status(200).send(user);
    }
    async userUpdate(req: Request, res: Response):Promise<UserModel | any > {
        const user: UserModel = await this.userService.userUpdate(req.params.id, req.body);
        res.status(200).send(user);
    }
    async userDelete(req: Request, res: Response):Promise<UserModel | any > {
        const user: UserModel = await this.userService.userDelete(req.params.id);
        res.status(200).send(user);
    }

}


