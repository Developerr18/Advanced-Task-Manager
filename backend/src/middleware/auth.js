import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ success: false, message: "Not Authorized, Login Again" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      userId: decoded.userId,
    };
    next();
  } catch (err) {
    console.error(err);
    res
      .status(401)
      .json({ success: false, message: "Token is invalid or expired" });
  }
};

export default auth;
