import express, { NextFunction } from 'express';
import { UserController } from '../controllers/userController';
import { Request, Response } from 'express';
import { JwtToken } from '../config/jwtToken';



export class UserRouter {
    constructor(private userController: UserController, private userjwt: JwtToken) {
    }
    userRouter(app: express.Application) {
        app.post('/user', (req: Request, res: Response) => {
            this.userController.userCreate(req, res)
        })
        app.get('/user/:id', this.userjwt.tokenValidation, (req: Request, res: Response) => {
            this.userController.userRead(req, res)
        });
        app.get('/user', this.userjwt.tokenValidation, (req: Request, res: Response) => {
            this.userController.userReadAll(req, res)
        });
        app.put('/user/:id', this.userjwt.tokenValidation, (req: Request, res: Response) => {
            this.userController.userUpdate(req, res)
        });
        app.delete('/user/:id', this.userjwt.tokenValidation, (req: Request, res: Response) => {
            this.userController.userDelete(req, res)
        });
    }

}

