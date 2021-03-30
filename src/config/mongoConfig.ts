import mongoose from 'mongoose'
import { logger } from '../logger';
import { db_Error, db_Info } from '../utils/const';


export class MongoConfig {
    constructor() {
        mongoose.connect(`${process.env.DB_URL}`, {
            useNewUrlParser: true, useUnifiedTopology: true
        }).then(() => {
            logger.info(db_Info)
        }).catch((err) => {
            logger.error(db_Error, err);
        });
    }
}
