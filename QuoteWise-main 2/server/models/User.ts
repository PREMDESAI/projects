import mongoose, { Schema, InferSchemaType } from "mongoose";

// Define Mongoose schema for User
const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favoriteQuotes: [{ type: Schema.Types.ObjectId, ref: "Quote" }],
  quotes: [{ type: Schema.Types.ObjectId, ref: "Quote" }],
  likedQuotes: [{ type: Schema.Types.ObjectId, ref: "Quote" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export type UserModel = InferSchemaType<typeof UserSchema>;

// Create and export User model
export default mongoose.model<UserModel>("User", UserSchema);