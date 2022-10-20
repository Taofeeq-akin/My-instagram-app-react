import Dexie from "dexie";

export const db = new Dexie("myInsta");
db.version(1).stores({
  bio: ",name,about", // any first value will be our primary key
  gallery: "++id, url",
});
