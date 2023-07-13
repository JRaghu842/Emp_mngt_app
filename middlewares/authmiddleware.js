let jwt = require("jsonwebtoken");

let authMiddleware = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      return res.status(401).send({ message: "Token not found" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_TOKEN_KEY);
    req.user_data = { userId: decodedToken.userId };
    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication failed" });
  }
};

module.exports = {
  authMiddleware,
};
