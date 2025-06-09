const { Pool } = require('pg');

const pool = new Pool({
  user: 'medibooksuser',
  host: 'localhost',
  database: 'medibooksdb',
  password: 'securepassword',
  port: 5432,
});

module.exports = pool;
