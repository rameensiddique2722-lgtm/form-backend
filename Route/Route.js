const express = require("express");
const route = express.Router();
const User = require("../Model/UserSchema.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
route.post("/login",async(req,res)=>{
   try {
      //step 1 jo chaye hm login ma
      const {email,password}=req.body;
      //ab requires krna hy do cheezy fill ho to next move kry
      if(!email||!password){
         return res.status(400).json({ message: "All fields are required" });
      }
      //ab ma check krna match kr ra hy
      const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
     //Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    //AB JWT GENERATE KRWANA HY
    const token=jwt.sign(
      {
         id:user._id,email:user.email
      },
      process.env.JWT_SECRET,{expiresIn:"7d"}
    )
    //Send response
    res.status(200).json({
      message: "Login successful",
      user: { id: user._id, name: user.name, email: user.email },
      token,
    })
   } catch (error) {
      console.error("Signup Error:", err);
    res.status(500).json({ message: "Internal server error" });
   }
})


module.exports = route;
