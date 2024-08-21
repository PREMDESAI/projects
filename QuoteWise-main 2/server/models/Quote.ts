import mongoose, { Schema, Document, InferSchemaType } from "mongoose";

// Define Mongoose schema for Quote
const QuoteSchema: Schema = new Schema({
  content: { type: String, required: true },
  userPrompt: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  favorites: [{ type: Schema.Types.ObjectId, ref: "User" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Define interface for Quote document
export interface QuoteDocument extends Document {
  content: string;
  userPrompt: string;
  author: Schema.Types.ObjectId;
  likes: Schema.Types.ObjectId[];
  favorites: Schema.Types.ObjectId[];
  comments: Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

export type QuoteModel = InferSchemaType<typeof QuoteSchema>;

// Create and export Quote model
export default mongoose.model<QuoteModel>("Quote", QuoteSchema);