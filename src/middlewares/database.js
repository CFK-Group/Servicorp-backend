const mysql = require('mysql')

pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cfk_servicorp'
})
