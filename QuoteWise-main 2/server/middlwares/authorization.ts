import { Request, Response, NextFunction } from "express";
import asyncHandler from "../utilities/CatchAsync";
import AppError from "../utilities/AppError";
import Quote from "../models/Quote";
import Comment from "../models/Comment";

// Middleware to check if the user is the author of the profile
export const isProfileAuthor = asyncHandler(
  async (req: any, res: Response, next: NextFunction) => {
    const userId: string = req.params.userId;
    if (userId !== req.user._id) {
      throw new AppError("Not Authorized", 401);
    }
    next();
  }
);

// Middleware to check if the user is the author of the quote
export const isQuoteAuthor = asyncHandler(
  async (req: any, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const quote : any = await Quote.findById(id).populate("author");
    if (!quote) {
      throw new AppError("Quote Not Found", 404);
    } else {
      const authorId: string = quote.author._id.toString();
      if (authorId !== req.user._id) {
        throw new AppError("Not Authorized", 401);
      } else {
        next();
      }
    }
  }
);

// Middleware to check if the user is the author of the comment
export const isCommentAuthor = asyncHandler(
  async (req: any, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const comment : any = await Comment.findById(id).populate("user");
    if (!comment) {
      throw new AppError("Comment Not Found", 404);
    } else {
      const authorId: string = comment.user._id.toString();
      if (authorId !== req.user._id) {
        throw new AppError("Not Authorized", 401);
      } else {
        next();
      }
    }
  }
);
