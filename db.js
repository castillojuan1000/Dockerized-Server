const Pool = require('pg').Pool;

const pool = new Pool({
  user: "postgres",
  password: "Elchido10",
  host: '10.142.0.2',
  port: 5432,
  database: "postgres"
})

module.exports = pool;
