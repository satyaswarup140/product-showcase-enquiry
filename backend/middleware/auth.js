const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (req, res, next) {
  const token = req.headers["authorization"];

  if (!token) return res.status(403).json({ error: "Missing token" });

  jwt.verify(token.split(" ")[1], process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Invalid Token" });

    req.admin = decoded;
    next();
  });
};
