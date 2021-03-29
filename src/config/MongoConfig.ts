import mongoose from 'mongoose'
import * as dotenv from 'dotenv';
import { logger } from '../logger';


export class MongoConfig {
    constructor() {
        dotenv.config()
        mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Users', {
             useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
                logger.info('DB Connnected');
            }).catch(() => {
                logger.error('Err on connection');
            });
    }
}
