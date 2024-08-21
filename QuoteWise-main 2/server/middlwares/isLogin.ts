import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User, { UserModel } from '../models/User'; // Assuming you have a User model with typings
import asyncHandler from '../utilities/CatchAsync';
import AppError from '../utilities/AppError';

const isLogin = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    let token: any | undefined;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, "SECURITY_INFORMATION_FOR_SESSION") as { _id: string; username: string; email: string };
            
            if (decoded._id && decoded.username && decoded.email) {
                const user: UserModel | null = await User.findById(decoded._id);
                if (!user) {
                    throw new AppError("NOT AUTHORIZED, TOKEN FAILED!", 201);
                }
                req.user = decoded;
                next();
            } else {
                throw new AppError("NOT AUTHORIZED, TOKEN FAILED!", 201);
            }
        } catch (error) {
            throw new AppError("NOT AUTHORIZED, TOKEN FAILED!", 201);
        }
    }
    if (!token) {
        throw new AppError("NOT AUTHORIZED, NO TOKEN",201);
    }
});

export { isLogin };
