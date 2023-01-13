import { NextFunction, Request, Response } from "express";
import Logger from "./logger";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        let errorMessage = `${err.name} error Occurred with following error message:\n${err.message}`;
        let errorStatus = 500;
        Logger.info(errorMessage);
        res.status(errorStatus).send(errorMessage);
    }
}