const mysql = require('mysql')

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'colseco',
    database: 'cfk_servicorp'
})

conectarBD = () => {
    connection.connect((err) => {
        if (err) {
            console.log('No se ha podido conectar a la bdd')
            console.log(err.message)
            setTimeout(() => {
                conectarBD()
            }, 1000 * 10)
        }else{
            console.log("Connectado a la bdd correctamente!")
        }
    })
}

conectarBD()