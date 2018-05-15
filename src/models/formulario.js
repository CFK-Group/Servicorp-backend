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

formularioModel.guardarRespuesta = (req, callback) => {
    if(connection){
        let data = [];
        for(let elemento in req) {
            data.push(req[elemento]);
        }
        connection.query('INSERT INTO srv_respuestas (respuesta, formulario_id, formulario_tipo_formulario_id, formulario_usuario_id, pregunta_id) VALUES (?)', [data],
        (err, row) => {
            return (err) ? callback(err, null) : callback(null, row);
        })
    }
};

formularioModel.createForm = (req, callback) => {
    if(connection){
        let data = [];
        for(let elemento in req) {
            data.push(req[elemento]);
        }
        connection.query('INSERT INTO srv_formulario (latitud, longitud, tipo_formulario_id, usuario_id) VALUES (?)', [data],
            (err, row) => {
                return (err) ? callback(err, null) : callback(null, row);
            }
        )
    }
};

module.exports = formularioModel;