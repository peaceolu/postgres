// index.js
const express = require('express');
const db = require('./db');
const app = express();

app.use(express.json());

// Get all users
app.get('/users', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Get a single user
app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    if (result.rows.length === 0) return res.status(404).send('User not found');
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Create a new user
app.post('/users', async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const result = await db.query(
      'INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *',
      [name, email, age]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Update a user
app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;
    const result = await db.query(
      'UPDATE users SET name=$1, email=$2, age=$3 WHERE id=$4 RETURNING *',
      [name, email, age, id]
    );
    if (result.rows.length === 0) return res.status(404).send('User not found');
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Delete a user
app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query('DELETE FROM users WHERE id=$1 RETURNING *', [id]);
    if (result.rows.length === 0) return res.status(404).send('User not found');
    res.send('User deleted successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
