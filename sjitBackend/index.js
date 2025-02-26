const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const cors = require('cors')
const signup = require("./models/signupSchema");
const app = express();
app.use(cors())
app.use(express.json());
const PORT = 3002;
dotenv.config();

mdb
  .connect(
    "mongodb+srv://Janani:TLcebSLMJXxJWIwM@popbackend.w3wwc.mongodb.net/SJIT_DB"
  )
  .then(() => {
    console.log("MDB Connection successful");
  })
  .catch((err) => {
    console.log("Check your connection String", err);
  });

app.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const { firstName, lastName, email, passWord, phoneNumber } = req.body;

    const hashedPassword = await bcrypt.hash(passWord, 10);

    console.log("Hashed Password Before Saving:");
    console.log(hashedPassword);
    const newSignup = new signup({
      firstName: firstName,
      lastName: lastName,
      email: email,
      passWord: hashedPassword,
      phoneNumber: phoneNumber,
    });

    await newSignup.save();
    console.log("Signup Successful");
    res.status(201).json({ message: "Signup Successful", isSignUp: true });
  } catch (error) {
    console.log(error);
    res.status(201).json({ message: "Signup failed", isSignUp: true });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await signup.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.passWord);
    console.log("Password match:", isMatch);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    } else {
      res.status(200).json({ message: "Login successful" });
    }
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: " error" });
  }
});

app.get("/dom", (req, res) => {
  res.sendFile("C:\\Users\\janani.VIVOVIVO\\Desktop\\mern\\index.html");
});

app.listen(PORT, () => console.log("Server started successfully:", PORT));
