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

formularioModel.createForm = (req, callback) => {
    if(connection){
        let empresa = ''
        let values = [
            req.latitud, 
            req.longitud, 
            req.tipo_formulario_id, 
            req.usuario_id
        ]
        connection.beginTransaction(function(err) {
            if (err) { 
                console.log(err)
            }

            // inserción de un nuevo formulario
            connection.query('INSERT INTO srv_formulario (latitud, longitud, tipo_formulario_id, usuario_id) VALUES (?)', [values], (err, result) => {
                if(err)  {  
                    connection. rollback ( function ( )  { 
                        console.log('Error al crear nuevo formulario: ' + err.message)
                        throw err
                    }) 
                }
                let formulario_id = result.insertId || null
                console.log(formulario_id+'++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
                
                // evaluamos que tipo de formulario acabamos de recibir
                switch(req.tipo_formulario_id){
                    case 3:             // mantencion hfc claro
                    case 4:             // mantencion dth claro
                        empresa = 'claro'
                        values = [
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 3, req.resp_1],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 4, req.resp_2],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 5, req.resp_3],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 6, req.resp_4],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 7, req.resp_5],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 8, req.resp_6],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 9, req.resp_7],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 10, req.resp_8],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 11, req.resp_9],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 12, req.resp_10],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 13, req.resp_11],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 14, req.resp_12],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 15, req.resp_13],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 16, req.resp_14],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 17, req.resp_15],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 18, req.resp_16],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 19, req.resp_17],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 20, req.resp_18],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 21, req.resp_19],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 22, req.resp_20],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 23, req.resp_21],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 24, req.resp_22],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 25, req.resp_23],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 26, req.resp_24],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 27, req.resp_25],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 28, req.resp_26],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 29, req.resp_27],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 30, req.resp_28],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 31, req.resp_29],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 32, req.resp_30],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 33, req.resp_31],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 34, req.resp_32],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 35, req.resp_33],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 36, req.resp_34],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 37, req.resp_35],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 38, req.resp_36],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 39, req.resp_37],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 40, req.resp_38],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 41, req.resp_39],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 42, req.resp_40],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 43, req.resp_41],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 44, req.resp_42],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 45, req.resp_43],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 46, req.resp_44],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 47, req.resp_45],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 48, req.resp_46],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 49, req.resp_47],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 50, req.resp_48],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 51, req.resp_49],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 52, req.resp_50],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 53, req.resp_51],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 54, req.resp_52],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 55, req.resp_53],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 56, req.resp_54],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 57, req.resp_55],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 58, req.resp_56],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 59, req.resp_57],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 60, req.resp_58],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 61, req.resp_59],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 62, req.resp_60],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 63, req.resp_61],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 64, req.resp_62],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 65, req.resp_63],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 66, req.resp_64],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 67, req.resp_65],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 68, req.resp_66],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 69, req.resp_67],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 70, req.resp_68],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 71, req.resp_69],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 72, req.resp_70],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 73, req.resp_71],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 74, req.resp_72],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 75, req.resp_73],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 76, req.resp_74],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 77, req.resp_75],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 78, req.resp_76],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 79, req.resp_77],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 80, req.resp_78],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 81, req.resp_79],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 82, req.resp_80],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 83, req.resp_81],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 84, req.resp_82],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 85, req.resp_83],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 86, req.resp_84],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 87, req.resp_85],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 88, req.resp_86],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 199, req.cod_decodificador],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 1, req.ot_servicorp],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 2, req.folio_servicio]
                        ]
                    break
                    case 1:             // instalacion hfc claro
                    case 2:             // instalacion dth claro
                        empresa = 'claro'
                        values = [
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 3, req.resp_1],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 4, req.resp_2],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 5, req.resp_3],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 6, req.resp_4],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 7, req.resp_5],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 8, req.resp_6],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 9, req.resp_7],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 10, req.resp_8],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 11, req.resp_9],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 12, req.resp_10],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 13, req.resp_11],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 14, req.resp_12],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 15, req.resp_13],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 16, req.resp_14],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 17, req.resp_15],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 89, req.resp_16],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 90, req.resp_17],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 91, req.resp_18],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 92, req.resp_19],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 93, req.resp_20],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 94, req.resp_21],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 95, req.resp_22],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 96, req.resp_23],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 97, req.resp_24],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 98, req.resp_25],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 99, req.resp_26],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 100, req.resp_27],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 101, req.resp_28],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 102, req.resp_29],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 103, req.resp_30],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 104, req.resp_31],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 105, req.resp_32],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 106, req.resp_33],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 107, req.resp_34],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 108, req.resp_35],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 109, req.resp_36],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 110, req.resp_37],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 37, req.resp_38],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 38, req.resp_39],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 39, req.resp_40],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 40, req.resp_41],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 41, req.resp_42],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 42, req.resp_43],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 43, req.resp_44],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 44, req.resp_45],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 45, req.resp_46],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 46, req.resp_47],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 47, req.resp_48],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 48, req.resp_49],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 49, req.resp_50],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 50, req.resp_51],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 51, req.resp_52],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 52, req.resp_53],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 53, req.resp_54],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 54, req.resp_55],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 55, req.resp_56],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 56, req.resp_57],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 57, req.resp_58],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 58, req.resp_59],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 59, req.resp_60],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 60, req.resp_61],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 61, req.resp_62],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 62, req.resp_63],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 63, req.resp_64],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 64, req.resp_65],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 65, req.resp_66],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 66, req.resp_67],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 67, req.resp_68],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 68, req.resp_69],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 69, req.resp_70],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 70, req.resp_71],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 71, req.resp_72],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 72, req.resp_73],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 73, req.resp_74],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 74, req.resp_75],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 75, req.resp_76],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 76, req.resp_77],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 77, req.resp_78],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 78, req.resp_79],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 79, req.resp_80],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 80, req.resp_81],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 81, req.resp_82],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 82, req.resp_83],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 83, req.resp_84],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 84, req.resp_85],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 85, req.resp_86],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 86, req.resp_87],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 87, req.resp_88],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 88, req.resp_89],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 199, req.cod_decodificador],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 1, req.ot_servicorp],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 2, req.folio_servicio]
                        ]
                    break
                    case 5:             // desconexion claro
                        empresa = 'claro'
                        values = [
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 111, req.resp_1],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 112, req.resp_2],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 113, req.resp_3],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 114, req.resp_4],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 115, req.resp_5],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 116, req.resp_6],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 117, req.resp_7],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 52, req.resp_8],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 1, req.ot_servicorp],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 2, req.folio_servicio]
                        ]
                    break
                    case 6:             // instalacion dth entel
                        empresa = 'entel'
                        values = [
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 118, req.resp_1],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 119, req.resp_2],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 120, req.resp_3],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 121, req.resp_4],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 122, req.resp_5],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 123, req.resp_6],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 124, req.resp_7],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 125, req.resp_8],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 126, req.resp_9],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 127, req.resp_10],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 128, req.resp_11],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 129, req.resp_12],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 130, req.resp_13],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 131, req.resp_14],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 132, req.resp_15],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 133, req.resp_16],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 134, req.resp_17],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 135, req.resp_18],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 136, req.resp_19],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 137, req.resp_20],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 138, req.resp_21],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 139, req.resp_22],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 140, req.resp_23],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 141, req.resp_24],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 142, req.resp_25],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 143, req.resp_26],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 144, req.resp_27],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 145, req.resp_28],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 146, req.resp_29],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 147, req.resp_30],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 148, req.resp_31],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 149, req.resp_32],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 150, req.resp_33],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 151, req.resp_34],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 152, req.resp_35],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 153, req.resp_36],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 154, req.resp_37],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 155, req.resp_38],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 156, req.resp_39],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 157, req.resp_40],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 158, req.resp_41],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 159, req.resp_42],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 160, req.resp_43],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 161, req.resp_44],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 162, req.resp_45],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 163, req.resp_46],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 164, req.resp_47],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 165, req.resp_48],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 166, req.resp_49],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 167, req.resp_50],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 168, req.resp_51],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 169, req.resp_52],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 170, req.resp_53],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 171, req.resp_54],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 172, req.resp_55],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 173, req.resp_56],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 174, req.resp_57],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 175, req.resp_58],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 176, req.resp_59],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 177, req.resp_60],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 178, req.resp_61],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 179, req.resp_62],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 180, req.resp_63],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 181, req.resp_64],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 182, req.resp_65],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 183, req.resp_66],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 184, req.resp_67],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 185, req.resp_68],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 186, req.resp_69],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 187, req.resp_70],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 188, req.resp_71],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 52, req.resp_72],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 189, req.resp_73],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 190, req.resp_74],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 191, req.resp_75],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 54, req.resp_76],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 192, req.resp_77],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 193, req.resp_78],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 194, req.resp_79],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 195, req.resp_80],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 196, req.resp_81],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 197, req.resp_82],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 198, req.resp_83],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 199, req.cod_decodificador],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 1, req.ot_servicorp],
                            [formulario_id, req.tipo_formulario_id, req.usuario_id, 2, req.folio_servicio]
                        ]
                    break
                    default:
                        console.log('Error en el id de formulario')
                    break
                }

                // guardando respuestas
                connection.query('INSERT INTO srv_respuesta (formulario_id, formulario_tipo_formulario_id, formulario_usuario_id, pregunta_id, respuesta) VALUES ?', [values], (err, result) => {
                    if (err) { 
                        return connection.rollback(() => {
                            console.log('Error al insertar respuestas: ' + err.message)
                            throw err
                        })
                    } 

                    // recibimos las imagenes
                    let imgs = {
                        cod_decodificador: req.cod_decodificador,
                        imagen_1: (req.imagen_1 === '') ? null:req.imagen_1,
                        imagen_2: (req.imagen_2 === '') ? null:req.imagen_2,
                        imagen_3: (req.imagen_3 === '') ? null:req.imagen_3,
                        imagen_4: (req.imagen_4 === '') ? null:req.imagen_4,
                        imagen_5: (req.imagen_5 === '') ? null:req.imagen_5,
                        imagen_6: (req.imagen_6 === '') ? null:req.imagen_6,
                        imagen_7: (req.imagen_7 === '') ? null:req.imagen_7,
                        imagen_8: (req.imagen_8 === '') ? null:req.imagen_8,
                        imagen_9: (req.imagen_9 === '') ? null:req.imagen_9,
                        imagen_10: (req.imagen_10 === '') ? null:req.imagen_10
                    }
                    // decodificamos la img y la guardamos
                    if (typeof(imgs.imagen_1 ) !== 'undefined' && req.imagen_1 !== ''){
                        decodeImg(req.imagen_1, req.ot_servicorp + '_' + empresa + '_' + req.fecha + '_img1')
                    }
                    if (typeof(req.imagen_2) !== 'undefined' && req.imagen_2 !== ''){
                        decodeImg(req.imagen_2, req.ot_servicorp + '_' + empresa + '_' + req.fecha + '_img2')
                    }
                    if (typeof(req.imagen_3) !== 'undefined' && req.imagen_3 !== ''){
                        decodeImg(req.imagen_3, req.ot_servicorp + '_' + empresa + '_' + req.fecha + '_img3')
                    }
                    if (typeof(req.imagen_4) !== 'undefined' && req.imagen_4 !== ''){
                        decodeImg(req.imagen_4, req.ot_servicorp + '_' + empresa + '_' + req.fecha + '_img4')
                    }
                    if (typeof(req.imagen_5) !== 'undefined' && req.imagen_5 !== ''){
                        decodeImg(req.imagen_5, req.ot_servicorp + '_' + empresa + '_' + req.fecha + '_img5')
                    }
                    if (typeof(req.imagen_6) !== 'undefined' && req.imagen_6 !== ''){
                        decodeImg(req.imagen_6, req.ot_servicorp + '_' + empresa + '_' + req.fecha + '_img6')
                    }
                    if (typeof(req.imagen_7) !== 'undefined' && req.imagen_7 !== ''){
                        decodeImg(req.imagen_7, req.ot_servicorp + '_' + empresa + '_' + req.fecha + '_img7')
                    }
                    if (typeof(req.imagen_8) !== 'undefined' && req.imagen_8 !== ''){
                        decodeImg(req.imagen_8, req.ot_servicorp + '_' + empresa + '_' + req.fecha + '_img8')
                    }
                    if (typeof(req.imagen_9) !== 'undefined' && req.imagen_9 !== ''){
                        decodeImg(req.imagen_9, req.ot_servicorp + '_' + empresa + '_' + req.fecha + '_img9')
                    }
                    if (typeof(req.imagen_10) !== 'undefined' && req.imagen_10 !== ''){
                        decodeImg(req.imagen_10, req.ot_servicorp + '_' + empresa + '_' + req.fecha + '_img10')
                    }
                    values = []
                    if(typeof(imgs.imagen_1) !== 'undefined' && imgs.imagen_1 !== ''){
                        values.push([req.ot_servicorp + '_' + empresa + '_' + req.fecha + '_img1', 'public/img/' + req.ot_servicorp + '_' + empresa + req.fecha + '_img1' + '.jpeg', formulario_id, req.tipo_formulario_id, req.usuario_id])
                    }
                    if(typeof(imgs.imagen_2) !== 'undefined' && imgs.imagen_2 !== ''){
                        values.push([req.ot_servicorp + '_' + empresa + '_' + req.fecha + '_img2', 'public/img/' + req.ot_servicorp + '_' + empresa + req.fecha + '_img2' + '.jpeg', formulario_id, req.tipo_formulario_id, req.usuario_id])
                    }
                    if(typeof(imgs.imagen_3) !== 'undefined' && imgs.imagen_3 !== ''){
                        values.push([req.ot_servicorp + '_' + empresa + '_' + req.fecha + '_img3', 'public/img/' + req.ot_servicorp + '_' + empresa + req.fecha + '_img3' + '.jpeg', formulario_id, req.tipo_formulario_id, req.usuario_id])
                    }
                    if(typeof(imgs.imagen_4) !== 'undefined' && imgs.imagen_4 !== ''){
                        values.push([req.ot_servicorp + '_' + empresa + '_' + req.fecha + '_img4', 'public/img/' + req.ot_servicorp + '_' + empresa + req.fecha + '_img4' + '.jpeg', formulario_id, req.tipo_formulario_id, req.usuario_id])
                    }
                    if(typeof(imgs.imagen_5) !== 'undefined' && imgs.imagen_5 !== ''){
                        values.push([req.ot_servicorp + '_' + empresa + '_' + req.fecha + '_img5', 'public/img/' + req.ot_servicorp + '_' + empresa + req.fecha + '_img5' + '.jpeg', formulario_id, req.tipo_formulario_id, req.usuario_id])
                    }
                    if(typeof(imgs.imagen_6) !== 'undefined' && imgs.imagen_6 !== ''){
                        values.push([req.ot_servicorp + '_' + empresa + '_' + req.fecha + '_img6', 'public/img/' + req.ot_servicorp + '_' + empresa + req.fecha + '_img6' + '.jpeg', formulario_id, req.tipo_formulario_id, req.usuario_id])
                    }
                    if(typeof(imgs.imagen_7) !== 'undefined' && imgs.imagen_7 !== ''){
                        values.push([req.ot_servicorp + '_' + empresa + '_' + req.fecha + '_img7', 'public/img/' + req.ot_servicorp + '_' + empresa + req.fecha + '_img7' + '.jpeg', formulario_id, req.tipo_formulario_id, req.usuario_id])
                    }
                    if(typeof(imgs.imagen_8) !== 'undefined' && imgs.imagen_8 !== ''){
                        values.push([req.ot_servicorp + '_' + empresa + '_' + req.fecha + '_img8', 'public/img/' + req.ot_servicorp + '_' + empresa + req.fecha + '_img8' + '.jpeg', formulario_id, req.tipo_formulario_id, req.usuario_id])
                    }
                    if(typeof(imgs.imagen_9) !== 'undefined' && imgs.imagen_9 !== ''){
                        values.push([req.ot_servicorp + '_' + empresa + '_' + req.fecha + '_img9', 'public/img/' + req.ot_servicorp + '_' + empresa + req.fecha + '_img9' + '.jpeg', formulario_id, req.tipo_formulario_id, req.usuario_id])
                    }
                    if(typeof(imgs.imagen_10) !== 'undefined' && imgs.imagen_10 !== ''){
                        values.push([req.ot_servicorp + '_' + empresa + '_' + req.fecha + '_img10', 'public/img/' + req.ot_servicorp + '_' + empresa + req.fecha + '_img10' + '.jpeg', formulario_id, req.tipo_formulario_id, req.usuario_id])
                    }
                    console.log('cantidad de imagenes a guardar en la bdd: ' + values.length)
                    console.log(values)
                    
                    if(values.length > 0){
                        // guardando las rutas de las imágenes en la bdd
                        connection.query('INSERT INTO srv_imagen (nombre_imagen, ruta, formulario_id, formulario_tipo_formulario_id, formulario_usuario_id) VALUES ?', [values], (err, result) => {
                            if (err) {
                                return connection.rollback(function() {
                                    console.log('Error al guardar la(s) imagen(es) en la bdd: ' + err.message)
                                    throw err
                                })
                            }
                            connection.commit(function (err) {
                                console.log('Commiting transaction.....');
                                if (err) {
                                    return connection.rollback(function () {
                                        throw err
                                    })
                                }
    
                                console.log('Transaction Complete.')
                                callback(null, result);
                            });
                        })
                    }else{
                        connection.commit(function (err) {
                            console.log('Commiting transaction.....');
                            if (err) {
                                return connection.rollback(function () {
                                    throw err
                                })
                            }

                            console.log('Transaction Complete.')
                            callback(null, result)
                        });
                    }
                })
            })
        })
    }
}

