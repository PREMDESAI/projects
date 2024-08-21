import express, {Application} from "express";
import mongoose from "mongoose";
import cors from "cors"
import quoteRoutes from "./routes/quotes";
import userRoutes from "./routes/users";
import commentRoutes from "./routes/comments";
import { notFound, errorHandler } from './middlwares/ErrorHandler';
import * as dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/quotewise_database';

const app:Application = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/quotes",quoteRoutes);
app.use("/api/users",userRoutes);
app.use("/api/comments",commentRoutes);

//not found middleware
app.use(notFound);

//errorhandler middleware
app.use(errorHandler);

//database connection
main().catch(err => console.log(err))
async function main() {
  await mongoose.connect(MONGODB_URI);
  console.log("connected");
}

app.listen(PORT, () => {
    console.log("server is listening at port",PORT)
});