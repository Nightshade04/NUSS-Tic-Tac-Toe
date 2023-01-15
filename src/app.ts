import express, { Express } from 'express';
import * as dotenv from 'dotenv';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import { router } from './routes/router';
import { requestLogger } from './utils/requestLogger';
import { errorHandler } from './utils/errorHandler';
import Logger from './utils/logger';
import mongoose from 'mongoose';

const envPath = path.join(__dirname, '..', '.env');
dotenv.config({
    path: envPath,
});
console.log(envPath)

const PORT = process.env.PORT || 9000;
const mongoDbUri = process.env.MONGO_DB_URI || 'mongodb://127.0.0.1:27017/nuss';

const app: Express = express();

// middlewares for parsing resquest
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// middleware for request logging
app.use(requestLogger);

// middleware for application routing
app.use(router);

// Error Handler
app.use(errorHandler);

// db connection and server start
mongoose.connect(mongoDbUri)
    .then(() => {
        app.listen(PORT, () => {
            Logger.info(`Server running on port: ${PORT}`);
        });
    })
    .catch((err) => {
        Logger.error(`Fatal error: ${err}`);
    });
