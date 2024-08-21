import { Request, Response, NextFunction } from 'express';
import AppError from "../utilities/AppError";

export const notFound = (req: Request, res: Response, next: NextFunction) => {
    const error = new AppError("Requested Source Not Found", 404);
    next(error);
};

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500;
    res.status(status).json({
        message: err.message
    });
};