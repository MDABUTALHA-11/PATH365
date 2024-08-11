const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database (creates the file if it doesn't exist)
const db = new sqlite3.Database('./database.db');

// Create a table if it doesn't exist
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  )`);
});

console.log('Database setup complete.');

// Close the database connection
db.close();
