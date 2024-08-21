import { UserType } from "./user.new.type";

export interface QuoteType {
    _id: string;
    content: string;
    userPrompt: string;
    author: UserType;
    likes: string[];
    favorites: string[];
    comments: string[];
    createdAt: string;
    updatedAt: string;
}