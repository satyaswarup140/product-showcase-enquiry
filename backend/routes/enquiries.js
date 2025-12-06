const router = require("express").Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { product_id, name, email, phone, message } = req.body;

  db.run(
    "INSERT INTO enquiries (product_id, name, email, phone, message) VALUES (?, ?, ?, ?, ?)",
    [product_id, name, email, phone, message],
    function () {
      res.json({ id: this.lastID });
    }
  );
});

module.exports = router;
