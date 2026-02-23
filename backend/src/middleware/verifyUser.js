import admin from "../config/firebase.js";

const verifyUser = async (req, res, next) => {
  try {
    let token;

    // 1️⃣ From Authorization header
    if (req.headers.authorization?.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    }

    // 2️⃣ From cookies
    else if (req.cookies?.token) {
      token = req.cookies.token;
    }

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = await admin.auth().verifyIdToken(token);

    req.user = decoded; // uid, email
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};


export default verifyUser;
