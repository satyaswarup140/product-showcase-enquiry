DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    short_desc TEXT NOT NULL,
    long_desc TEXT NOT NULL,
    price REAL NOT NULL,
    image_url TEXT NOT NULL
);
