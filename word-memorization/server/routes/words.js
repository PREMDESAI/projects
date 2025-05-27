const router = require("express").Router();
const {
  getWords,
  getWordWithId,
  addWord,
  updateWord,
  deleteWord
} = require("../controller/wordController");
const auth = require("../middleware/auth");

// get all words
router.get("/", auth, getWords);

//get words with params
router.get("/:id", auth, getWordWithId);

// add word
router.post("/", auth, addWord);

// update word
router.put("/:id", auth, updateWord);

// delete word
router.delete("/:id", auth, deleteWord);

module.exports = router;
