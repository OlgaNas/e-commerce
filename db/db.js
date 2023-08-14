const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    user: "postgres",
    password: process.env.DB_Password,
    host: "localhost",
    port: 5432,
    database: "e-commerce"
});
module.exports = pool;