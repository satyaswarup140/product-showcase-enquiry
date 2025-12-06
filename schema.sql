CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  category TEXT,
  short_desc TEXT,
  long_desc TEXT,
  price REAL,
  image_url TEXT
);

CREATE TABLE enquiries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id INTEGER,
  name TEXT,
  email TEXT,
  phone TEXT,
  message TEXT
);
