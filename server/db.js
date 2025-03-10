const Pool = require('pg').Pool;
require('dotenv').config();

const isProduction = process.env.DATABASE_URL !== undefined;

const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
    ssl: isProduction ? { rejectUnauthorized: false } : false
});

module.exports = pool;
