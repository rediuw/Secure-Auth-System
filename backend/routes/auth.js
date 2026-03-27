module.exports = (pool) => {
  const express = require("express");
  const router = express.Router();

  // Register route
  router.post("/register", async (req, res) => {
    try {
      const { name, email, password } = req.body;

      // Check if user exists
      const userCheck = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
      if (userCheck.rows.length > 0) return res.status(400).json({ message: "User already exists" });

      // Insert new user
      const newUser = await pool.query(
        "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
        [name, email, password]
      );

      res.status(201).json({ message: "User registered successfully", user: newUser.rows[0] });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: err.message });
    }
  });

  // Login route
  router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await pool.query(
        "SELECT * FROM users WHERE email = $1 AND password = $2",
        [email, password]
      );

      if (user.rows.length === 0) return res.status(400).json({ message: "Invalid credentials" });

      res.json({ message: "Login successful", user: user.rows[0] });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};