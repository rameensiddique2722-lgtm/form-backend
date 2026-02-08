const express = require("express");
const route = express.Router();
const User = require("../Model/UserSchema.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../Middleware/AuthMiddleware.js");

// Protected route
route.get("/profile", authMiddleware, async (req, res) => {
  try {
    // req.user is available from middleware
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Signup route
route.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1 Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2 Check if user already exists
    const signupUser = await User.findOne({ email });
    if (signupUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    

    // 3 Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4 Create new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    // 5 Response
    res.status(201).json({ message: "User created successfully", user: newUser });

  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});
//login
route.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});



module.exports = route;
