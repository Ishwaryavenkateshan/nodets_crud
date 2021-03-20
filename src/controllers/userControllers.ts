import { Request, Response } from 'express';
import { UserService } from '../Service/userService';
import { UserModel } from '../models/userModels';

let userservice: UserService;

export class UserController {
    constructor() {
        userservice = new UserService();
    }
    async usercreate(req: Request, res: Response) {
            const user: any = await userservice.usercreate(req.body);
            res.status(200).send(user);
    }
        
    async userread(req: Request, res: Response) {
       
    try {
        const user: any = await userservice.userread(req.body);
         res.status(200).send(user);
    } catch (err) {
        if (err && err._message && err._message === 'validation failed') {
            res.status(400).send(err);
        } else {
            res.status(500).send(err);
        }
    }
}
}
