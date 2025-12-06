const sqlite3 = require("sqlite3").verbose();
require("dotenv").config();

const db = new sqlite3.Database(process.env.DB_FILE, (err) => {
  if (err) console.error(err);
  else console.log("SQLite DB connected.");
});

module.exports = db;
