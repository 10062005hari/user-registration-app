const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  console.log("User Data Received:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);

  res.json({ message: "User registered successfully!" });
});

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

