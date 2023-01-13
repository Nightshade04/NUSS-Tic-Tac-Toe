import { NextFunction, Request, Response } from "express";
import Logger from "./logger";

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
    Logger.info(`${req.method} - ${req.url}`);
    next();
}