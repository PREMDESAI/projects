import { Request, Response, NextFunction } from "express";
import AppError from "../utilities/AppError";

// Import schemas
import userSchema from "../schemas/userSchema";
import loginSchema from "../schemas/loginSchema";
import quoteSchema from "../schemas/quoteSchema";
import commentSchema from "../schemas/commentSchema";

// Middleware for validating user registration
export const validateRegister = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new AppError(msg, 400);
  } else {
    next();
  }
};

// Middleware for validating user login
export const validateLogin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new AppError(msg, 400);
  } else {
    next();
  }
};

// Middleware for validating quote creation
export const validateQuote = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = quoteSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new AppError(msg, 400);
  } else {
    next();
  }
};

// Middleware for validating quote creation
export const validateGenerate = (req: Request, res: Response, next: NextFunction) => {
  const { userPrompt } = req.body;
  if (!userPrompt) {
    throw new AppError("userPrompt field required", 400);
  } else {
    next();
  }
};

// Middleware for validating comment creation
export const validateComment = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = commentSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new AppError(msg, 400);
  } else {
    next();
  }
};
