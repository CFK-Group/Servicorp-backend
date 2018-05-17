const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'eu-cdbr-sl-lhr-01.cleardb.net',
    user: 'b165ce53e1c232',
    password: 'e4da2179',
    database: 'cfk_servicorp'
});

connection.connect((err) => {
    if (err) {
        console.log('No se ha podido conectar a la bdd');
        console.log(err.message);
        throw err;
    }else{
        console.log("Connectado a la bdd correctamente!");
    }
});