const jwt = require("jsonwebtoken");

const ensureAuthenticated = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(403).json({
      message: "Unauthorized, JWT token is required",
    });
  }

  try {
    // Split "Bearer TOKEN"
    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({
      message: "Unauthorized, JWT token wrong or expired",
    });
  }
};

module.exports = ensureAuthenticated;
