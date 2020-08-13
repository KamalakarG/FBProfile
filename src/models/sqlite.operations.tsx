import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("db.profileDB");

export const getUsersFromSqlite = async () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //tx.executeSql("drop table FbProfile;");
      tx.executeSql(
        "create table if not exists FbProfile (fbId text, name text, picture text)",
        []
      );

      tx.executeSql("select * from FbProfile", [], (_, { rows }) => {
        if (rows) {
          let temp: any = rows;
          resolve(temp._array);
        } else {
          reject("no db present");
        }
      });
    });
  });
};

const insertRow = async (userData) => {
  return new Promise((resolve, _) => {
    db.transaction((tx) => {
      tx.executeSql(
        "insert into FbProfile (fbId, name, picture) values (?, ?, ?)",
        [userData.id.toString(), userData.name, userData.picture.data.url]
      );
      resolve("success");
    });
  });
};

const updateRow = async (userData) => {
  return new Promise((resolve, _) => {
    db.transaction((tx) => {
      tx.executeSql(
        "update FbProfile set (name, picture) values (?, ?) where fbId = ?",
        [userData.name, userData.picture.data.url, userData.id.toString()]
      );
      resolve("success");
    });
  });
};

export const deleteUserFromDB = (fbid) => {
  return new Promise((resolve, _) => {
    db.transaction((tx) => {
      tx.executeSql("delete from FbProfile where fbId = ?", [fbid]);
      resolve("success");
    });
  });
};

const checkUserInDB = async (userData) => {
  return new Promise((resolve, _) => {
    db.transaction((tx) => {
      tx.executeSql("select * from FbProfile", [], (_, { rows }) => {
        if (rows) {
          let temp: any = rows;
          let results = temp._array;
          if (results.length > 0) {
            for (let obj of results) {
              if (obj.fbId == userData.id) {
                resolve(true);
              } else {
                resolve(false);
              }
            }
          } else {
            resolve(false);
          }
        }
      });
    });
  });
};

export const insertUserIntoSqlite = async (userData) => {
  const isUserPresent = await checkUserInDB(userData);
  if (isUserPresent) {
    return updateRow(userData);
  } else {
    return insertRow(userData);
  }
};
