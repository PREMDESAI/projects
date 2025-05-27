import { db } from "./dbService";

const createWordTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS words (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        status TEXT NOT NULL,
        transcription TEXT,
        translation TEXT NOT NULL,
        example TEXT,
        exampleMeaning TEXT,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`
    );
  });
};

const saveWord = (
  name,
  status,
  transcription,
  translation,
  example,
  exampleMeaning
) => {
  try {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO words (name, status, transcription, translation, example, exampleMeaning) VALUES (?, ?, ?, ?, ?, ?)",
        [name, status, transcription, translation, example, exampleMeaning]
      );
    });
  } catch (error) {
    alert(error);
  }
};

const getWords = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM words",
        [],
        (tx, results) => {
          if (results.rows.length > 0) {
            const words = [];
            for (let i = 0; i < results.rows.length; i++) {
              words.push(results.rows.item(i));
            }
            resolve(words);
          } else {
            resolve([]);
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
};

const getWordWidthParam = (name, status, translation, cretedAt) => {
  let sqlQuery = "SELECT * FROM words WHERE ";
  let sqlParams = [];
  if (name) {
    sqlQuery += "name = ? ";
    sqlParams.push(name);
  }
  if (status) {
    if (sqlParams.length > 0) sqlQuery += ", ";
    sqlQuery += "status = ? ";
    sqlParams.push(status);
  }
  if (translation) {
    if (sqlParams.length > 0) sqlQuery += ", ";
    sqlQuery += "translation = ? ";
    sqlParams.push(translation);
  }
  if (cretedAt) {
    if (sqlParams.length > 0) sqlQuery += ", ";
    sqlQuery += "cretedAt = ? ";
    sqlParams.push(cretedAt);
  }
  if (sqlParams.length == 0) sqlQuery += "1";
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        sqlQuery,
        sqlParams,
        (tx, results) => {
          const words = [];
          for (let i = 0; i < results.rows.length; i++) {
            words.push(results.rows.item(i));
          }
          resolve(words);
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
};

const updateWord = (params, id) => {
  const { name, status, transcription, translation, example, exampleMeaning } =
    params;
  try {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE words SET name = ?, status = ?, transcription = ?, translation = ?, example = ?, exampleMeaning = ? WHERE id = ?;",
        [name, status, transcription, translation, example, exampleMeaning, id]
      );
    });
  } catch (error) {
    alert(error);
  }
};

const deleteWord = (id) => {
  db.transaction((tx) => {
    tx.executeSql("DELETE FROM words WHERE id=?", [id]);
  });
};

export {
  createWordTable,
  saveWord,
  getWords,
  deleteWord,
  getWordWidthParam,
  updateWord,
};
