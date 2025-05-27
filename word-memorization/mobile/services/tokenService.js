import { db } from "./dbService";

const createTokenTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS tokens (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, value TEXT NOT NULL)"
    );
  });
};

const setTokenToDB = (name, value) => {
  try {
    db.transaction((tx) => {
      tx.executeSql("INSERT INTO tokens (name, value) VALUES (?, ?)", [
        name,
        value,
      ]);
    });
  } catch (error) {
    alert(error);
  }
};

const getToken = (name) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT value FROM tokens WHERE name = ?",
        [name],
        (tx, results) => {
          if (results.rows.length > 0) {
            resolve(results.rows.item(0).value);
          } else {
            resolve(null); // Token not found
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
};

const deleteToken = (name) => {
  db.transaction((tx) => {
    tx.executeSql("DELETE FROM tokens WHERE name=?", [name]);
  });
};

export { createTokenTable, setTokenToDB, getToken, deleteToken };
