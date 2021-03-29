import express from 'express';
import { MongoConfig } from './config/MongoConfig'
import { UserRouter } from './routes/UserRoutes';
import { UserController } from './controllers/UserController';
import { UserDao } from './dao/UserDao';
import cors from 'cors';
import { UserService } from './service/UserService';
import  {logger} from "./logger";
import dotenv from 'dotenv';
import { JwtToken } from './config/jwtToken';
dotenv.config();
export class UserServer {
    constructor(private userRoute: UserRouter) {
        this.start();
    }

    start(): void {

        const app: express.Application = express();
        app.use(cors());
        app.use(express.json());
        const mongo = new MongoConfig()
        app.get('/', (req, res) => {
            res.send({ status: "Success" });
        });
        this.userRoute.userRouter(app)
        app.listen(4000, () => {
            logger.info('Server running on port 4000');
        });
    }
}


const userjwt = new JwtToken()
const userdao = new UserDao()
const userservice=new UserService(userdao)
const usercontroller = new UserController(userservice)
const userrouter = new UserRouter(usercontroller,userjwt)
new UserServer(userrouter)