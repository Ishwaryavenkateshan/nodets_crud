import { Request, Response } from 'express'
import { UserModel } from '../models/userModels'
import { UserService } from '../service/userService'
import { JwtToken } from '../config/jwtToken'
import { logger } from '../logger'
import { DELETE_USER, GET_ALLUSER, GET_USER, MESSAGE, UPDATE_USER, USER_CONTROLLER, USER_CREATE } from '../utils/const'

export class UserController {
    constructor(private userService: UserService, private jwttoken: JwtToken) {
    }
    async userCreate(req: Request, res: Response): Promise<void> {
        logger.info(USER_CONTROLLER + USER_CREATE + MESSAGE)
        try {
            const user: UserModel = await this.userService.userCreate(req.body);
            const data = { users: user, token: await this.jwttoken.generateToken(user._id) }
            res.status(200).send(data)
        } catch (err) {
            logger.error(err)
            if (err && err._message && err._message === 'Invalidation') {
                res.status(400).send(err);
            } else {
                res.status(500).send(err);
            }
        }
    }
    async userRead(req: Request, res: Response): Promise<void> {
        logger.info(USER_CONTROLLER + GET_USER + MESSAGE)
        try {
            const user: UserModel = await this.userService.userRead(req.params.id)
            res.status(200).send(user)
        } catch (err) {
            logger.error(err)
            if (err && err._message && err._message === 'Invalidation') {
                res.status(400).send(err);
            } else {
                res.status(500).send(err);
            }
        }
    }
    async userReadAll(req: Request, res: Response): Promise<void> {
        logger.info(USER_CONTROLLER + GET_ALLUSER + MESSAGE)
        try {
            const user: UserModel = await this.userService.userReadAll()
            res.status(200).send(user)
        } catch (err) {
            logger.error(err)
            if (err && err._message && err._message === 'Invalidation') {
                res.status(400).send(err);
            } else {
                res.status(500).send(err);
            }
        }
    }
    async userUpdate(req: Request, res: Response): Promise<void> {
        logger.info(USER_CONTROLLER + UPDATE_USER + MESSAGE)
        try {
            const user: UserModel = await this.userService.userUpdate(req.params.id, req.body)
            res.status(200).send(user)
        } catch (err) {
            logger.error(err)
            if (err && err._message && err._message === 'Invalidation') {
                res.status(400).send(err);
            } else {
                res.status(500).send(err);
            }
        }
    }
    async userDelete(req: Request, res: Response): Promise<void> {
        logger.info(USER_CONTROLLER + DELETE_USER + MESSAGE)
        try {
            const user: UserModel = await this.userService.userDelete(req.params.id)
            res.status(200).send(user)
        } catch (err) {
            logger.error(err)
            if (err && err._message && err._message === 'Invalidation') {
                res.status(400).send(err);
            } else {
                res.status(500).send(err);
            }
        }
    }

}


