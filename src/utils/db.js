const { Pool } = require('pg');

const pool = new Pool({
  user: 'medibooksuser',
  host: '192.168.0.63',
  database: 'medibooksdb',
  password: 'securepassword',
  port: 5432,
});

module.exports = pool;
