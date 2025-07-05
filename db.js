// db.js
const { Client } = require('pg');
require('dotenv').config();

const db = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: 5432,
});

db.connect()
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.error('Connection error', err.stack));

module.exports = db;
