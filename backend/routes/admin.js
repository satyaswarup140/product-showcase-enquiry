const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email !== process.env.ADMIN_EMAIL)
    return res.status(400).json({ error: "Invalid email" });

  bcrypt.compare(password, process.env.ADMIN_PASSWORD, (err, match) => {
    if (!match) return res.status(400).json({ error: "Wrong password" });

    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    res.json({ token });
  });
});

module.exports = router;
