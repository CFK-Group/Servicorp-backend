const mysql = require('mysql')

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Colseco',
    database: 'cfk_servicorp'
})

connection.connect((err) => {
    if (err) {
        console.log('No se ha podido conectar a la bdd')
        console.log(err.message)
    }else{
        console.log("Connectado a la bdd correctamente!")
    }
})
