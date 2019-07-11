let fs = require('fs')
let formularioModel = {}
const decodeImg = require('./../middlewares/decodeAndSave.js')
const log = require('../logging-system/logger').Logger
const moment = require('moment-timezone');
moment().tz("America/Santiago").format();

formularioModel.getPreguntas = (callback) => {
    pool.getConnection(function(err, connection){
        connection.query('SELECT * FROM srv_pregunta ORDER BY id', (err, row) => {
            if(err){
                callback(err, null)
                log.error(`Error en getPreguntas: ${err.message}`)
            }
            if(!err){
                callback(null, row)
            }
        })
        connection.release()
    })
}

formularioModel.getRespuestas = (callback) => {
    pool.getConnection(function(err, connection){
        connection.query('SELECT * FROM srv_respuesta ORDER BY id', (err, row) => {
            if(err){
                callback(err, null)
                log.error(`Error en getRespuestas: ${err.message}`)
            }
            if(!err){
                callback(null, row)
            }
        })
        connection.release()
    })
}

formularioModel.createForm = (req, callback) => {
    pool.getConnection(function(err, connection){
        let empresa = ''
        let values = [
            req.latitud, 
            req.longitud, 
            req.tipo_formulario_id, 
            req.usuario_id
        ]
        connection.beginTransaction((err) => {
            if (err) { 
                log.error(err)
            }

            // inserción de un nuevo formulario
            connection.query('INSERT INTO srv_formulario (latitud, longitud, tipo_formulario_id, usuario_id) VALUES (?)', [values], (err, result) => {
                if(err)  {  
                    connection. rollback ( function ( )  { 
                        log.error('Error al crear nuevo formulario: ' + err.message)
                        throw err
                    }) 
                }
                let formulario_id = result.insertId || null
                
                // evaluamos que tipo de formulario acabamos de recibir
                switch (req.tipo_formulario_id) {
                    case 1:             // instalacion hfc claro
                    empresa = 'claro'
                    values = [
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 1, req.ot_servicorp],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 2, req.folio_servicio],
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
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 89, req.resp_87],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 90, req.resp_88],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 91, req.resp_89],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 92, req.resp_90],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 93, req.resp_91],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 94, req.resp_92],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 95, req.resp_93],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 96, req.resp_94],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 97, req.resp_95],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 98, req.resp_96],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 99, req.resp_97],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 100, req.resp_98],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 101, req.resp_99],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 102, req.resp_100],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 103, req.resp_101],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 104, req.resp_102],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 105, req.resp_103],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 106, req.resp_104],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 107, req.resp_105],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 108, req.resp_106],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 109, req.resp_107],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 110, req.resp_108],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 111, req.cod_decodificador]
                    ]
                    break
                    case 2:             // instalacion dth claro
                    empresa = 'claro'
                    values = [
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 112, req.ot_servicorp],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 113, req.folio_servicio],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 114, req.resp_1],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 115, req.resp_2],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 116, req.resp_3],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 117, req.resp_4],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 118, req.resp_5],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 119, req.resp_6],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 120, req.resp_7],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 121, req.resp_8],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 122, req.resp_9],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 123, req.resp_10],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 124, req.resp_11],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 125, req.resp_12],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 126, req.resp_13],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 127, req.resp_14],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 128, req.resp_15],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 129, req.resp_16],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 130, req.resp_17],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 131, req.resp_18],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 132, req.resp_19],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 133, req.resp_20],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 134, req.resp_21],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 135, req.resp_22],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 136, req.resp_23],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 137, req.resp_24],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 138, req.resp_25],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 139, req.resp_26],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 140, req.resp_27],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 141, req.resp_28],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 143, req.resp_30],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 145, req.resp_32],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 146, req.resp_33],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 147, req.resp_34],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 148, req.resp_35],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 149, req.resp_36],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 150, req.resp_37],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 151, req.resp_38],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 152, req.resp_39],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 153, req.resp_40],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 154, req.resp_41],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 155, req.resp_42],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 156, req.resp_43],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 157, req.resp_44],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 158, req.resp_45],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 159, req.resp_46],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 160, req.resp_47],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 161, req.resp_48],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 162, req.resp_49],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 163, req.resp_50],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 164, req.resp_51],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 165, req.resp_52],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 166, req.resp_53],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 167, req.resp_54],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 168, req.resp_55],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 169, req.resp_56],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 170, req.resp_57],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 171, req.resp_58],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 172, req.resp_59],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 173, req.resp_60],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 174, req.resp_61],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 175, req.resp_62],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 176, req.resp_63],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 177, req.resp_64],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 178, req.resp_65],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 179, req.resp_66],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 180, req.resp_67],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 181, req.resp_68],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 182, req.resp_69],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 183, req.resp_70],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 184, req.resp_71],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 185, req.resp_72],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 186, req.resp_73],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 187, req.resp_74],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 188, req.resp_75],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 189, req.resp_76],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 190, req.resp_77],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 191, req.resp_78],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 192, req.resp_79],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 193, req.resp_80],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 194, req.resp_81],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 195, req.resp_82],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 196, req.resp_83],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 197, req.resp_84],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 198, req.resp_85],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 199, req.resp_86],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 200, req.resp_87],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 201, req.resp_88],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 202, req.resp_89],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 203, req.resp_90],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 204, req.resp_91],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 205, req.resp_92],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 206, req.resp_93],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 207, req.resp_94],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 208, req.resp_95],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 209, req.resp_96],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 210, req.resp_97],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 211, req.resp_98],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 212, req.resp_99],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 213, req.resp_100],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 214, req.resp_101],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 215, req.resp_102],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 216, req.resp_103],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 217, req.resp_104],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 218, req.resp_105],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 219, req.resp_106],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 220, req.resp_107],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 221, req.resp_108],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 222, req.resp_109],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 223, req.resp_110],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 224, req.cod_decodificador]
                    ]
                    break
                    case 3:             // mantencion hfc claro
                    empresa = 'claro'
                    values = [
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 225, req.ot_servicorp],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 226, req.folio_servicio],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 227, req.resp_1],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 228, req.resp_2],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 229, req.resp_3],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 230, req.resp_4],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 231, req.resp_5],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 232, req.resp_6],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 233, req.resp_7],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 234, req.resp_8],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 235, req.resp_9],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 236, req.resp_10],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 237, req.resp_11],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 238, req.resp_12],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 239, req.resp_13],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 240, req.resp_14],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 241, req.resp_15],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 242, req.resp_16],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 243, req.resp_17],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 244, req.resp_18],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 245, req.resp_19],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 246, req.resp_20],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 247, req.resp_21],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 248, req.resp_22],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 249, req.resp_23],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 250, req.resp_24],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 251, req.resp_25],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 252, req.resp_26],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 253, req.resp_27],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 254, req.resp_28],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 255, req.resp_29],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 256, req.resp_30],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 257, req.resp_31],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 258, req.resp_32],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 259, req.resp_33],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 260, req.resp_34],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 261, req.resp_35],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 262, req.resp_36],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 263, req.resp_37],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 264, req.resp_38],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 265, req.resp_39],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 266, req.resp_40],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 267, req.resp_41],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 268, req.resp_42],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 269, req.resp_43],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 270, req.resp_44],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 271, req.resp_45],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 272, req.resp_46],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 273, req.resp_47],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 274, req.resp_48],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 275, req.resp_49],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 276, req.resp_50],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 277, req.resp_51],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 278, req.resp_52],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 279, req.resp_53],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 280, req.resp_54],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 281, req.resp_55],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 282, req.resp_56],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 283, req.resp_57],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 284, req.resp_58],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 285, req.resp_59],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 286, req.resp_60],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 287, req.resp_61],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 288, req.resp_62],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 289, req.resp_63],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 290, req.resp_64],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 291, req.resp_65],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 292, req.resp_66],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 293, req.resp_67],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 294, req.resp_68],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 295, req.resp_69],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 296, req.resp_70],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 297, req.resp_71],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 298, req.resp_72],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 299, req.resp_73],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 300, req.resp_74],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 301, req.resp_75],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 302, req.resp_76],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 303, req.resp_77],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 304, req.resp_78],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 305, req.resp_79],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 306, req.resp_80],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 307, req.resp_81],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 308, req.resp_82],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 309, req.resp_83],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 310, req.resp_84],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 311, req.resp_85],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 312, req.resp_86],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 313, req.resp_87],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 314, req.resp_88],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 315, req.resp_89],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 316, req.resp_90],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 317, req.resp_91],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 318, req.resp_92],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 319, req.resp_93],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 320, req.resp_94],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 321, req.resp_95],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 322, req.resp_96],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 323, req.resp_97],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 324, req.resp_98],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 325, req.resp_99],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 326, req.resp_100],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 327, req.resp_101],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 328, req.resp_102],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 329, req.resp_103],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 330, req.resp_104],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 331, req.resp_105],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 332, req.resp_106],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 333, req.resp_107],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 334, req.resp_108],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 335, req.cod_decodificador]
                    ]
                    break
                    case 4:             // mantencion dth claro
                    empresa = 'claro'
                    values = [
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 336, req.ot_servicorp],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 337, req.folio_servicio],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 338, req.resp_1],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 339, req.resp_2],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 340, req.resp_3],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 341, req.resp_4],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 342, req.resp_5],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 343, req.resp_6],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 344, req.resp_7],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 345, req.resp_8],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 346, req.resp_9],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 347, req.resp_10],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 348, req.resp_11],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 349, req.resp_12],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 350, req.resp_13],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 351, req.resp_14],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 352, req.resp_15],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 353, req.resp_16],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 354, req.resp_17],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 355, req.resp_18],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 356, req.resp_19],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 357, req.resp_20],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 358, req.resp_21],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 359, req.resp_22],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 360, req.resp_23],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 361, req.resp_24],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 362, req.resp_25],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 363, req.resp_26],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 364, req.resp_27],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 365, req.resp_28],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 366, req.resp_29],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 367, req.resp_30],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 368, req.resp_31],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 369, req.resp_32],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 370, req.resp_33],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 371, req.resp_34],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 372, req.resp_35],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 373, req.resp_36],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 374, req.resp_37],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 375, req.resp_38],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 376, req.resp_39],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 377, req.resp_40],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 378, req.resp_41],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 379, req.resp_42],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 380, req.resp_43],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 381, req.resp_44],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 382, req.resp_45],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 383, req.resp_46],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 384, req.resp_47],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 385, req.resp_48],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 386, req.resp_49],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 387, req.resp_50],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 388, req.resp_51],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 389, req.resp_52],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 390, req.resp_53],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 391, req.resp_54],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 392, req.resp_55],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 393, req.resp_56],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 394, req.resp_57],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 395, req.resp_58],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 396, req.resp_59],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 397, req.resp_60],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 398, req.resp_61],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 399, req.resp_62],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 400, req.resp_63],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 401, req.resp_64],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 402, req.resp_65],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 403, req.resp_66],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 404, req.resp_67],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 405, req.resp_68],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 406, req.resp_69],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 407, req.resp_70],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 408, req.resp_71],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 409, req.resp_72],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 410, req.resp_73],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 411, req.resp_74],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 412, req.resp_75],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 413, req.resp_76],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 414, req.resp_77],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 415, req.resp_78],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 416, req.resp_79],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 417, req.resp_80],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 418, req.resp_81],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 419, req.resp_82],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 420, req.resp_83],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 421, req.resp_84],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 422, req.resp_85],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 423, req.resp_86],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 424, req.resp_87],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 425, req.resp_88],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 426, req.resp_89],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 427, req.resp_90],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 428, req.resp_91],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 429, req.resp_92],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 430, req.resp_93],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 431, req.resp_94],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 432, req.resp_95],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 433, req.resp_96],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 434, req.resp_97],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 435, req.resp_98],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 436, req.resp_99],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 437, req.resp_100],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 438, req.resp_101],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 439, req.resp_102],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 440, req.resp_103],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 441, req.resp_104],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 442, req.resp_105],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 443, req.resp_106],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 444, req.resp_107],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 445, req.resp_108],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 446, req.cod_decodificador]
                    ]
                    break
                    case 5:             // desconexion claro
                    empresa = 'claro'
                    values = [
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 447, req.ot_servicorp],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 448, req.folio_servicio],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 449, req.resp_1],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 450, req.resp_2],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 451, req.resp_3],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 452, req.resp_4],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 453, req.resp_5],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 454, req.resp_6],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 455, req.resp_7],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 456, req.resp_8]
                    ]
                    break
                    case 6:             // instalacion dth entel
                    empresa = 'entel'
                    values = [
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 457, req.ot_servicorp],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 458, req.folio_servicio],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 459, req.resp_1],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 460, req.resp_2],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 461, req.resp_3],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 462, req.resp_4],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 463, req.resp_5],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 464, req.resp_6],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 465, req.resp_7],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 466, req.resp_8],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 467, req.resp_9],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 468, req.resp_10],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 469, req.resp_11],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 470, req.resp_12],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 471, req.resp_13],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 472, req.resp_14],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 473, req.resp_15],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 474, req.resp_16],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 475, req.resp_17],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 476, req.resp_18],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 477, req.resp_19],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 478, req.resp_20],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 479, req.resp_21],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 480, req.resp_22],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 481, req.resp_23],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 482, req.resp_24],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 483, req.resp_25],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 484, req.resp_26],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 485, req.resp_27],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 486, req.resp_28],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 487, req.resp_29],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 488, req.resp_30],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 489, req.resp_31],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 490, req.resp_32],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 491, req.resp_33],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 492, req.resp_34],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 493, req.resp_35],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 494, req.resp_36],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 495, req.resp_37],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 496, req.resp_38],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 497, req.resp_39],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 498, req.resp_40],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 499, req.resp_41],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 500, req.resp_42],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 501, req.resp_43],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 502, req.resp_44],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 503, req.resp_45],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 504, req.resp_46],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 505, req.resp_47],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 506, req.resp_48],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 507, req.resp_49],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 508, req.resp_50],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 509, req.resp_51],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 510, req.resp_52],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 511, req.resp_53],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 512, req.resp_54],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 513, req.resp_55],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 514, req.resp_56],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 515, req.resp_57],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 516, req.resp_58],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 517, req.resp_59],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 518, req.resp_60],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 519, req.resp_61],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 520, req.resp_62],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 521, req.resp_63],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 522, req.resp_64],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 523, req.resp_65],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 524, req.resp_66],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 525, req.resp_67],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 526, req.resp_68],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 527, req.resp_69],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 528, req.resp_70],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 529, req.resp_71],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 530, req.resp_72],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 531, req.resp_73],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 532, req.resp_74],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 533, req.resp_75],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 534, req.resp_76],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 535, req.resp_77],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 536, req.resp_78],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 537, req.resp_79],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 538, req.resp_80],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 539, req.resp_81],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 540, req.resp_82],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 541, req.resp_83],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 542, req.cod_decodificador]
                    ]
                    break
                    case 7:             // bafi entel
                    empresa = 'entel'
                    values = [
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 543, req.ot_servicorp],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 544, req.folio_servicio],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 545, req.resp_1],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 546, req.resp_2],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 547, req.resp_3],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 548, req.resp_4],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 549, req.resp_5],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 550, req.resp_6],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 551, req.resp_7],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 552, req.resp_8],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 553, req.resp_9],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 554, req.resp_10],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 555, req.resp_11],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 556, req.resp_12],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 557, req.resp_13],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 558, req.resp_14],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 559, req.resp_15],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 674, req.resp_16],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 560, req.resp_17],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 561, req.resp_18],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 562, req.resp_19],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 563, req.resp_20],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 564, req.resp_21],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 565, req.resp_22],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 566, req.resp_23],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 567, req.resp_24],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 568, req.resp_25],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 569, req.resp_26],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 571, req.resp_27],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 572, req.resp_28],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 570, req.cod_decodificador]
                    ]
                    break
                    case 8:             // duo entel
                    empresa = 'entel'
                    values = [
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 573, req.ot_servicorp],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 574, req.folio_servicio],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 575, req.resp_1],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 576, req.resp_2],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 577, req.resp_3],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 578, req.resp_4],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 579, req.resp_5],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 580, req.resp_6],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 581, req.resp_7],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 582, req.resp_8],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 583, req.resp_99],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 584, req.resp_9],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 585, req.resp_10],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 586, req.resp_11],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 587, req.resp_12],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 588, req.resp_13],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 589, req.resp_14],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 590, req.resp_15],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 591, req.resp_16],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 592, req.resp_17],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 593, req.resp_18],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 594, req.resp_19],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 595, req.resp_20],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 596, req.resp_21],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 597, req.resp_22],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 598, req.resp_23],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 599, req.resp_24],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 600, req.resp_25],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 601, req.resp_26],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 602, req.resp_27],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 603, req.resp_28],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 604, req.resp_29],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 605, req.resp_30],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 606, req.resp_31],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 607, req.resp_32],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 608, req.resp_33],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 609, req.resp_34],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 610, req.resp_35],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 611, req.resp_36],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 612, req.resp_37],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 613, req.resp_38],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 614, req.resp_39],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 615, req.resp_40],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 678, req.resp_41],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 616, req.resp_42],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 617, req.resp_43],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 618, req.resp_44],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 619, req.resp_45],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 620, req.resp_46],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 621, req.resp_47],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 622, req.resp_48],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 623, req.resp_49],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 624, req.resp_50],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 625, req.resp_51],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 626, req.resp_52],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 627, req.resp_53],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 628, req.resp_54],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 629, req.resp_55],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 630, req.resp_56],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 631, req.resp_57],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 632, req.resp_58],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 633, req.resp_59],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 634, req.resp_60],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 635, req.resp_61],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 636, req.resp_62],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 637, req.resp_63],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 638, req.resp_64],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 639, req.resp_65],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 640, req.resp_66],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 641, req.resp_67],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 642, req.resp_68],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 643, req.resp_69],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 644, req.resp_70],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 645, req.resp_71],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 646, req.resp_72],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 647, req.resp_73],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 648, req.resp_74],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 649, req.resp_75],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 650, req.resp_76],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 651, req.resp_77],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 652, req.resp_78],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 653, req.resp_79],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 654, req.resp_80],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 655, req.resp_81],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 656, req.resp_82],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 657, req.resp_83],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 658, req.resp_84],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 659, req.resp_85],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 660, req.resp_86],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 661, req.resp_87],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 662, req.resp_88],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 663, req.resp_89],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 664, req.resp_90],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 665, req.resp_91],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 666, req.resp_92],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 667, req.resp_93],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 668, req.resp_94],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 669, req.resp_95],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 670, req.resp_96],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 671, req.resp_97],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 672, req.resp_98],
                        [formulario_id, req.tipo_formulario_id, req.usuario_id, 673, req.cod_decodificador]
                    ]
                    break
                    default:
                    log.error('Error en el id de formulario')
                    break
                }

                // guardando respuestas
                prueba = connection.query('INSERT INTO srv_respuesta (formulario_id, formulario_tipo_formulario_id, formulario_usuario_id, pregunta_id, respuesta) VALUES ?', [values], (err, result) => {
                    console.log('sql',prueba.sql)
                    if (err) { 
                        return connection.rollback(() => {
                            log.error('Error al insertar respuestas: ' + err.message)
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
                        decodeImg(req.imagen_1, req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_1')
                    }
                    if (typeof(req.imagen_2) !== 'undefined' && req.imagen_2 !== ''){
                        decodeImg(req.imagen_2, req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_2')
                    }
                    if (typeof(req.imagen_3) !== 'undefined' && req.imagen_3 !== ''){
                        decodeImg(req.imagen_3, req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_3')
                    }
                    if (typeof(req.imagen_4) !== 'undefined' && req.imagen_4 !== ''){
                        decodeImg(req.imagen_4, req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_4')
                    }
                    if (typeof(req.imagen_5) !== 'undefined' && req.imagen_5 !== ''){
                        decodeImg(req.imagen_5, req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_5')
                    }
                    if (typeof(req.imagen_6) !== 'undefined' && req.imagen_6 !== ''){
                        decodeImg(req.imagen_6, req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_6')
                    }
                    if (typeof(req.imagen_7) !== 'undefined' && req.imagen_7 !== ''){
                        decodeImg(req.imagen_7, req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_7')
                    }
                    if (typeof(req.imagen_8) !== 'undefined' && req.imagen_8 !== ''){
                        decodeImg(req.imagen_8, req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_8')
                    }
                    if (typeof(req.imagen_9) !== 'undefined' && req.imagen_9 !== ''){
                        decodeImg(req.imagen_9, req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_9')
                    }
                    if (typeof(req.imagen_10) !== 'undefined' && req.imagen_10 !== ''){
                        decodeImg(req.imagen_10, req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_10')
                    }
                    values = []
                    if(typeof(imgs.imagen_1) !== 'undefined' && imgs.imagen_1 !== ''){
                        values.push([req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_1', 'img/' + req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_1' + '.jpeg', formulario_id, req.tipo_formulario_id, req.usuario_id])
                    }
                    if(typeof(imgs.imagen_2) !== 'undefined' && imgs.imagen_2 !== ''){
                        values.push([req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_2', 'img/' + req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_2' + '.jpeg', formulario_id, req.tipo_formulario_id, req.usuario_id])
                    }
                    if(typeof(imgs.imagen_3) !== 'undefined' && imgs.imagen_3 !== ''){
                        values.push([req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_3', 'img/' + req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_3' + '.jpeg', formulario_id, req.tipo_formulario_id, req.usuario_id])
                    }
                    if(typeof(imgs.imagen_4) !== 'undefined' && imgs.imagen_4 !== ''){
                        values.push([req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_4', 'img/' + req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_4' + '.jpeg', formulario_id, req.tipo_formulario_id, req.usuario_id])
                    }
                    if(typeof(imgs.imagen_5) !== 'undefined' && imgs.imagen_5 !== ''){
                        values.push([req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_5', 'img/' + req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_5' + '.jpeg', formulario_id, req.tipo_formulario_id, req.usuario_id])
                    }
                    if(typeof(imgs.imagen_6) !== 'undefined' && imgs.imagen_6 !== ''){
                        values.push([req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_6', 'img/' + req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_6' + '.jpeg', formulario_id, req.tipo_formulario_id, req.usuario_id])
                    }
                    if(typeof(imgs.imagen_7) !== 'undefined' && imgs.imagen_7 !== ''){
                        values.push([req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_7', 'img/' + req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_7' + '.jpeg', formulario_id, req.tipo_formulario_id, req.usuario_id])
                    }
                    if(typeof(imgs.imagen_8) !== 'undefined' && imgs.imagen_8 !== ''){
                        values.push([req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_8', 'img/' + req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_8' + '.jpeg', formulario_id, req.tipo_formulario_id, req.usuario_id])
                    }
                    if(typeof(imgs.imagen_9) !== 'undefined' && imgs.imagen_9 !== ''){
                        values.push([req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_9', 'img/' + req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_9' + '.jpeg', formulario_id, req.tipo_formulario_id, req.usuario_id])
                    }
                    if(typeof(imgs.imagen_10) !== 'undefined' && imgs.imagen_10 !== ''){
                        values.push([req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_10', 'img/' + req.folio_servicio + '_' + empresa + '_' + moment(req.fecha).tz('America/Santiago').format('X') + '_10' + '.jpeg', formulario_id, req.tipo_formulario_id, req.usuario_id])
                    }
                    
                    if(values.length > 0){
                        // guardando las rutas de las imágenes en la bdd
                        connection.query('INSERT INTO srv_imagen (nombre_imagen, ruta, formulario_id, formulario_tipo_formulario_id, formulario_usuario_id) VALUES ?', [values], (err, result) => {
                            if (err) {
                                return connection.rollback(function() {
                                    log.error('Error al guardar la(s) imagen(es) en la bdd: ' + err.message)
                                    throw err
                                })
                            }
                            connection.commit(function (err) {
                                log.info('Commiting transaction.....');
                                if (err) {
                                    return connection.rollback(function () {
                                        throw err
                                    })
                                }
    
                                log.info('Transaction Complete.')
                                callback(null, result);
                            })
                        })
                    }else{
                        connection.commit(function (err) {
                            log.info('Commiting transaction.....')
                            if (err) {
                                return connection.rollback(function () {
                                    throw err
                                })
                            }

                            log.info('Transaction Complete.')
                            callback(null, result)
                        });
                    }
                })
            })
        })
        connection.release()
    })
}

formularioModel.getFormularios = (req, callback) => {
    pool.getConnection(function(err, connection){
        let data = [
            req.tipo_formulario_id,
            req.usuario_id
        ]
        connection.query(`SELECT * FROM srv_formulario WHERE tipo_formulario_id=? and usuario_id=? ORDER BY create_time DESC`, data, (err, row) => {
            if(err){
                callback(err, null)
                log.error(`Error en getFormularios: ${err.message}`)
            }
            if(!err){
                callback(null, row)
            }
        })
        connection.release()
    })
}

formularioModel.getResponsesByFormId = (req, callback) => {
    pool.getConnection(function(err, connection){
        let formulario_id = req
        connection.query(`SELECT * FROM cfk_servicorp.srv_respuesta WHERE formulario_id=?`, formulario_id, (err, row) => {
            if(err){
                callback(err, null)
                log.error(`Error en getFormularios: ${err.message}`)
            }
            if(!err){
                callback(null, row)
            }
        })
        connection.release()
    })
}

formularioModel.getQuestionsByFormId = (req, callback) => {
    pool.getConnection(function(err, connection){
        let formulario_id = req
        connection.query(`select glosa, respuesta, respuestas.id from srv_pregunta 
        inner join (SELECT * FROM cfk_servicorp.srv_respuesta WHERE formulario_id=?) as respuestas on srv_pregunta.id=respuestas.pregunta_id;`, formulario_id, (err, row) => {
            if(err){
                log.error(`Error en getQuestionsByFormId: ${err.message}`)
                callback(err, null)
            }
            if(!err){
                callback(null, row)
            }
        })
        connection.release()
    })
}

formularioModel.getQuestionsByFormTypeId = (req, callback) => {
    pool.getConnection(function(err, connection){
        let idTipoFormulario = req
        connection.query(`SELECT * FROM srv_pregunta where tipo_formulario_id=?;`, idTipoFormulario, (err, row) => {
            if(err){
                log.error(`Error en getQuestionsByFormTypeId: ${err.message}`)
                callback(err, null)
            }
            if(!err){
                callback(null, row)
            }
        })
        connection.release()
    })
}

formularioModel.getQuestionsAndResponsesByFormTypeId = (req, callback) => {
    poll.getConnection(function(err, connection) {
        let formulario_tipo_formulario_id = req
        connection.query(`select formulario_id, formulario_tipo_formulario_id as 'tipo formulario', glosa, respuesta from srv_pregunta inner join (SELECT * FROM cfk_servicorp.srv_respuesta WHERE formulario_tipo_formulario_id=?) as respuestas on srv_pregunta.id=respuestas.pregunta_id order by formulario_id;`, formulario_tipo_formulario_id, (err, row) => {
            if(err){
                log.error(`Error en getQuestionsAndResponsesByFormTypeId: ${err.message}`)
                callback(null, error)
            }
            if(!err){
                callback(null, row)
            }
        })
        connection.release()
    })
}

formularioModel.getTotalFormsByUserId = (req, callback) => {
    pool.getConnection(function(err, connection){
        let usuario_id = req
        connection.query(
            `SELECT count(*) as 'cantidad' FROM cfk_servicorp.srv_formulario WHERE usuario_id=? and tipo_formulario_id=1 
            UNION ALL SELECT count(*) FROM cfk_servicorp.srv_formulario WHERE usuario_id=? and tipo_formulario_id=2
            UNION ALL SELECT count(*) FROM cfk_servicorp.srv_formulario WHERE usuario_id=? and tipo_formulario_id=3  
            UNION ALL SELECT count(*) FROM cfk_servicorp.srv_formulario WHERE usuario_id=? and tipo_formulario_id=4 
            UNION ALL SELECT count(*) FROM cfk_servicorp.srv_formulario WHERE usuario_id=? and tipo_formulario_id=5
            UNION ALL SELECT count(*) FROM cfk_servicorp.srv_formulario WHERE usuario_id=? and tipo_formulario_id=6
            UNION ALL SELECT count(*) FROM cfk_servicorp.srv_formulario WHERE usuario_id=? and tipo_formulario_id=7
            UNION ALL SELECT count(*) FROM cfk_servicorp.srv_formulario WHERE usuario_id=? and tipo_formulario_id=8;`, 
            [usuario_id,usuario_id,usuario_id,usuario_id,usuario_id,usuario_id,usuario_id,usuario_id], (err, row) => {
            if(err){
                log.error(`Error en getTotalFormsByUserId: ${err.message}`)
                callback(err, null)
            }
            if(!err){
                callback(null, row)
            }
        })
        connection.release()
    })
}

formularioModel.getTotalFormsByUserIdAndDate = (req, callback) => {
    pool.getConnection(function(err, connection){
        let data = req
        prueba = connection.query(`SELECT count(*) as 'cantidad' FROM cfk_servicorp.srv_formulario WHERE usuario_id=? and tipo_formulario_id=1 and (create_time BETWEEN ? AND ?)
        UNION ALL SELECT count(*) FROM cfk_servicorp.srv_formulario WHERE usuario_id=? and tipo_formulario_id=2 and (create_time BETWEEN ? AND ?)
        UNION ALL SELECT count(*) FROM cfk_servicorp.srv_formulario WHERE usuario_id=? and tipo_formulario_id=3 and (create_time BETWEEN ? AND ?)
        UNION ALL SELECT count(*) FROM cfk_servicorp.srv_formulario WHERE usuario_id=? and tipo_formulario_id=4 and (create_time BETWEEN ? AND ?)
        UNION ALL SELECT count(*) FROM cfk_servicorp.srv_formulario WHERE usuario_id=? and tipo_formulario_id=5 and (create_time BETWEEN ? AND ?)
        UNION ALL SELECT count(*) FROM cfk_servicorp.srv_formulario WHERE usuario_id=? and tipo_formulario_id=6 and (create_time BETWEEN ? AND ?)
        UNION ALL SELECT count(*) FROM cfk_servicorp.srv_formulario WHERE usuario_id=? and tipo_formulario_id=7 and (create_time BETWEEN ? AND ?)
        UNION ALL SELECT count(*) FROM cfk_servicorp.srv_formulario WHERE usuario_id=? and tipo_formulario_id=8 and (create_time BETWEEN ? AND ?);`, [
            data.usuario_id, data.fechaInicio, data.fechaFin,
            data.usuario_id, data.fechaInicio, data.fechaFin,
            data.usuario_id, data.fechaInicio, data.fechaFin,
            data.usuario_id, data.fechaInicio, data.fechaFin,
            data.usuario_id, data.fechaInicio, data.fechaFin,
            data.usuario_id, data.fechaInicio, data.fechaFin,
            data.usuario_id, data.fechaInicio, data.fechaFin,
            data.usuario_id, data.fechaInicio, data.fechaFin
        ], (err, row) => {
            if(err){
                log.error(`Error en getTotalFormsByUserId: ${err.message}`)
                callback(err, null)
            }
            if(!err){
                callback(null, row)
            }
        })
        connection.release()
    })
}

formularioModel.getTotalFormsByDate = (req, callback) => {
    let fechas = []
    let query = ''
    if(req.empresa == 'claro'){
        query = `SELECT count(*) as 'cantidad' FROM cfk_servicorp.srv_formulario WHERE tipo_formulario_id BETWEEN 1 AND 5 AND create_time BETWEEN '${req.fechas[0]}' AND '${req.fechas[1]}'`
        for(let i=1; i<req.fechas.length-1; i++){
            query = query.concat(` UNION ALL SELECT count(*) FROM cfk_servicorp.srv_formulario WHERE tipo_formulario_id BETWEEN 1 AND 5 AND create_time BETWEEN '${req.fechas[i]}' AND '${req.fechas[i+1]}'`)
        }
    }else if(req.empresa == 'entel'){
        query = `SELECT count(*) as 'cantidad' FROM cfk_servicorp.srv_formulario WHERE tipo_formulario_id BETWEEN 6 AND 8 AND create_time BETWEEN '${req.fechas[0]}' AND '${req.fechas[1]}'`
        for(let i=1; i<req.fechas.length-1; i++){
            query = query.concat(` UNION ALL SELECT count(*) FROM cfk_servicorp.srv_formulario WHERE tipo_formulario_id BETWEEN 6 AND 8 AND create_time BETWEEN '${req.fechas[i]}' AND '${req.fechas[i+1]}'`)
        }
    }
    pool.getConnection(function(err, connection){
        prueba = connection.query(query, fechas, (err, row) => {
            if(err){
                log.error(`Error en getTotalFormsByDate: ${err.message}`)
                callback(err, null)
            }
            if(!err){
                callback(null, row)
            }
        })
        connection.release()
    })
}

formularioModel.getZips = (callback) => {
    pool.getConnection(function(err, connection){
        connection.query(`SELECT * FROM cfk_servicorp.srv_img_descarga WHERE estado='Activo'`, (err, row) => {
            if(err){
                log.error(`Error en getZips: ${err.message}`)
                callback(err, null)
            }
            if(!err){
                callback(null, row)
            }
        })
        connection.release()
    })
}

formularioModel.getReporteByFormTypeId = (req, callback) => {
    let values = req
    pool.getConnection(function(err, connection){
        prueba = connection.query(`select srv_pregunta.orden, srv_formulario.id as 'id_formulario', srv_formulario.tipo_formulario_id as 'tipo_formulario', srv_usuario.username, srv_pregunta.glosa, srv_respuesta.respuesta, srv_formulario.latitud, srv_formulario.longitud, srv_formulario.create_time as 'fecha' from srv_pregunta cross join srv_respuesta on srv_pregunta.id=srv_respuesta.pregunta_id cross join srv_formulario on srv_respuesta.formulario_id=srv_formulario.id cross join srv_usuario on srv_formulario.usuario_id=srv_usuario.id where srv_formulario.create_time between ? and ? and srv_formulario.tipo_formulario_id between ? and ? order by fecha DESC, srv_formulario.id, orden`, [values.inicio, values.fin, values.dataInicio, values.dataFin], (err, row) => {
            if(err){
                log.error(`Error en getReporteByFormType: ${err.message}`)
                callback(err, null)
            }
            if(!err){
                log.debug(row)
                callback(null, row)
            }
            console.log(prueba.sql)
        })
        connection.release()
    })
}

formularioModel.getFormulariosId = (req, callback) => {
    pool.getConnection(function(err, connection){
        prueba = connection.query('SELECT srv_formulario.id FROM srv_formulario inner join srv_usuario on srv_formulario.usuario_id = srv_usuario.id WHERE tipo_formulario_id in (SELECT srv_tipo_formulario.id FROM cfk_servicorp.srv_tipo_formulario  where srv_tipo_formulario.empresa like lower(?) and nombre like lower(?)) and srv_usuario.empresa like lower(?) and (srv_formulario.create_time >= (?) and srv_formulario.create_time <= (?));', ['%'+req.empresa+'%', '%'+req.tipo_formulario+'%', '%'+req.empresa+'%', req.fechaInicio, req.fechaFin], (err, row) => {
            if(err){
                //log.error('Error en getFormulariosId', err.message)
                callback(err, null)
            }
            if(!err){
                callback(null, row)
            }
        })
        connection.release()
    })
}

formularioModel.getFormularioImgs = (req, callback) => {
    pool.getConnection(function(err, connection){
        prueba = connection.query('SELECT ruta FROM srv_imagen WHERE formulario_id=?', req, (err, row) => {
            if(err){
                log.error('Error en getFormularioImgs', err.message)
            }
            if(!err){
                callback(null, row)
            }
        })
        connection.release()
    })
}

formularioModel.editFormulario = (req, idTipoFormulario, callback) => {
    pool.getConnection(function(err, connection){
        let values = []
        if(idTipoFormulario == 1 || idTipoFormulario == 2){
            values.respuestas = [
                [req.ot_servicorp],
                [req.folio_servicio],
                [req.resp_1],
                [req.resp_2],
                [req.resp_3],
                [req.resp_4],
                [req.resp_5],
                [req.resp_6],
                [req.resp_7],
                [req.resp_8],
                [req.resp_9],
                [req.resp_10],
                [req.resp_11],
                [req.resp_12],
                [req.resp_13],
                [req.resp_14],
                [req.resp_15],
                [req.resp_16],
                [req.resp_17],
                [req.resp_18],
                [req.resp_19],
                [req.resp_20],
                [req.resp_21],
                [req.resp_22],
                [req.resp_23],
                [req.resp_24],
                [req.resp_25],
                [req.resp_26],
                [req.resp_27],
                [req.resp_28],
                [req.resp_29],
                [req.resp_30],
                [req.resp_31],
                [req.resp_32],
                [req.resp_33],
                [req.resp_34],
                [req.resp_35],
                [req.resp_36],
                [req.resp_37],
                [req.resp_38],
                [req.resp_39],
                [req.resp_40],
                [req.resp_41],
                [req.resp_42],
                [req.resp_43],
                [req.resp_44],
                [req.resp_45],
                [req.resp_46],
                [req.resp_47],
                [req.resp_48],
                [req.resp_49],
                [req.resp_50],
                [req.resp_51],
                [req.resp_52],
                [req.resp_53],
                [req.resp_54],
                [req.resp_55],
                [req.resp_56],
                [req.resp_57],
                [req.resp_58],
                [req.resp_59],
                [req.resp_60],
                [req.resp_61],
                [req.resp_62],
                [req.resp_63],
                [req.resp_64],
                [req.resp_65],
                [req.resp_66],
                [req.resp_67],
                [req.resp_68],
                [req.resp_69],
                [req.resp_70],
                [req.resp_71],
                [req.resp_72],
                [req.resp_73],
                [req.resp_74],
                [req.resp_75],
                [req.resp_76],
                [req.resp_77],
                [req.resp_78],
                [req.resp_79],
                [req.resp_80],
                [req.resp_81],
                [req.resp_82],
                [req.resp_83],
                [req.resp_84],
                [req.resp_85],
                [req.resp_86],
                [req.resp_87],
                [req.resp_88],
                [req.resp_89],
            ]
            values.ids = [
                [req.id_ot_servicorp],
                [req.id_folio_servicio],
                [req.id_resp_1],
                [req.id_resp_2],
                [req.id_resp_3],
                [req.id_resp_4],
                [req.id_resp_5],
                [req.id_resp_6],
                [req.id_resp_7],
                [req.id_resp_8],
                [req.id_resp_9],
                [req.id_resp_10],
                [req.id_resp_11],
                [req.id_resp_12],
                [req.id_resp_13],
                [req.id_resp_14],
                [req.id_resp_15],
                [req.id_resp_16],
                [req.id_resp_17],
                [req.id_resp_18],
                [req.id_resp_19],
                [req.id_resp_20],
                [req.id_resp_21],
                [req.id_resp_22],
                [req.id_resp_23],
                [req.id_resp_24],
                [req.id_resp_25],
                [req.id_resp_26],
                [req.id_resp_27],
                [req.id_resp_28],
                [req.id_resp_29],
                [req.id_resp_30],
                [req.id_resp_31],
                [req.id_resp_32],
                [req.id_resp_33],
                [req.id_resp_34],
                [req.id_resp_35],
                [req.id_resp_36],
                [req.id_resp_37],
                [req.id_resp_38],
                [req.id_resp_39],
                [req.id_resp_40],
                [req.id_resp_41],
                [req.id_resp_42],
                [req.id_resp_43],
                [req.id_resp_44],
                [req.id_resp_45],
                [req.id_resp_46],
                [req.id_resp_47],
                [req.id_resp_48],
                [req.id_resp_49],
                [req.id_resp_50],
                [req.id_resp_51],
                [req.id_resp_52],
                [req.id_resp_53],
                [req.id_resp_54],
                [req.id_resp_55],
                [req.id_resp_56],
                [req.id_resp_57],
                [req.id_resp_58],
                [req.id_resp_59],
                [req.id_resp_60],
                [req.id_resp_61],
                [req.id_resp_62],
                [req.id_resp_63],
                [req.id_resp_64],
                [req.id_resp_65],
                [req.id_resp_66],
                [req.id_resp_67],
                [req.id_resp_68],
                [req.id_resp_69],
                [req.id_resp_70],
                [req.id_resp_71],
                [req.id_resp_72],
                [req.id_resp_73],
                [req.id_resp_74],
                [req.id_resp_75],
                [req.id_resp_76],
                [req.id_resp_77],
                [req.id_resp_78],
                [req.id_resp_79],
                [req.id_resp_80],
                [req.id_resp_81],
                [req.id_resp_82],
                [req.id_resp_83],
                [req.id_resp_84],
                [req.id_resp_85],
                [req.id_resp_86],
                [req.id_resp_87],
                [req.id_resp_88],
                [req.id_resp_89],
            ]
            connection.beginTransaction((err) => {
                if (err) { 
                    log.error(err, err.message)
                }
                let query = new Promise((resolve, reject) => {
                    connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[0], values.ids[0]], (err, result) => {
                        if (err) { 
                            return connection.rollback(() => {
                                log.error('Error al editar respuestas: ' + err.message)
                                reject(new Error('Error'))
                            })
                        }else{
                            return resolve(true)
                        }
                    })
                })
                
                query
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[1], values.ids[1]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[2], values.ids[2]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[3], values.ids[3]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[4], values.ids[4]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[5], values.ids[5]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[6], values.ids[6]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[7], values.ids[7]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[8], values.ids[8]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[9], values.ids[9]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[10], values.ids[10]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[11], values.ids[11]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[12], values.ids[12]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[13], values.ids[13]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[14], values.ids[14]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[15], values.ids[15]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[16], values.ids[16]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[17], values.ids[17]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[18], values.ids[18]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[19], values.ids[19]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[20], values.ids[20]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[21], values.ids[21]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[22], values.ids[22]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[23], values.ids[23]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[24], values.ids[24]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[25], values.ids[25]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[26], values.ids[26]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[27], values.ids[27]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[28], values.ids[28]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[29], values.ids[29]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[30], values.ids[30]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[31], values.ids[31]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[32], values.ids[32]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[33], values.ids[33]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[34], values.ids[34]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[35], values.ids[35]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[36], values.ids[36]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[37], values.ids[37]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[38], values.ids[38]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[39], values.ids[39]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[40], values.ids[40]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[41], values.ids[41]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[42], values.ids[42]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[43], values.ids[43]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[44], values.ids[44]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[45], values.ids[45]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[46], values.ids[46]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[47], values.ids[47]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[48], values.ids[48]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[49], values.ids[49]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[50], values.ids[50]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[51], values.ids[51]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[52], values.ids[52]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[53], values.ids[53]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[54], values.ids[54]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[55], values.ids[55]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[56], values.ids[56]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[57], values.ids[57]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[58], values.ids[58]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[59], values.ids[59]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[60], values.ids[60]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[61], values.ids[61]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[62], values.ids[62]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[63], values.ids[63]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[64], values.ids[64]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[65], values.ids[65]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[66], values.ids[66]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[67], values.ids[67]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[68], values.ids[68]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[69], values.ids[69]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[70], values.ids[70]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[71], values.ids[71]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[72], values.ids[72]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[73], values.ids[73]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[74], values.ids[74]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[75], values.ids[75]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[76], values.ids[76]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[77], values.ids[77]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[78], values.ids[78]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[79], values.ids[79]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[80], values.ids[80]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[81], values.ids[81]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[82], values.ids[82]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[83], values.ids[83]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[84], values.ids[84]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[85], values.ids[85]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[86], values.ids[86]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[87], values.ids[87]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[88], values.ids[88]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[89], values.ids[89]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    connection.commit((err) => {
                        if (err) {
                            return connection.rollback(() =>  {
                                throw err
                            })
                        }
                        log.info('Transaction Complete.')
                        callback(null)
                    })
                })
                .catch(err => {
                    log.error(err)
                    callback(err, null)
                })
            })
        }else if(idTipoFormulario == 3 || idTipoFormulario == 4){
            values.respuestas = [
                [req.ot_servicorp],
                [req.folio_servicio],
                [req.resp_1],
                [req.resp_2],
                [req.resp_3],
                [req.resp_4],
                [req.resp_5],
                [req.resp_6],
                [req.resp_7],
                [req.resp_8],
                [req.resp_9],
                [req.resp_10],
                [req.resp_11],
                [req.resp_12],
                [req.resp_13],
                [req.resp_14],
                [req.resp_15],
                [req.resp_16],
                [req.resp_17],
                [req.resp_18],
                [req.resp_19],
                [req.resp_20],
                [req.resp_21],
                [req.resp_22],
                [req.resp_23],
                [req.resp_24],
                [req.resp_25],
                [req.resp_26],
                [req.resp_27],
                [req.resp_28],
                [req.resp_29],
                [req.resp_30],
                [req.resp_31],
                [req.resp_32],
                [req.resp_33],
                [req.resp_34],
                [req.resp_35],
                [req.resp_36],
                [req.resp_37],
                [req.resp_38],
                [req.resp_39],
                [req.resp_40],
                [req.resp_41],
                [req.resp_42],
                [req.resp_43],
                [req.resp_44],
                [req.resp_45],
                [req.resp_46],
                [req.resp_47],
                [req.resp_48],
                [req.resp_49],
                [req.resp_50],
                [req.resp_51],
                [req.resp_52],
                [req.resp_53],
                [req.resp_54],
                [req.resp_55],
                [req.resp_56],
                [req.resp_57],
                [req.resp_58],
                [req.resp_59],
                [req.resp_60],
                [req.resp_61],
                [req.resp_62],
                [req.resp_63],
                [req.resp_64],
                [req.resp_65],
                [req.resp_66],
                [req.resp_67],
                [req.resp_68],
                [req.resp_69],
                [req.resp_70],
                [req.resp_71],
                [req.resp_72],
                [req.resp_73],
                [req.resp_74],
                [req.resp_75],
                [req.resp_76],
                [req.resp_77],
                [req.resp_78],
                [req.resp_79],
                [req.resp_80],
                [req.resp_81],
                [req.resp_82],
                [req.resp_83],
                [req.resp_84],
                [req.resp_85],
                [req.resp_86]
            ]
            values.ids = [
                [req.id_ot_servicorp],
                [req.id_folio_servicio],
                [req.id_resp_1],
                [req.id_resp_2],
                [req.id_resp_3],
                [req.id_resp_4],
                [req.id_resp_5],
                [req.id_resp_6],
                [req.id_resp_7],
                [req.id_resp_8],
                [req.id_resp_9],
                [req.id_resp_10],
                [req.id_resp_11],
                [req.id_resp_12],
                [req.id_resp_13],
                [req.id_resp_14],
                [req.id_resp_15],
                [req.id_resp_16],
                [req.id_resp_17],
                [req.id_resp_18],
                [req.id_resp_19],
                [req.id_resp_20],
                [req.id_resp_21],
                [req.id_resp_22],
                [req.id_resp_23],
                [req.id_resp_24],
                [req.id_resp_25],
                [req.id_resp_26],
                [req.id_resp_27],
                [req.id_resp_28],
                [req.id_resp_29],
                [req.id_resp_30],
                [req.id_resp_31],
                [req.id_resp_32],
                [req.id_resp_33],
                [req.id_resp_34],
                [req.id_resp_35],
                [req.id_resp_36],
                [req.id_resp_37],
                [req.id_resp_38],
                [req.id_resp_39],
                [req.id_resp_40],
                [req.id_resp_41],
                [req.id_resp_42],
                [req.id_resp_43],
                [req.id_resp_44],
                [req.id_resp_45],
                [req.id_resp_46],
                [req.id_resp_47],
                [req.id_resp_48],
                [req.id_resp_49],
                [req.id_resp_50],
                [req.id_resp_51],
                [req.id_resp_52],
                [req.id_resp_53],
                [req.id_resp_54],
                [req.id_resp_55],
                [req.id_resp_56],
                [req.id_resp_57],
                [req.id_resp_58],
                [req.id_resp_59],
                [req.id_resp_60],
                [req.id_resp_61],
                [req.id_resp_62],
                [req.id_resp_63],
                [req.id_resp_64],
                [req.id_resp_65],
                [req.id_resp_66],
                [req.id_resp_67],
                [req.id_resp_68],
                [req.id_resp_69],
                [req.id_resp_70],
                [req.id_resp_71],
                [req.id_resp_72],
                [req.id_resp_73],
                [req.id_resp_74],
                [req.id_resp_75],
                [req.id_resp_76],
                [req.id_resp_77],
                [req.id_resp_78],
                [req.id_resp_79],
                [req.id_resp_80],
                [req.id_resp_81],
                [req.id_resp_82],
                [req.id_resp_83],
                [req.id_resp_84],
                [req.id_resp_85],
                [req.id_resp_86]
            ]
            connection.beginTransaction((err) => {
                if (err) { 
                    log.error(err, err.message)
                }
                let query = new Promise((resolve, reject) => {
                    connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[0], values.ids[0]], (err, result) => {
                        if (err) { 
                            return connection.rollback(() => {
                                log.error('Error al editar respuestas: ' + err.message)
                                reject(new Error('Error'))
                            })
                        }else{
                            return resolve(true)
                        }
                    })
                })
                
                query
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[1], values.ids[1]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[2], values.ids[2]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[3], values.ids[3]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[4], values.ids[4]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[5], values.ids[5]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[6], values.ids[6]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[7], values.ids[7]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[8], values.ids[8]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[9], values.ids[9]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[10], values.ids[10]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[11], values.ids[11]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[12], values.ids[12]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[13], values.ids[13]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[14], values.ids[14]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[15], values.ids[15]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[16], values.ids[16]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[17], values.ids[17]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[18], values.ids[18]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[19], values.ids[19]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[20], values.ids[20]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[21], values.ids[21]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[22], values.ids[22]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[23], values.ids[23]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[24], values.ids[24]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[25], values.ids[25]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[26], values.ids[26]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[27], values.ids[27]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[28], values.ids[28]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[29], values.ids[29]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[30], values.ids[30]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[31], values.ids[31]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[32], values.ids[32]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[33], values.ids[33]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[34], values.ids[34]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[35], values.ids[35]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[36], values.ids[36]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[37], values.ids[37]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[38], values.ids[38]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[39], values.ids[39]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[40], values.ids[40]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[41], values.ids[41]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[42], values.ids[42]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[43], values.ids[43]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[44], values.ids[44]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[45], values.ids[45]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[46], values.ids[46]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[47], values.ids[47]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[48], values.ids[48]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[49], values.ids[49]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[50], values.ids[50]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[51], values.ids[51]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[52], values.ids[52]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[53], values.ids[53]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[54], values.ids[54]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[55], values.ids[55]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[56], values.ids[56]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[57], values.ids[57]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[58], values.ids[58]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[59], values.ids[59]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[60], values.ids[60]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[61], values.ids[61]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[62], values.ids[62]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[63], values.ids[63]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[64], values.ids[64]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[65], values.ids[65]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[66], values.ids[66]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[67], values.ids[67]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[68], values.ids[68]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[69], values.ids[69]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[70], values.ids[70]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[71], values.ids[71]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[72], values.ids[72]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[73], values.ids[73]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[74], values.ids[74]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[75], values.ids[75]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[76], values.ids[76]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[77], values.ids[77]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[78], values.ids[78]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[79], values.ids[79]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[80], values.ids[80]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[81], values.ids[81]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[82], values.ids[82]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[83], values.ids[83]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[84], values.ids[84]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[85], values.ids[85]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[86], values.ids[86]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    connection.commit((err) => {
                        if (err) {
                            return connection.rollback(() =>  {
                                throw err
                            })
                        }
                        log.info('Transaction Complete.')
                        callback(null)
                    })
                })
                .catch(err => {
                    log.error(err)
                    callback(err, null)
                })
            })
        }else if(idTipoFormulario == 5){
            values.respuestas = [
                [req.ot_servicorp],
                [req.folio_servicio],
                [req.resp_1],
                [req.resp_2],
                [req.resp_3],
                [req.resp_4],
                [req.resp_5],
                [req.resp_6],
                [req.resp_7],
                [req.resp_8]
            ]
            values.ids = [
                [req.id_ot_servicorp],
                [req.id_folio_servicio],
                [req.id_resp_1],
                [req.id_resp_2],
                [req.id_resp_3],
                [req.id_resp_4],
                [req.id_resp_5],
                [req.id_resp_6],
                [req.id_resp_7],
                [req.id_resp_8]
            ]
            connection.beginTransaction((err) => {
                if (err) { 
                    log.error(err, err.message)
                }
                let query = new Promise((resolve, reject) => {
                    connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[0], values.ids[0]], (err, result) => {
                        if (err) { 
                            return connection.rollback(() => {
                                log.error('Error al editar respuestas: ' + err.message)
                                reject(new Error('Error'))
                            })
                        }else{
                            return resolve(true)
                        }
                    })
                })
                
                query
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[1], values.ids[1]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[2], values.ids[2]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[3], values.ids[3]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[4], values.ids[4]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[5], values.ids[5]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[6], values.ids[6]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[7], values.ids[7]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[8], values.ids[8]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[9], values.ids[9]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    connection.commit((err) => {
                        if (err) {
                            return connection.rollback(() =>  {
                                throw err
                            })
                        }
                        log.info('Transaction Complete.')
                        callback(null)
                    })
                })
                .catch(err => {
                    log.error(err)
                    callback(err, null)
                })
            })
        }else if(idTipoFormulario == 6){
            values.respuestas = [
                [req.ot_servicorp],
                [req.folio_servicio],
                [req.resp_1],
                [req.resp_2],
                [req.resp_3],
                [req.resp_4],
                [req.resp_5],
                [req.resp_6],
                [req.resp_7],
                [req.resp_8],
                [req.resp_9],
                [req.resp_10],
                [req.resp_11],
                [req.resp_12],
                [req.resp_13],
                [req.resp_14],
                [req.resp_15],
                [req.resp_16],
                [req.resp_17],
                [req.resp_18],
                [req.resp_19],
                [req.resp_20],
                [req.resp_21],
                [req.resp_22],
                [req.resp_23],
                [req.resp_24],
                [req.resp_25],
                [req.resp_26],
                [req.resp_27],
                [req.resp_28],
                [req.resp_29],
                [req.resp_30],
                [req.resp_31],
                [req.resp_32],
                [req.resp_33],
                [req.resp_34],
                [req.resp_35],
                [req.resp_36],
                [req.resp_37],
                [req.resp_38],
                [req.resp_39],
                [req.resp_40],
                [req.resp_41],
                [req.resp_42],
                [req.resp_43],
                [req.resp_44],
                [req.resp_45],
                [req.resp_46],
                [req.resp_47],
                [req.resp_48],
                [req.resp_49],
                [req.resp_50],
                [req.resp_51],
                [req.resp_52],
                [req.resp_53],
                [req.resp_54],
                [req.resp_55],
                [req.resp_56],
                [req.resp_57],
                [req.resp_58],
                [req.resp_59],
                [req.resp_60],
                [req.resp_61],
                [req.resp_62],
                [req.resp_63],
                [req.resp_64],
                [req.resp_65],
                [req.resp_66],
                [req.resp_67],
                [req.resp_68],
                [req.resp_69],
                [req.resp_70],
                [req.resp_71],
                [req.resp_72],
                [req.resp_73],
                [req.resp_74],
                [req.resp_75],
                [req.resp_76],
                [req.resp_77],
                [req.resp_78],
                [req.resp_79],
                [req.resp_80],
                [req.resp_81],
                [req.resp_82],
                [req.resp_83]
            ]
            values.ids = [
                [req.id_ot_servicorp],
                [req.id_folio_servicio],
                [req.id_resp_1],
                [req.id_resp_2],
                [req.id_resp_3],
                [req.id_resp_4],
                [req.id_resp_5],
                [req.id_resp_6],
                [req.id_resp_7],
                [req.id_resp_8],
                [req.id_resp_9],
                [req.id_resp_10],
                [req.id_resp_11],
                [req.id_resp_12],
                [req.id_resp_13],
                [req.id_resp_14],
                [req.id_resp_15],
                [req.id_resp_16],
                [req.id_resp_17],
                [req.id_resp_18],
                [req.id_resp_19],
                [req.id_resp_20],
                [req.id_resp_21],
                [req.id_resp_22],
                [req.id_resp_23],
                [req.id_resp_24],
                [req.id_resp_25],
                [req.id_resp_26],
                [req.id_resp_27],
                [req.id_resp_28],
                [req.id_resp_29],
                [req.id_resp_30],
                [req.id_resp_31],
                [req.id_resp_32],
                [req.id_resp_33],
                [req.id_resp_34],
                [req.id_resp_35],
                [req.id_resp_36],
                [req.id_resp_37],
                [req.id_resp_38],
                [req.id_resp_39],
                [req.id_resp_40],
                [req.id_resp_41],
                [req.id_resp_42],
                [req.id_resp_43],
                [req.id_resp_44],
                [req.id_resp_45],
                [req.id_resp_46],
                [req.id_resp_47],
                [req.id_resp_48],
                [req.id_resp_49],
                [req.id_resp_50],
                [req.id_resp_51],
                [req.id_resp_52],
                [req.id_resp_53],
                [req.id_resp_54],
                [req.id_resp_55],
                [req.id_resp_56],
                [req.id_resp_57],
                [req.id_resp_58],
                [req.id_resp_59],
                [req.id_resp_60],
                [req.id_resp_61],
                [req.id_resp_62],
                [req.id_resp_63],
                [req.id_resp_64],
                [req.id_resp_65],
                [req.id_resp_66],
                [req.id_resp_67],
                [req.id_resp_68],
                [req.id_resp_69],
                [req.id_resp_70],
                [req.id_resp_71],
                [req.id_resp_72],
                [req.id_resp_73],
                [req.id_resp_74],
                [req.id_resp_75],
                [req.id_resp_76],
                [req.id_resp_77],
                [req.id_resp_78],
                [req.id_resp_79],
                [req.id_resp_80],
                [req.id_resp_81],
                [req.id_resp_82],
                [req.id_resp_83]
            ]
            connection.beginTransaction((err) => {
                if (err) { 
                    log.error(err, err.message)
                }
                let query = new Promise((resolve, reject) => {
                    connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[0], values.ids[0]], (err, result) => {
                        if (err) { 
                            return connection.rollback(() => {
                                log.error('Error al editar respuestas: ' + err.message)
                                reject(new Error('Error'))
                            })
                        }else{
                            return resolve(true)
                        }
                    })
                })
                
                query
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[1], values.ids[1]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[2], values.ids[2]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[3], values.ids[3]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[4], values.ids[4]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[5], values.ids[5]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[6], values.ids[6]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[7], values.ids[7]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[8], values.ids[8]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[9], values.ids[9]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[10], values.ids[10]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[11], values.ids[11]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[12], values.ids[12]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[13], values.ids[13]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[14], values.ids[14]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[15], values.ids[15]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[16], values.ids[16]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[17], values.ids[17]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[18], values.ids[18]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[19], values.ids[19]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[20], values.ids[20]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[21], values.ids[21]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[22], values.ids[22]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[23], values.ids[23]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[24], values.ids[24]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[25], values.ids[25]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[26], values.ids[26]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[27], values.ids[27]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[28], values.ids[28]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[29], values.ids[29]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[30], values.ids[30]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[31], values.ids[31]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[32], values.ids[32]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[33], values.ids[33]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[34], values.ids[34]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[35], values.ids[35]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[36], values.ids[36]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[37], values.ids[37]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[38], values.ids[38]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[39], values.ids[39]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[40], values.ids[40]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[41], values.ids[41]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[42], values.ids[42]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[43], values.ids[43]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[44], values.ids[44]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[45], values.ids[45]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[46], values.ids[46]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[47], values.ids[47]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[48], values.ids[48]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[49], values.ids[49]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[50], values.ids[50]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[51], values.ids[51]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[52], values.ids[52]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[53], values.ids[53]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[54], values.ids[54]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[55], values.ids[55]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[56], values.ids[56]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[57], values.ids[57]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[58], values.ids[58]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[59], values.ids[59]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[60], values.ids[60]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[61], values.ids[61]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[62], values.ids[62]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[63], values.ids[63]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[64], values.ids[64]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[65], values.ids[65]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[66], values.ids[66]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[67], values.ids[67]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[68], values.ids[68]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[69], values.ids[69]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[70], values.ids[70]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[71], values.ids[71]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[72], values.ids[72]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[73], values.ids[73]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[74], values.ids[74]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[75], values.ids[75]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[76], values.ids[76]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[77], values.ids[77]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[78], values.ids[78]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[79], values.ids[79]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[80], values.ids[80]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[81], values.ids[81]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[82], values.ids[82]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    return new Promise( (resolve, reject) => {
                        connection.query("UPDATE srv_respuesta SET respuesta=? WHERE id=?", [values.respuestas[83], values.ids[83]], (err, result) => {
                            if (err) { 
                                return connection.rollback(() => {
                                    log.error('Error al editar respuestas: ' + err.message)
                                    reject(new Error('Error'))
                                })
                            }else{
                                return resolve(true)
                            }
                        })
                    })
                })
                .then((resolved, rejected) => {
                    connection.commit((err) => {
                        if (err) {
                            return connection.rollback(() =>  {
                                throw err
                            })
                        }
                        log.info('Transaction Complete.')
                        callback(null)
                    })
                })
                .catch(err => {
                    log.error(err)
                    callback(err, null)
                })
            })
        }
        connection.release()
    })
}

module.exports = formularioModel