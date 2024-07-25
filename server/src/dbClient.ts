import Database from "better-sqlite3";

const db = new Database(":memory:");

// Defining the table
db.exec(`
  CREATE TABLE checkins(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    comment TEXT NULL
  )
`);

export default db;
