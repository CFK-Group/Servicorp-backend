const mysql = require('mysql')

pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'cfk_servicorp'
})