formularioModel.getFormularios = (req, callback) => {
    if(connection){
        let data = [
            req.tipo_formulario_id,
            req.usuario_id
        ]
        console.log(data)
        connection.query(`SELECT * FROM srv_formulario WHERE tipo_formulario_id=? and usuario_id=?`, data, (err, row) => {
            if(err){
                callback(err, null)
                console.log(`Error en getFormularios: ${err.message}`)
            }
            if(!err){
                console.log(row)
                callback(null, row)
            }
        })
    }
}

formularioModel.getResponsesByFormId = (req, callback) => {
    if(connection){
        let formulario_id = req
        console.log(formulario_id)
        connection.query(`SELECT * FROM cfk_servicorp.srv_respuesta WHERE formulario_id=?`, formulario_id, (err, row) => {
            if(err){
                callback(err, null)
                console.log(`Error en getFormularios: ${err.message}`)
            }
            if(!err){
                console.log(row)
                callback(null, row)
            }
        })
    }
}

formularioModel.getQuestionsByFormId = (req, callback) => {
    if(connection){
        let formulario_id = req
        connection.query(`select glosa from srv_pregunta 
        inner join (SELECT * FROM cfk_servicorp.srv_respuesta WHERE formulario_id=?) as respuestas on srv_pregunta.id=respuestas.pregunta_id;`, formulario_id, (err, row) => {
            if(err){
                console.log(`Error en getFormularios: ${err.message}`)
                callback(err, null)
            }
            if(!err){
                console.log(row)
                callback(null, row)
            }
        })
    }
}

