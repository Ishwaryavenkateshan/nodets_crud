import express, { NextFunction } from 'express';
import { UserController } from '../controllers/UserController';
import { Request, Response } from 'express';
import { JwtToken } from '../config/jwtToken';



export class UserRouter {
    constructor(private userController: UserController, private userjwt:JwtToken) {
    }
    userRouter(app: express.Application) {
        app.post('/user', (req: Request, res: Response) => {
            this.userController.userCreate(req, res)
        })
        app.get('/get/:id', this.userjwt.TokenValidation,(req: Request, res: Response) => {
            this.userController.userRead(req, res)
        });
        app.get('/user/get', this.userjwt.TokenValidation,(req: Request, res: Response) => {
            this.userController.userReadAll(req, res)
        });
        app.put('/update/:id',this.userjwt.TokenValidation, (req: Request, res: Response) => {
            this.userController.userUpdate(req, res)
        });
        app.delete('/delete/:id', this.userjwt.TokenValidation,(req: Request, res: Response) => {
            this.userController.userDelete(req, res)
        });
    }

}

