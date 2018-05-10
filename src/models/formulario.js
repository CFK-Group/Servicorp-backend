let formularioModel = {};

formularioModel.getPreguntas = (callback) => {
    if(connection){
        connection.query('SELECT * FROM srv_pregunta ORDER BY id', (err, row) => {
            if(err){
                callback(err, null);
                console.log(`Error en getPreguntas: ${err.message}`);
            }
            if(!err){
                callback(null, row);
            }
        })
    }
};

formularioModel.getRespuestas = (callback) => {
    if(connection){
        connection.query('SELECT * FROM srv_respuesta ORDER BY id', (err, row) => {
            if(err){
                callback(err, null);
                console.log(`Error en getRespuestas: ${err.message}`);
            }
            if(!err){
                callback(null, row);
            }
        })
    }
};

formularioModel.guardarRespuestas = (data, callback) => {
    if(connection){

    }
};

formularioModel.createForm = (data, callback) => {
    if(connection){
        data = JSON.stringify(data);
        connection.query('INSERT INTO srv_formulario (latitud, longitud, tipo_formulario_id, usuario_id) VALUES (?, ?, ?, ?)', data,
            (err, row) => {
                if(err){
                    callback(err, null);
                    console.log(`Error en saveToken: ${err.message}`);
                }
                if(!err) callback(null, row);
            }
        )
    }
};

module.exports = formularioModel;