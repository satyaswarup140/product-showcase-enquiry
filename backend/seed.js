const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const path = require("path");

// DB path
const db = new sqlite3.Database(path.join(__dirname, "database.sqlite"));

// Helper to execute SQL files
function runSQL(fileName) {
  const filePath = path.join(__dirname, fileName); // FIXED ⭐
  const sql = fs.readFileSync(filePath, "utf8");

  console.log(`Running ${fileName}...`);
  db.exec(sql, (err) => {
    if (err) console.error("Error executing", fileName, err);
    else console.log(`${fileName} executed successfully`);
  });
}

runSQL("schema.sql");
runSQL("seed.sql");

setTimeout(() => {
  db.close();
  console.log("Database created and seeded successfully!");
}, 1000);
