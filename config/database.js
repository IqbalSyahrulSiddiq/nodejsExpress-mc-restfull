const mysql = require('mysql');

//koneksi database
const koneksi = mysql.createConnection({
    host: 'xxxx',
    user: 'xxxx',
    password:'xxxx',
    database: 'xxxx',
    multipleStatements: true
});

// koneksi database
koneksi.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});
module.exports = koneksi;