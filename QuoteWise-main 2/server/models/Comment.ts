import mongoose, { Schema, Document, InferSchemaType } from "mongoose";

// Define Mongoose schema for Comment
const CommentSchema: Schema = new Schema({
  content: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  quote: { type: Schema.Types.ObjectId, ref: "Quote", required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export type CommentModel = InferSchemaType<typeof CommentSchema>;

// Create and export Comment model
export default mongoose.model<CommentModel>("Comment", CommentSchema);
