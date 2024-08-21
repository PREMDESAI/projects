import asyncHandler from "../utilities/CatchAsync";
import Quote from "../models/Quote";
import User from "../models/User";
import AppError from "../utilities/AppError";
import { Request, Response } from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

const getQuotes = asyncHandler(async (req: Request, res: Response) => {
  // Fetch all quotes from the database
  const quotes = await Quote.find({});

  if (quotes) {
    res.status(200).json({
      success: true,
      data: quotes,
    });
  } else {
    throw new AppError("Internal Server Error", 400);
  }
});

const getQuoteById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params; // Get quote ID from request parameters

  // Fetch the quote from the database using the ID
  const quote = await Quote.findById(id).populate("author", "username email",);

  if (!quote) {
    return res.status(404).json({
      success: false,
      message: "Quote not found",
    });
  }

  res.status(200).json({
    success: true,
    data: quote,
  });
});

const addQuote = asyncHandler(async (req: Request, res: Response) => {
  const { content, userPrompt } = req.body;

  // Check if required data is present
  if (!content || !userPrompt) {
    return res
      .status(400)
      .json({ success: false, message: "Content and userPrompt are required" });
  }

  try {
    // Create a new quote
    const newQuote = new Quote({
      content,
      userPrompt,
      author: req.user?._id,
    });
    // Save the new quote
    const savedQuote = await newQuote.save();
    let user: any = await User.findById(req.user?._id);
    user.quotes.push(savedQuote._id);
    await user.save();
    res.status(201).json({
      success: true,
      message: "Quote added successfully",
      data: savedQuote,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

const updateQuote = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params; // Get quote ID from request parameters
  const { content, userPrompt } = req.body;

  // Check if the quote with the given ID exists
  let quote = await Quote.findById(id);

  if (!quote) {
    return res.status(404).json({
      success: false,
      message: "Quote not found",
    });
  }

  // Update quote content
  quote.content = content || quote.content;
  quote.userPrompt = userPrompt || quote.userPrompt;
  quote.updatedAt = new Date();

  // Save the updated quote
  await quote.save();

  res.status(200).json({
    success: true,
    message: "Quote updated successfully",
    data: quote,
  });
});

const deleteQuote = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params; // Get quote ID from request parameters

  try {
    // Check if the quote with the given ID exists
    const quote = await Quote.findById(id);

    if (!quote) {
      return res.status(404).json({
        success: false,
        message: "Quote not found",
      });
    }

    // Delete the quote
    await Quote.deleteOne({ _id: id });

    res.status(200).json({
      success: true,
      message: "Quote deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

const likeQuote = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params; // Get quote ID from request parameters

  try {
    // Check if the quote with the given ID exists
    const quote: any = await Quote.findById(id);

    if (!quote) {
      return res.status(404).json({
        success: false,
        message: "Quote not found",
      });
    }

    // Check if the user has already liked the quote
    const userIndex = quote.likes.indexOf(req.user?._id);
    if (userIndex !== -1) {
      // User has already liked the quote, so unlike it
      quote.likes.splice(userIndex, 1);
      await quote.save();

      // Remove quote from user's likedQuotes
      const user: any = await User.findById(req.user?._id);
      const quoteIndex = user.likedQuotes.indexOf(id);
      if (quoteIndex !== -1) {
        user.likedQuotes.splice(quoteIndex, 1);
        await user.save();
      }

      res.status(200).json({
        success: true,
        message: "Quote unliked successfully",
      });
    } else {
      // User has not liked the quote, so like it
      quote.likes.push(req.user?._id);
      await quote.save();

      // Add quote to user's likedQuotes
      const user: any = await User.findById(req.user?._id);
      user.likedQuotes.push(id);
      await user.save();

      res.status(200).json({
        success: true,
        message: "Quote liked successfully",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

const addToFavorite = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params; // Get quote ID from request parameters

  try {
    // Check if the quote with the given ID exists
    const quote: any = await Quote.findById(id);

    if (!quote) {
      return res.status(404).json({
        success: false,
        message: "Quote not found",
      });
    }

    // Check if the user has already favorited the quote
    const index = quote.favorites.indexOf(req.user?._id);
    if (index !== -1) {
      // Remove user's ID from the list of favorites
      quote.favorites.splice(index, 1);
      await quote.save();

      // Remove quote from user's favoriteQuotes
      const user: any = await User.findById(req.user?._id);
      const quoteIndex = user.favoriteQuotes.indexOf(id);
      if (quoteIndex !== -1) {
        user.favoriteQuotes.splice(quoteIndex, 1);
        await user.save();
      }

      res.status(200).json({
        success: true,
        message: "Quote removed from favorites",
      });
    } else {
      // Add user's ID to the list of favorites
      quote.favorites.push(req.user?._id);
      await quote.save();

      // Add quote to user's favoriteQuotes
      const user: any = await User.findById(req.user?._id);
      user.favoriteQuotes.push(id);
      await user.save();

      res.status(200).json({
        success: true,
        message: "Quote added to favorites",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

const generateQuote = asyncHandler(async (req: Request, res: Response) => {
  const genAI = new GoogleGenerativeAI(process.env.GEN_API as string);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  try {
    const { userPrompt } = req.body;
    const updatedPrompt: string =
      "Generate a quote of maximum 25 words based on below prompt: " +
      userPrompt +
      "Ouput should be only quote no quotation marks or author name";
    const result = await model.generateContent(updatedPrompt);
    const response = result.response;
    const text = response.text();
    res.status(200).json({
      success: true,
      message: "Quote generated successfully",
      data: text,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

export {
  getQuotes,
  getQuoteById,
  addQuote,
  updateQuote,
  deleteQuote,
  likeQuote,
  addToFavorite,
  generateQuote,
};
