import { NextFunction, Request, Response } from 'express';
import { UserModel } from '../models/UserModels';
import { UserService } from '../service/UserService';
import { JwtToken } from '../config/jwtToken';



export class UserController {
    jwttok = new JwtToken ();
    constructor(private userService: UserService) {
    }

    async userCreate(req: Request, res: Response):Promise<UserModel | any > {
        const user: UserModel = await this.userService.userCreate(req.body);
        const data = {users:user,token: await this.jwttok.signin(user._id)}
        res.status(200).send(data);
    }

    async userRead(req: Request, res: Response):Promise<void> {
        const jwtverify = await this.jwttok.verify(req);
        if(jwtverify.auther===true){
        const user: UserModel = await this.userService.userRead(req.params.id);
        res.status(200).send(user);
        }else{
            res.status(401).send(jwtverify)
        }
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


