const mysql = require("mysql2/promise");

    const pool = mysql.createPool({
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        connectionLimit: 10
    });


    module.exports = pool;