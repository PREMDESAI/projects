import express from "express";
import { isLogin } from "../middlwares/isLogin";
import { isQuoteAuthor } from "../middlwares/authorization";
import { validateGenerate, validateQuote } from "../middlwares/schemaValidator";
import {
  getQuotes,
  addQuote,
  getQuoteById,
  updateQuote,
  deleteQuote,
  likeQuote,
  addToFavorite,
  generateQuote,
} from "../controllers/quotes";

const router = express.Router();

router.route("/")
  .get(getQuotes)
  .post(isLogin, validateQuote, addQuote);

router.route("/generate")
  .post(isLogin,validateGenerate, generateQuote);

router.route("/:id")
  .get(getQuoteById)
  .put(isLogin, validateQuote, isQuoteAuthor, updateQuote)
  .delete(isLogin, isQuoteAuthor, deleteQuote);

router.route("/:id/like")
  .post(isLogin, likeQuote)

router.route("/:id/favorite")
  .post(isLogin, addToFavorite)

export default router;