formularioModel.getTotalFormsByUserId = (req, callback) => {
    if(connection){
        let usuario_id = req
        connection.query(`SELECT count(*) as 'cantidad' FROM cfk_servicorp.srv_formulario WHERE usuario_id=? and tipo_formulario_id=1 
        UNION ALL SELECT count(*) FROM cfk_servicorp.srv_formulario WHERE usuario_id=? and tipo_formulario_id=2
        UNION ALL SELECT count(*) FROM cfk_servicorp.srv_formulario WHERE usuario_id=? and tipo_formulario_id=3  
        UNION ALL SELECT count(*) FROM cfk_servicorp.srv_formulario WHERE usuario_id=? and tipo_formulario_id=4 
        UNION ALL SELECT count(*) FROM cfk_servicorp.srv_formulario WHERE usuario_id=? and tipo_formulario_id=5
        UNION ALL SELECT count(*) FROM cfk_servicorp.srv_formulario WHERE usuario_id=? and tipo_formulario_id=6;`, [usuario_id,usuario_id,usuario_id,usuario_id,usuario_id,usuario_id], (err, row) => {
            if(err){
                console.log(`Error en getTotalFormsByUserId: ${err.message}`)
                callback(err, null)
            }
            if(!err){
                console.log(row)
                callback(null, row)
            }
        })
    }
}

