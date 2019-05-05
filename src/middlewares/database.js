const mysql = require('mysql')

pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'colseco',
    database: 'cfk_servicorp'
})
