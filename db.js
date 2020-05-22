const Pool = require('pg').Pool;

const pool = new Pool({
  user: "juancastillo",
  password: "Elchido10",
  host: "localhost",
  post: 5432,
  database: "perntodo"
})

module.exports = pool;