formularioModel.getTotalFormsByDate = (req, callback) => {
    let fechas = []
    let query = ''
    if(req.empresa == 'claro'){
        query = `SELECT count(*) as 'cantidad' FROM cfk_servicorp.srv_formulario WHERE tipo_formulario_id!=6 AND create_time BETWEEN '${req.fechas[0]}' AND '${req.fechas[1]}'`
        for(let i=1; i<req.fechas.length-1; i++){
            query = query.concat(` UNION ALL SELECT count(*) FROM cfk_servicorp.srv_formulario WHERE tipo_formulario_id!=6 AND create_time BETWEEN '${req.fechas[i]}' AND '${req.fechas[i+1]}'`)
        }
    }else if(req.empresa == 'entel'){
        query = `SELECT count(*) as 'cantidad' FROM cfk_servicorp.srv_formulario WHERE tipo_formulario_id=6 AND create_time BETWEEN '${req.fechas[0]}' AND '${req.fechas[1]}'`
        for(let i=1; i<req.fechas.length-1; i++){
            query = query.concat(` UNION ALL SELECT count(*) FROM cfk_servicorp.srv_formulario WHERE tipo_formulario_id=6 AND create_time BETWEEN '${req.fechas[i]}' AND '${req.fechas[i+1]}'`)
        }
    }
    if(connection){
        prueba = connection.query(query, fechas, (err, row) => {
            if(err){
                console.log(`Error en getTotalFormsByDate: ${err.message}`)
                console.log(prueba.sql)
                callback(err, null)
            }
            if(!err){
                callback(null, row)
            }
        })
    }

}

