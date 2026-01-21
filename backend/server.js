const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.json({ message: "All fields required" });
  }
  res.json({ message: "User registered successfully" });
});

app.listen(3000, () => console.log("Server running on 3000"));
