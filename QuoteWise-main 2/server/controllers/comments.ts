import asyncHandler from "../utilities/CatchAsync";
import Comment from "../models/Comment";
import Quote from "../models/Quote";
import { Request, Response } from "express";

// Add a comment
const addComment = asyncHandler(async (req: Request, res: Response) => {
  const { qId } = req.params; // Get quote ID from request parameters
  const { content } = req.body; // Get content from request body

  try {
    // Check if the quote with the given ID exists
    const quote: any = await Quote.findById(qId);
    if (!quote) {
      return res.status(404).json({
        success: false,
        message: "Quote not found",
      });
    }

    // Create a new comment
    const newComment = new Comment({
      content,
      user: req.user?._id,
      quote: qId,
    });

    // Save the new comment
    const savedComment = await newComment.save();
    await savedComment.populate("user", "username");
    // Update the comments array field in the Quote model
    quote.comments.push(savedComment._id);
    await quote.save();

    // Send response
    res.status(201).json({
      success: true,
      message: "Comment added successfully",
      data: savedComment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Delete a comment
const deleteComment = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params; // Get comment ID from request parameters

  try {
    // Check if the comment with the given ID exists
    const comment: any = await Comment.findById(id);
    if (!comment) {
      return res.status(404).json({
        success: false,
        message: "Comment not found",
      });
    }

    // Find the quote associated with the comment
    const quote: any = await Quote.findById(comment.quote);
    if (!quote) {
      return res.status(404).json({
        success: false,
        message: "Quote not found",
      });
    }

    // Remove the comment ID from the comments array field in the Quote model
    quote.comments = quote.comments.filter((c: any) => c.toString() !== id);
    await quote.save();

    // Delete the comment
    await Comment.findByIdAndDelete(id);
    // Send response
    res.status(200).json({
      success: true,
      message: "Comment deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Get all comments for a quote
const getComments = asyncHandler(async (req: Request, res: Response) => {
  const { qId } = req.params; // Get quote ID from request parameters

  try {
    // Find all comments for the quote with the given ID
    const comments = await Comment.find({ quote: qId }).populate("user", "username");
    
    res.status(200).json({
      success: true,
      data: comments,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

export { addComment, deleteComment, getComments };
