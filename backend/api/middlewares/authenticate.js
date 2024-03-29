const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    req.user = jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
};

module.exports = authenticate;
