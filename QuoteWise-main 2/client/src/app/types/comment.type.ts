import { QuoteType } from './quote.type';
import { User } from './user.type';

export interface CommentType {
  _id: string;
  content: string;
  user: User;
  quote: QuoteType;
  createdAt: string;
  updatedAt: string;
}
