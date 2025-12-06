require("dotenv").config();
const sqlite3 = require("sqlite3").verbose();

const DB_FILE = process.env.DB_FILE || "./database.sqlite";

const db = new sqlite3.Database(DB_FILE, (err) => {
  if (err) {
    console.error("Database connection error:", err.message);
  } else {
    console.log("SQLite DB connected.");
  }
});

module.exports = db;
