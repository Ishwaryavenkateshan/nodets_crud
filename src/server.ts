import express from 'express';
import { MongoConfig } from './config/mongoConfig'
import { UserRouter } from './routes/userRoutes';
import { UserController } from './controllers/userController';
import { UserDao } from './dao/userDao';
import cors from 'cors';
import { UserService } from './service/userService';
import { logger } from "./logger";
import * as dotenv from 'dotenv';
import { JwtToken } from './config/jwtToken';
import { server_Info } from './utils/const';

dotenv.config({ path: __dirname + '/.env' });

export class UserServer {
    constructor(private userRoute: UserRouter) {
        this.start();
    }

    start(): void {
        const app: express.Application = express();
        app.use(cors())
        app.use(express.json());

        new MongoConfig()
        app.get('/', (req, res) => {
            res.send({ status: "Success" });
        });
        this.userRoute.userRouter(app)
        app.listen(5001, () => {
            logger.info(server_Info);
        });
    }
}


const userjwt = new JwtToken()
const userdao = new UserDao()
const userservice = new UserService(userdao)
const jwttoken = new JwtToken()
const usercontroller = new UserController(userservice, jwttoken)
const userrouter = new UserRouter(usercontroller, userjwt)
new UserServer(userrouter)