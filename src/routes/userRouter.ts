import express from 'express';
import { UserController } from '../controllers/userControllers';

let usercontroller: UserController;

export class userRouter {
    constructor() {
        usercontroller = new UserController();
    }
    userRouter(app: express.Application) {
        // app.get('/user/get',usercontroller.userget);
        app.post('/user', usercontroller.usercreate);
        app.get('/user/:id',usercontroller.userread);
        // app.put('/ud',usercontroller.userupdate);
        // app.put('/user/:id',usercontroller.userdelete);
    }
}

