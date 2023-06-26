const { Client } = require('pg');
const conn = new Client({
    host: "db.kzoavdjmegkturnkduox.supabase.co",
    user: "postgres",
    password: "z1nqW2ajUMrTP0Ap",
    database: "postgres",
    port: "5432",
    charset: "utf8mb4",
    timezone: "+07:00"
});

conn.connect(function(err) {
    if(err) throw err
    console.log('DB Connected');
});

module.exports = conn;

// const mysql = require('mysql');
// const conn = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "mc",
//     port: "8889",
//     charset: "utf8mb4",
//     timezone: "+07:00"
// });

// conn.getConnection((err)=>{
//     if (err) throw err
//     console.log('DB Connected');
// });

// module.exports = conn;