formularioModel.getZips = (callback) => {
    if(connection){
        connection.query(`SELECT * FROM cfk_servicorp.srv_img_descarga WHERE estado='Activo'`, (err, row) => {
            if(err){
                console.log(`Error en getZips: ${err.message}`)
                callback(err, null)
            }
            if(!err){
                console.log(row)
                callback(null, row)
            }
        })
    }
}

formularioModel.getReporte = (req, callback) => {
    let values = req
    if(connection){
        prueba = connection.query(`select glosa,respuesta,srv_pregunta.create_time,formulario_id,formulario_tipo_formulario_id,username from srv_respuesta
        inner join srv_pregunta
        on srv_respuesta.pregunta_id=srv_pregunta.id
        inner join srv_usuario
        on srv_respuesta.formulario_usuario_id=srv_usuario.id
        where formulario_tipo_formulario_id=? and formulario_id='?'`, [values.tipo_formulario_id, values.formulario_id], (err, row) => {
            if(err){
                console.log(`Error en getReporte: ${err.message}`)
                callback(err, null)
            }
            if(!err){
                callback(null, row)
            }
        })
    }
}

formularioModel.getFormulariosId = (req, callback) => {
    if(connection){
        connection.query('SELECT id FROM srv_formulario where tipo_formulario_id=?', [req], (err, row) => {
            if(err){
                console.log('Error en getFormulariosId', err.message)
                callback(err, null)
            }
            if(!err){
                callback(null, row)
            }
        })
    }
}

module.exports = formularioModel