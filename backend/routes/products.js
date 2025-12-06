const router = require("express").Router();
const db = require("../db");
const auth = require("../middleware/auth");

// GET with pagination
router.get("/", (req, res) => {
  const { page = 1, limit = 6 } = req.query;
  const offset = (page - 1) * limit;

  db.all("SELECT COUNT(*) as total FROM products", [], (err, countResult) => {
    const total = countResult[0].total;

    db.all(
      "SELECT * FROM products LIMIT ? OFFSET ?",
      [limit, offset],
      (err, products) => {
        res.json({
          products,
          page: Number(page),
          totalPages: Math.ceil(total / limit),
        });
      }
    );
  });
});

// CRUD (Admin Only)
router.post("/", auth, (req, res) => {
  const { name, category, price, short_desc, long_desc, image_url } = req.body;

  db.run(
    "INSERT INTO products (name, category, price, short_desc, long_desc, image_url) VALUES (?, ?, ?, ?, ?, ?)",
    [name, category, price, short_desc, long_desc, image_url],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

router.put("/:id", auth, (req, res) => {
  const { name, category, price, short_desc, long_desc, image_url } = req.body;

  db.run(
    "UPDATE products SET name=?, category=?, price=?, short_desc=?, long_desc=?, image_url=? WHERE id=?",
    [name, category, price, short_desc, long_desc, image_url, req.params.id],
    function () {
      res.json({ success: true });
    }
  );
});

router.delete("/:id", auth, (req, res) => {
  db.run("DELETE FROM products WHERE id=?", [req.params.id], () =>
    res.json({ success: true })
  );
});

module.exports = router;
