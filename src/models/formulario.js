let fs = require('fs')
let formularioModel = {}
const decodeImg = require('./../middlewares/decodeAndSave.js')

formularioModel.getPreguntas = (callback) => {
    if(connection){
        connection.query('SELECT * FROM srv_pregunta ORDER BY id', (err, row) => {
            if(err){
                callback(err, null)
                console.log(`Error en getPreguntas: ${err.message}`)
            }
            if(!err){
                callback(null, row)
            }
        })
    }
}

formularioModel.getRespuestas = (callback) => {
    if(connection){
        connection.query('SELECT * FROM srv_respuesta ORDER BY id', (err, row) => {
            if(err){
                callback(err, null)
                console.log(`Error en getRespuestas: ${err.message}`)
            }
            if(!err){
                callback(null, row)
            }
        })
    }
}

formularioModel.guardarRespuesta = (req, callback) => {
    if(connection){
        let data = []
        for(let elemento in req) {
            data.push(req[elemento])
        }
        connection.query('INSERT INTO srv_respuestas (respuesta, formulario_id, formulario_tipo_formulario_id, formulario_usuario_id, pregunta_id) VALUES (?)', [data],
        (err, row) => {
            return (err) ? callback(err, null) : callback(null, row)
        })
    }
}

formularioModel.createForm = (req, callback) => {
    if(connection){
        let values = [
            req.latitud, 
            req.longitud, 
            req.tipo_formulario_id, 
            req.usuario_id
        ]
        connection.beginTransaction(function(err) {
            if (err) { throw err }

            // inserción de un nuevo formulario
            connection.query('INSERT INTO srv_formulario (latitud, longitud, tipo_formulario_id, usuario_id) VALUES (?)', [values],(err, result) => {
                if  ( err )  {  
                    connection. rollback ( function ( )  { 
                        throw err ; 
                    }) ; 
                  }
                let formulario_id = result.insertId
                values = [
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 1, req.resp_1],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 2, req.resp_2],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 3, req.resp_3],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 4, req.resp_4],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 5, req.resp_5],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 6, req.resp_6],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 7, req.resp_7],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 8, req.resp_8],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 9, req.resp_9],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 10, req.resp_10],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 11, req.resp_11],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 12, req.resp_12],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 13, req.resp_13],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 14, req.resp_14],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 15, req.resp_15],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 16, req.resp_16],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 17, req.resp_17],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 18, req.resp_18],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 19, req.resp_19],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 20, req.resp_20],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 21, req.resp_21],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 22, req.resp_22],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 23, req.resp_23],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 24, req.resp_24],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 25, req.resp_25],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 26, req.resp_26],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 27, req.resp_27],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 28, req.resp_28],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 29, req.resp_29],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 30, req.resp_30],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 31, req.resp_31],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 32, req.resp_32],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 33, req.resp_33],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 34, req.resp_34],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 35, req.resp_35],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 36, req.resp_36],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 37, req.resp_37],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 38, req.resp_38],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 39, req.resp_39],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 40, req.resp_40],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 41, req.resp_41],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 42, req.resp_42],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 43, req.resp_43],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 44, req.resp_44],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 45, req.resp_45],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 46, req.resp_46],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 47, req.resp_47],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 48, req.resp_48],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 49, req.resp_49],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 50, req.resp_50],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 51, req.resp_51],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 52, req.resp_52],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 53, req.resp_53],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 54, req.resp_54],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 55, req.resp_55],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 56, req.resp_56],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 57, req.resp_57],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 58, req.resp_58],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 59, req.resp_59],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 60, req.resp_60],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 61, req.resp_61],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 62, req.resp_62],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 63, req.resp_63],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 64, req.resp_64],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 65, req.resp_65],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 66, req.resp_66],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 67, req.resp_67],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 68, req.resp_68],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 69, req.resp_69],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 70, req.resp_70],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 71, req.resp_71],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 72, req.resp_72],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 73, req.resp_73],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 74, req.resp_74],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 75, req.resp_75],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 76, req.resp_76],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 77, req.resp_77],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 78, req.resp_78],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 79, req.resp_79],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 80, req.resp_80],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 81, req.resp_81],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 82, req.resp_82],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 83, req.resp_83],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 84, req.resp_84],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 85, req.resp_85],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 86, req.resp_86],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 87, req.resp_87],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 88, req.resp_88],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 89, req.resp_89],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 90, req.ot_servicorp],
                    [formulario_id, req.tipo_formulario_id, req.usuario_id, 91, req.folio_servicio],
                ]
            
                // guardando respuestas
                connection.query('INSERT INTO srv_respuestas (formulario_id, formulario_tipo_formulario_id, formulario_usuario_id, pregunta_id, respuesta) VALUES (?)', [values], (err, result) => {
                    if (err) { 
                        connection.rollback(() => {
                            throw err
                        })
                    }  

                    // guardando las imágenes en el servidor
                    let imgs = {
                        cod_decodificador: req.cod_decodificador,
                        imagen_1: req.imagen_1,
                        imagen_2: req.imagen_2,
                        imagen_3: req.imagen_3,
                        imagen_4: req.imagen_4
                    }
                    // decodificamos la img y la guardamos
                    if (imgs.cod_decodificador !== undefined || imgs.cod_decodificador !== ''){
                        decodeImg(imgs.cod_decodificador)
                    }
                    if (imgs.imagen_1 !== undefined){
                        decodeImg(imgs.imagen_1)
                    }
                    if (imgs.imagen_2 !== undefined){
                        decodeImg(imgs.imagen_2)
                    }
                    if (imgs.imagen_3 !== undefined){
                        decodeImg(imgs.imagen_3)
                    }
                    if (imgs.imagen_4 !== undefined){
                        decodeImg(imgs.imagen_4)
                    }
                    values = [
                        ['nombre_imagen', '../public/img/', formulario_id, req.tipo_formulario_id, req.usuario_id],
                        ['nombre_imagen', '../public/img/', formulario_id, req.tipo_formulario_id, req.usuario_id],
                        ['nombre_imagen', '../public/img/', formulario_id, req.tipo_formulario_id, req.usuario_id],
                        ['nombre_imagen', '../public/img/', formulario_id, req.tipo_formulario_id, req.usuario_id],
                    ]
                    // guardando las rutas de las imágenes en la bdd
                    connection.query('INSERT INTO srv_imagen (nombre_imagen, ruta, formulario_id, formulario_tipo_formulario_id, formulario_usuario_id) VALUES(?)', [values], (err, result) => {
                        connection.commit((err) => {
                            if (err) { 
                                connection.rollback(() => {
                                throw err
                                })
                            }
                            console.log('Transaction Complete.')
                        })
                    })
                })
            })
        })
    }
}

module.exports = formularioModel

//codigo q finaliza la transaccion
/* connection.commit((err) => {
    if (err) { 
        connection.rollback(() => {
        throw err
        })
    }
    console.log('Transaction Complete.')
}) */