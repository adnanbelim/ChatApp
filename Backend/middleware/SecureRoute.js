import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

// Middlewsre to secure route

const SecureRoute = async (req, res, next) => {
  try {
    // Take token using req.cookies 
    const token = req.cookies.jwt;
    // Check token avail or not
    if (!token) {
      return res.status(401).json({ error: "No token found, authorization denied" });
    }
    // verify the token using verify method of jwt
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({ error: "Invalid Token" });
    }
    // loggedIn user store in user variable
    // userId => when we generate Token check generateToken.jsx
    const user = User.findById(decoded.userId).select('-password');
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }
    // assign user to req.user
    req.user = user;
    // next() to confirm user authenticate
    next();
  } catch (error) {
    console.log("Error in secure route", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

}

export default SecureRoute