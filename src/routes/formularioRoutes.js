const formulario = require('../models/formulario')
const global = require('../middlewares/auth')
const moment = require('moment')
const log = require('../logging-system/logger').Logger
const excel = require('exceljs')
moment().tz("America/Santiago").format()

module.exports = (app) => {
    let statusError = 500

    //***************************Formularios Claro***************************

    // Formulario de mantencion hfc id=3
    app.post('/formulario/claro/mantencion/hfc', (req, res) => {
        log.info('post: /formulario/claro/mantencion/hfc')
        log.info('req: ' + JSON.stringify(req.body))
        
        const respuestas = {
            fecha: Math.floor(Date.now() / 1000),
            ot_servicorp: req.body.ot_servicorp,
            folio_servicio: req.body.folio_servicio,
            resp_1: req.body.resp_1,
            resp_2: req.body.resp_2,
            resp_3: req.body.resp_3,
            resp_4: req.body.resp_4,
            resp_5: req.body.resp_5,
            resp_6: req.body.resp_6,
            resp_7: req.body.resp_7,
            resp_8: req.body.resp_8,
            resp_9: req.body.resp_9,
            resp_10: req.body.resp_10,
            resp_11: req.body.resp_11,
            resp_12: req.body.resp_12,
            resp_13: req.body.resp_13,
            resp_14: req.body.resp_14,
            resp_15: req.body.resp_15,
            resp_16: req.body.resp_16,
            resp_17: req.body.resp_17,
            resp_18: req.body.resp_18,
            resp_19: req.body.resp_19,
            resp_20: req.body.resp_20,
            resp_21: req.body.resp_21,
            resp_22: req.body.resp_22,
            resp_23: req.body.resp_23,
            resp_24: req.body.resp_24,
            resp_25: req.body.resp_25,
            resp_26: req.body.resp_26,
            resp_27: req.body.resp_27,
            resp_28: req.body.resp_28,
            resp_29: req.body.resp_29,
            resp_30: req.body.resp_30,
            resp_31: req.body.resp_31,
            resp_32: req.body.resp_32,
            resp_33: req.body.resp_33,
            resp_34: req.body.resp_34,
            resp_35: req.body.resp_35,
            resp_36: req.body.resp_36,
            resp_37: req.body.resp_37,
            resp_38: req.body.resp_38,
            resp_39: req.body.resp_39,
            resp_40: req.body.resp_40,
            resp_41: req.body.resp_41,
            resp_42: req.body.resp_42,
            resp_43: req.body.resp_43,
            resp_44: req.body.resp_44,
            resp_45: req.body.resp_45,
            resp_46: req.body.resp_46,
            resp_47: req.body.resp_47,
            resp_48: req.body.resp_48,
            resp_49: req.body.resp_49,
            resp_50: req.body.resp_50,
            resp_51: req.body.resp_51,
            resp_52: req.body.resp_52,
            resp_53: req.body.resp_53,
            resp_54: req.body.resp_54,
            resp_55: req.body.resp_55,
            resp_56: req.body.resp_56,
            resp_57: req.body.resp_57,
            resp_58: req.body.resp_58,
            resp_59: req.body.resp_59,
            resp_60: req.body.resp_60,
            resp_61: req.body.resp_61,
            resp_62: req.body.resp_62,
            resp_63: req.body.resp_63,
            resp_64: req.body.resp_64,
            resp_65: req.body.resp_65,
            resp_66: req.body.resp_66,
            resp_67: req.body.resp_67,
            resp_68: req.body.resp_68,
            resp_69: req.body.resp_69,
            resp_70: req.body.resp_70,
            resp_71: req.body.resp_71,
            resp_72: req.body.resp_72,
            resp_73: req.body.resp_73,
            resp_74: req.body.resp_74,
            resp_75: req.body.resp_75,
            resp_76: req.body.resp_76,
            resp_77: req.body.resp_77,
            resp_78: req.body.resp_78,
            resp_79: req.body.resp_79,
            resp_80: req.body.resp_80,
            resp_81: req.body.resp_81,
            resp_82: req.body.resp_82,
            resp_83: req.body.resp_83,
            resp_84: req.body.resp_84,
            resp_85: req.body.resp_85,
            resp_86: req.body.resp_86,
            resp_87: req.body.resp_87,
            resp_88: req.body.resp_88,
            resp_89: req.body.resp_89,
            resp_90: req.body.resp_90,
            resp_91: req.body.resp_91,
            resp_92: req.body.resp_92,
            resp_93: req.body.resp_93,
            resp_94: req.body.resp_94,
            resp_95: req.body.resp_95,
            resp_96: req.body.resp_96,
            resp_97: req.body.resp_97,
            resp_98: req.body.resp_98,
            resp_99: req.body.resp_99,
            resp_100: req.body.resp_100,
            resp_101: req.body.resp_101,
            resp_102: req.body.resp_102,
            resp_103: req.body.resp_103,
            resp_104: req.body.resp_104,
            resp_105: req.body.resp_105,
            resp_106: req.body.resp_106,
            resp_107: req.body.resp_107,
            resp_108: req.body.resp_108,
            cod_decodificador: req.body.cod_decodificador,
            imagen_1: req.body.imagen_1,
            imagen_2: req.body.imagen_2,
            imagen_3: req.body.imagen_3,
            imagen_4: req.body.imagen_4,
            imagen_5: req.body.imagen_5,
            imagen_6: req.body.imagen_6,
            imagen_7: req.body.imagen_7,
            imagen_8: req.body.imagen_8,
            imagen_9: req.body.imagen_9,
            imagen_10: req.body.imagen_10,
            latitud: req.body.latitud,
            longitud: req.body.longitud,
            tipo_formulario_id: 3,
            //usuario_id: parseInt(req.body.usuario_id)
            usuario_id: null
        }
        let auth = new Promise ( (resolve, reject) => {
            global.validateToken(req.body.token, (response, err) => {
                if(!err){
                    log.info('usuario autorizado')
                    respuestas.usuario_id = response.userId
                    return resolve(true)
                }else{
                    statusError = 401
                    log.error('Token Inválido')
                    reject(new Error('Token inválido'))
                }
            })
        })

        auth
            // creamos el formulario, guardamos respuestas e imágenes
            .then( (resolved, rejected) => {
                return new Promise( (resolve, reject) => {
                    formulario.createForm(respuestas, (err, res) => {
                        if(err){
                            log.error(err)
                        }
                        return (err) ? reject(new Error('No se ha podido crear un nuevo formulario')) : resolve(res)
                    })
                })
            })

            // respondemos al cliente
            .then( (resolved, rejected) => {
                res.status(200).json({
                    success: true,
                    message: `Formulario guardado con éxito`
                })
                log.info('res: Formulario guardado con éxito')
            })

            // manejamos algún posible error
            .catch( (err) => {
                log.error(err)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })

    // Formulario de mantencion dth id=4
    app.post('/formulario/claro/mantencion/dth', (req, res) => {
        log.info('post: /formulario/claro/mantencion/dth')
        log.info('req: ' + JSON.stringify(req.body))
        
        const respuestas = {
            fecha: Math.floor(Date.now() / 1000),
            ot_servicorp: req.body.ot_servicorp,
            folio_servicio: req.body.folio_servicio,
            resp_1: req.body.resp_1,
            resp_2: req.body.resp_2,
            resp_3: req.body.resp_3,
            resp_4: req.body.resp_4,
            resp_5: req.body.resp_5,
            resp_6: req.body.resp_6,
            resp_7: req.body.resp_7,
            resp_8: req.body.resp_8,
            resp_9: req.body.resp_9,
            resp_10: req.body.resp_10,
            resp_11: req.body.resp_11,
            resp_12: req.body.resp_12,
            resp_13: req.body.resp_13,
            resp_14: req.body.resp_14,
            resp_15: req.body.resp_15,
            resp_16: req.body.resp_16,
            resp_17: req.body.resp_17,
            resp_18: req.body.resp_18,
            resp_19: req.body.resp_19,
            resp_20: req.body.resp_20,
            resp_21: req.body.resp_21,
            resp_22: req.body.resp_22,
            resp_23: req.body.resp_23,
            resp_24: req.body.resp_24,
            resp_25: req.body.resp_25,
            resp_26: req.body.resp_26,
            resp_27: req.body.resp_27,
            resp_28: req.body.resp_28,
            resp_29: req.body.resp_29,
            resp_30: req.body.resp_30,
            resp_31: req.body.resp_31,
            resp_32: req.body.resp_32,
            resp_33: req.body.resp_33,
            resp_34: req.body.resp_34,
            resp_35: req.body.resp_35,
            resp_36: req.body.resp_36,
            resp_37: req.body.resp_37,
            resp_38: req.body.resp_38,
            resp_39: req.body.resp_39,
            resp_40: req.body.resp_40,
            resp_41: req.body.resp_41,
            resp_42: req.body.resp_42,
            resp_43: req.body.resp_43,
            resp_44: req.body.resp_44,
            resp_45: req.body.resp_45,
            resp_46: req.body.resp_46,
            resp_47: req.body.resp_47,
            resp_48: req.body.resp_48,
            resp_49: req.body.resp_49,
            resp_50: req.body.resp_50,
            resp_51: req.body.resp_51,
            resp_52: req.body.resp_52,
            resp_53: req.body.resp_53,
            resp_54: req.body.resp_54,
            resp_55: req.body.resp_55,
            resp_56: req.body.resp_56,
            resp_57: req.body.resp_57,
            resp_58: req.body.resp_58,
            resp_59: req.body.resp_59,
            resp_60: req.body.resp_60,
            resp_61: req.body.resp_61,
            resp_62: req.body.resp_62,
            resp_63: req.body.resp_63,
            resp_64: req.body.resp_64,
            resp_65: req.body.resp_65,
            resp_66: req.body.resp_66,
            resp_67: req.body.resp_67,
            resp_68: req.body.resp_68,
            resp_69: req.body.resp_69,
            resp_70: req.body.resp_70,
            resp_71: req.body.resp_71,
            resp_72: req.body.resp_72,
            resp_73: req.body.resp_73,
            resp_74: req.body.resp_74,
            resp_75: req.body.resp_75,
            resp_76: req.body.resp_76,
            resp_77: req.body.resp_77,
            resp_78: req.body.resp_78,
            resp_79: req.body.resp_79,
            resp_80: req.body.resp_80,
            resp_81: req.body.resp_81,
            resp_82: req.body.resp_82,
            resp_83: req.body.resp_83,
            resp_84: req.body.resp_84,
            resp_85: req.body.resp_85,
            resp_86: req.body.resp_86,
            resp_87: req.body.resp_87,
            resp_88: req.body.resp_88,
            resp_89: req.body.resp_89,
            resp_90: req.body.resp_90,
            resp_91: req.body.resp_91,
            resp_92: req.body.resp_92,
            resp_93: req.body.resp_93,
            resp_94: req.body.resp_94,
            resp_95: req.body.resp_95,
            resp_96: req.body.resp_96,
            resp_97: req.body.resp_97,
            resp_98: req.body.resp_98,
            resp_99: req.body.resp_99,
            resp_100: req.body.resp_100,
            resp_101: req.body.resp_101,
            resp_102: req.body.resp_102,
            resp_103: req.body.resp_103,
            resp_104: req.body.resp_104,
            resp_105: req.body.resp_105,
            resp_106: req.body.resp_106,
            resp_107: req.body.resp_107,
            resp_108: req.body.resp_108,
            cod_decodificador: req.body.cod_decodificador,
            imagen_1: req.body.imagen_1,
            imagen_2: req.body.imagen_2,
            imagen_3: req.body.imagen_3,
            imagen_4: req.body.imagen_4,
            imagen_5: req.body.imagen_5,
            imagen_6: req.body.imagen_6,
            imagen_7: req.body.imagen_7,
            imagen_8: req.body.imagen_8,
            imagen_9: req.body.imagen_9,
            imagen_10: req.body.imagen_10,
            latitud: req.body.latitud,
            longitud: req.body.longitud,
            tipo_formulario_id: 4,
            usuario_id: null
        }
        let auth = new Promise ( (resolve, reject) => {
            global.validateToken(req.body.token, (response, err) => {
                if(!err){
                    log.info('usuario autorizado')
                    respuestas.usuario_id = response.userId
                    return resolve(true)
                }else{
                    statusError = 401
                    log.error('Toke Inválido')
                    reject(new Error('Token inválido'))
                }
            })
        })

        auth
            // creamos el formulario, guardamos respuestas e imágenes
            .then( (resolved, rejected) => {
                return new Promise( (resolve, reject) => {
                    formulario.createForm(respuestas, (err, res) => {
                        if(err){
                            log.error(err)
                        }
                        return (err) ? reject(new Error('No se ha podido crear un nuevo formulario')) : resolve(res)
                    })
                })
            })

            // respondemos al cliente
            .then( (resolved, rejected) => {
                res.status(200).json({
                    success: true,
                    message: `Formulario guardado con éxito`
                })
                log.info('res: Formulario guardado con éxito')
            })

            // manejamos algún posible error
            .catch( (err) => {
                log.error(err)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })

    // Formulario de instalacion hfc id=1
    app.post('/formulario/claro/instalacion/hfc', (req, res) => {
        log.info('post: /formulario/claro/instalacion/hfc')
        log.info('req: ' + JSON.stringify(req.body))
        
        const respuestas = {
            fecha: Math.floor(Date.now() / 1000),
            ot_servicorp: req.body.ot_servicorp,
            folio_servicio: req.body.folio_servicio,
            resp_1: req.body.resp_1,
            resp_2: req.body.resp_2,
            resp_3: req.body.resp_3,
            resp_4: req.body.resp_4,
            resp_5: req.body.resp_5,
            resp_6: req.body.resp_6,
            resp_7: req.body.resp_7,
            resp_8: req.body.resp_8,
            resp_9: req.body.resp_9,
            resp_10: req.body.resp_10,
            resp_11: req.body.resp_11,
            resp_12: req.body.resp_12,
            resp_13: req.body.resp_13,
            resp_14: req.body.resp_14,
            resp_15: req.body.resp_15,
            resp_16: req.body.resp_16,
            resp_17: req.body.resp_17,
            resp_18: req.body.resp_18,
            resp_19: req.body.resp_19,
            resp_20: req.body.resp_20,
            resp_21: req.body.resp_21,
            resp_22: req.body.resp_22,
            resp_23: req.body.resp_23,
            resp_24: req.body.resp_24,
            resp_25: req.body.resp_25,
            resp_26: req.body.resp_26,
            resp_27: req.body.resp_27,
            resp_28: req.body.resp_28,
            resp_29: req.body.resp_29,
            resp_30: req.body.resp_30,
            resp_31: req.body.resp_31,
            resp_32: req.body.resp_32,
            resp_33: req.body.resp_33,
            resp_34: req.body.resp_34,
            resp_35: req.body.resp_35,
            resp_36: req.body.resp_36,
            resp_37: req.body.resp_37,
            resp_38: req.body.resp_38,
            resp_39: req.body.resp_39,
            resp_40: req.body.resp_40,
            resp_41: req.body.resp_41,
            resp_42: req.body.resp_42,
            resp_43: req.body.resp_43,
            resp_44: req.body.resp_44,
            resp_45: req.body.resp_45,
            resp_46: req.body.resp_46,
            resp_47: req.body.resp_47,
            resp_48: req.body.resp_48,
            resp_49: req.body.resp_49,
            resp_50: req.body.resp_50,
            resp_51: req.body.resp_51,
            resp_52: req.body.resp_52,
            resp_53: req.body.resp_53,
            resp_54: req.body.resp_54,
            resp_55: req.body.resp_55,
            resp_56: req.body.resp_56,
            resp_57: req.body.resp_57,
            resp_58: req.body.resp_58,
            resp_59: req.body.resp_59,
            resp_60: req.body.resp_60,
            resp_61: req.body.resp_61,
            resp_62: req.body.resp_62,
            resp_63: req.body.resp_63,
            resp_64: req.body.resp_64,
            resp_65: req.body.resp_65,
            resp_66: req.body.resp_66,
            resp_67: req.body.resp_67,
            resp_68: req.body.resp_68,
            resp_69: req.body.resp_69,
            resp_70: req.body.resp_70,
            resp_71: req.body.resp_71,
            resp_72: req.body.resp_72,
            resp_73: req.body.resp_73,
            resp_74: req.body.resp_74,
            resp_75: req.body.resp_75,
            resp_76: req.body.resp_76,
            resp_77: req.body.resp_77,
            resp_78: req.body.resp_78,
            resp_79: req.body.resp_79,
            resp_80: req.body.resp_80,
            resp_81: req.body.resp_81,
            resp_82: req.body.resp_82,
            resp_83: req.body.resp_83,
            resp_84: req.body.resp_84,
            resp_85: req.body.resp_85,
            resp_86: req.body.resp_86,
            resp_87: req.body.resp_87,
            resp_88: req.body.resp_88,
            resp_89: req.body.resp_89,
            resp_90: req.body.resp_90,
            resp_91: req.body.resp_91,
            resp_92: req.body.resp_92,
            resp_93: req.body.resp_93,
            resp_94: req.body.resp_94,
            resp_95: req.body.resp_95,
            resp_96: req.body.resp_96,
            resp_97: req.body.resp_97,
            resp_98: req.body.resp_98,
            resp_99: req.body.resp_99,
            resp_100: req.body.resp_100,
            resp_101: req.body.resp_101,
            resp_102: req.body.resp_102,
            resp_103: req.body.resp_103,
            resp_104: req.body.resp_104,
            resp_105: req.body.resp_105,
            resp_106: req.body.resp_106,
            resp_107: req.body.resp_107,
            resp_108: req.body.resp_108,
            cod_decodificador: req.body.cod_decodificador,
            imagen_1: req.body.imagen_1,
            imagen_2: req.body.imagen_2,
            imagen_3: req.body.imagen_3,
            imagen_4: req.body.imagen_4,
            imagen_5: req.body.imagen_5,
            imagen_6: req.body.imagen_6,
            imagen_7: req.body.imagen_7,
            imagen_8: req.body.imagen_8,
            imagen_9: req.body.imagen_9,
            imagen_10: req.body.imagen_10,
            latitud: req.body.latitud,
            longitud: req.body.longitud,
            tipo_formulario_id: 1,
            usuario_id: null
        }
        let auth = new Promise ( (resolve, reject) => {
            global.validateToken(req.body.token, (response, err) => {
                if(!err){
                    log.info('usuario autorizado')
                    respuestas.usuario_id = response.userId
                    return resolve(true)
                }else{
                    statusError = 401
                    log.error('Token Inválido')
                    reject(new Error('Token inválido'))
                }
            })
        })

        auth
            // creamos el formulario, guardamos respuestas e imágenes
            .then( (resolved, rejected) => {
                return new Promise( (resolve, reject) => {
                    formulario.createForm(respuestas, (err, res) => {
                        if(err){
                            log.error(err)
                        }
                        return (err) ? reject(new Error('No se ha podido crear un nuevo formulario')) : resolve(res)
                    })
                })
            })

            // respondemos al cliente
            .then( (resolved, rejected) => {
                res.status(200).json({
                    success: true,
                    message: `Formulario guardado con éxito`
                })
                log.info('res: Formulario guardado con éxito')
            })

            // manejamos algún posible error
            .catch( (err) => {
                log.error(err)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })

    // Formulario de instalacion dth id=2
    app.post('/formulario/claro/instalacion/dth', (req, res) => {
        log.info('post: /formulario/claro/instalacion/dth')
        log.info('req: ' + JSON.stringify(req.body))
        
        const respuestas = {
            fecha: Math.floor(Date.now() / 1000),
            ot_servicorp: req.body.ot_servicorp,
            folio_servicio: req.body.folio_servicio,
            resp_1: req.body.resp_1,
            resp_2: req.body.resp_2,
            resp_3: req.body.resp_3,
            resp_4: req.body.resp_4,
            resp_5: req.body.resp_5,
            resp_6: req.body.resp_6,
            resp_7: req.body.resp_7,
            resp_8: req.body.resp_8,
            resp_9: req.body.resp_9,
            resp_10: req.body.resp_10,
            resp_11: req.body.resp_11,
            resp_12: req.body.resp_12,
            resp_13: req.body.resp_13,
            resp_14: req.body.resp_14,
            resp_15: req.body.resp_15,
            resp_16: req.body.resp_16,
            resp_17: req.body.resp_17,
            resp_18: req.body.resp_18,
            resp_19: req.body.resp_19,
            resp_20: req.body.resp_20,
            resp_21: req.body.resp_21,
            resp_22: req.body.resp_22,
            resp_23: req.body.resp_23,
            resp_24: req.body.resp_24,
            resp_25: req.body.resp_25,
            resp_26: req.body.resp_26,
            resp_27: req.body.resp_27,
            resp_28: req.body.resp_28,
            resp_29: req.body.resp_29,
            resp_30: req.body.resp_30,
            resp_31: req.body.resp_31,
            resp_32: req.body.resp_32,
            resp_33: req.body.resp_33,
            resp_34: req.body.resp_34,
            resp_35: req.body.resp_35,
            resp_36: req.body.resp_36,
            resp_37: req.body.resp_37,
            resp_38: req.body.resp_38,
            resp_39: req.body.resp_39,
            resp_40: req.body.resp_40,
            resp_41: req.body.resp_41,
            resp_42: req.body.resp_42,
            resp_43: req.body.resp_43,
            resp_44: req.body.resp_44,
            resp_45: req.body.resp_45,
            resp_46: req.body.resp_46,
            resp_47: req.body.resp_47,
            resp_48: req.body.resp_48,
            resp_49: req.body.resp_49,
            resp_50: req.body.resp_50,
            resp_51: req.body.resp_51,
            resp_52: req.body.resp_52,
            resp_53: req.body.resp_53,
            resp_54: req.body.resp_54,
            resp_55: req.body.resp_55,
            resp_56: req.body.resp_56,
            resp_57: req.body.resp_57,
            resp_58: req.body.resp_58,
            resp_59: req.body.resp_59,
            resp_60: req.body.resp_60,
            resp_61: req.body.resp_61,
            resp_62: req.body.resp_62,
            resp_63: req.body.resp_63,
            resp_64: req.body.resp_64,
            resp_65: req.body.resp_65,
            resp_66: req.body.resp_66,
            resp_67: req.body.resp_67,
            resp_68: req.body.resp_68,
            resp_69: req.body.resp_69,
            resp_70: req.body.resp_70,
            resp_71: req.body.resp_71,
            resp_72: req.body.resp_72,
            resp_73: req.body.resp_73,
            resp_74: req.body.resp_74,
            resp_75: req.body.resp_75,
            resp_76: req.body.resp_76,
            resp_77: req.body.resp_77,
            resp_78: req.body.resp_78,
            resp_79: req.body.resp_79,
            resp_80: req.body.resp_80,
            resp_81: req.body.resp_81,
            resp_82: req.body.resp_82,
            resp_83: req.body.resp_83,
            resp_84: req.body.resp_84,
            resp_85: req.body.resp_85,
            resp_86: req.body.resp_86,
            resp_87: req.body.resp_87,
            resp_88: req.body.resp_88,
            resp_89: req.body.resp_89,
            resp_90: req.body.resp_90,
            resp_91: req.body.resp_91,
            resp_92: req.body.resp_92,
            resp_93: req.body.resp_93,
            resp_94: req.body.resp_94,
            resp_95: req.body.resp_95,
            resp_96: req.body.resp_96,
            resp_97: req.body.resp_97,
            resp_98: req.body.resp_98,
            resp_99: req.body.resp_99,
            resp_100: req.body.resp_100,
            resp_101: req.body.resp_101,
            resp_102: req.body.resp_102,
            resp_103: req.body.resp_103,
            resp_104: req.body.resp_104,
            resp_105: req.body.resp_105,
            resp_106: req.body.resp_106,
            resp_107: req.body.resp_107,
            resp_108: req.body.resp_108,
            resp_109: req.body.resp_109,
            resp_110: req.body.resp_110,
            cod_decodificador: req.body.cod_decodificador,
            imagen_1: req.body.imagen_1,
            imagen_2: req.body.imagen_2,
            imagen_3: req.body.imagen_3,
            imagen_4: req.body.imagen_4,
            imagen_5: req.body.imagen_5,
            imagen_6: req.body.imagen_6,
            imagen_7: req.body.imagen_7,
            imagen_8: req.body.imagen_8,
            imagen_9: req.body.imagen_9,
            imagen_10: req.body.imagen_10,
            latitud: req.body.latitud,
            longitud: req.body.longitud,
            tipo_formulario_id: 2,
            usuario_id: null
        }
        let auth = new Promise ( (resolve, reject) => {
            global.validateToken(req.body.token, (response, err) => {
                if(!err){
                    log.info('usuario autorizado')
                    respuestas.usuario_id = response.userId
                    return resolve(true)
                }else{
                    statusError = 401
                    log.error('Token Inválido')
                    reject(new Error('Token inválido'))
                }
            })
        })

        auth
            // creamos el formulario, guardamos respuestas e imágenes
            .then( (resolved, rejected) => {
                return new Promise( (resolve, reject) => {
                    formulario.createForm(respuestas, (err, res) => {
                        if(err){
                            log.error(err)
                        }
                        return (err) ? reject(new Error('No se ha podido crear un nuevo formulario')) : resolve(res)
                    })
                })
            })

            // respondemos al cliente
            .then( (resolved, rejected) => {
                res.status(200).json({
                    success: true,
                    message: `Formulario guardado con éxito`
                })
                log.info('res: Formulario guardado con éxito')
            })

            // manejamos algún posible error
            .catch( (err) => {
                log.error(err)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })
    
    // Formulario de desconexion id=5
    app.post('/formulario/claro/desconexion', (req, res) => {
        log.info('post: /formulario/claro/desconexion')
        log.info('req: ' + JSON.stringify(req.body))
        
        const respuestas = {
            fecha: Math.floor(Date.now() / 1000),
            ot_servicorp: req.body.ot_servicorp,
            folio_servicio: req.body.folio_servicio,
            resp_1: req.body.resp_1,
            resp_2: req.body.resp_2,
            resp_3: req.body.resp_3,
            resp_4: req.body.resp_4,
            resp_5: req.body.resp_5,
            resp_6: req.body.resp_6,
            resp_7: req.body.resp_7,
            resp_8: req.body.resp_8,
            cod_decodificador: req.body.cod_decodificador,
            imagen_1: req.body.imagen_1,
            imagen_2: req.body.imagen_2,
            imagen_3: req.body.imagen_3,
            imagen_4: req.body.imagen_4,
            imagen_5: req.body.imagen_5,
            imagen_6: req.body.imagen_6,
            imagen_7: req.body.imagen_7,
            imagen_8: req.body.imagen_8,
            imagen_9: req.body.imagen_9,
            imagen_10: req.body.imagen_10,
            latitud: req.body.latitud,
            longitud: req.body.longitud,
            tipo_formulario_id: 5,
            usuario_id: null
        }
        let auth = new Promise ( (resolve, reject) => {
            global.validateToken(req.body.token, (response, err) => {
                if(!err){
                    log.info('usuario autorizado')
                    respuestas.usuario_id = response.userId
                    return resolve(true)
                }else{
                    statusError = 401
                    reject(new Error('Token inválido'))
                }
            })
        })

        auth
            // creamos el formulario, guardamos respuestas e imágenes
            .then( (resolved, rejected) => {
                return new Promise( (resolve, reject) => {
                    formulario.createForm(respuestas, (err, res) => {
                        if(err){
                            log.error(err)
                        }
                        return (err) ? reject(new Error('No se ha podido crear un nuevo formulario')) : resolve(res)
                    })
                })
            })

            // respondemos al cliente
            .then( (resolved, rejected) => {
                res.status(200).json({
                    success: true,
                    message: `Formulario guardado con éxito`
                })
                log.info('res: Formulario guardado con éxito')
            })

            // manejamos algún posible error
            .catch( (err) => {
                log.error(err)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })
    
    //***************************Formularios Entel***************************

    // Formulario de instalacion dth id=6
    app.post('/formulario/entel/instalacion/dth', (req, res) => {
        log.info('post: /formulario/entel/instalacion/dth')
        log.info('req: ' + JSON.stringify(req.body))
        
        const respuestas = {
            fecha: Math.floor(Date.now() / 1000),
            ot_servicorp: req.body.ot_servicorp,
            folio_servicio: req.body.folio_servicio,
            resp_1: req.body.resp_1,
            resp_2: req.body.resp_2,
            resp_3: req.body.resp_3,
            resp_4: req.body.resp_4,
            resp_5: req.body.resp_5,
            resp_6: req.body.resp_6,
            resp_7: req.body.resp_7,
            resp_8: req.body.resp_8,
            resp_9: req.body.resp_9,
            resp_10: req.body.resp_10,
            resp_11: req.body.resp_11,
            resp_12: req.body.resp_12,
            resp_13: req.body.resp_13,
            resp_14: req.body.resp_14,
            resp_15: req.body.resp_15,
            resp_16: req.body.resp_16,
            resp_17: req.body.resp_17,
            resp_18: req.body.resp_18,
            resp_19: req.body.resp_19,
            resp_20: req.body.resp_20,
            resp_21: req.body.resp_21,
            resp_22: req.body.resp_22,
            resp_23: req.body.resp_23,
            resp_24: req.body.resp_24,
            resp_25: req.body.resp_25,
            resp_26: req.body.resp_26,
            resp_27: req.body.resp_27,
            resp_28: req.body.resp_28,
            resp_29: req.body.resp_29,
            resp_30: req.body.resp_30,
            resp_31: req.body.resp_31,
            resp_32: req.body.resp_32,
            resp_33: req.body.resp_33,
            resp_34: req.body.resp_34,
            resp_35: req.body.resp_35,
            resp_36: req.body.resp_36,
            resp_37: req.body.resp_37,
            resp_38: req.body.resp_38,
            resp_39: req.body.resp_39,
            resp_40: req.body.resp_40,
            resp_41: req.body.resp_41,
            resp_42: req.body.resp_42,
            resp_43: req.body.resp_43,
            resp_44: req.body.resp_44,
            resp_45: req.body.resp_45,
            resp_46: req.body.resp_46,
            resp_47: req.body.resp_47,
            resp_48: req.body.resp_48,
            resp_49: req.body.resp_49,
            resp_50: req.body.resp_50,
            resp_51: req.body.resp_51,
            resp_52: req.body.resp_52,
            resp_53: req.body.resp_53,
            resp_54: req.body.resp_54,
            resp_55: req.body.resp_55,
            resp_56: req.body.resp_56,
            resp_57: req.body.resp_57,
            resp_58: req.body.resp_58,
            resp_59: req.body.resp_59,
            resp_60: req.body.resp_60,
            resp_61: req.body.resp_61,
            resp_62: req.body.resp_62,
            resp_63: req.body.resp_63,
            resp_64: req.body.resp_64,
            resp_65: req.body.resp_65,
            resp_66: req.body.resp_66,
            resp_67: req.body.resp_67,
            resp_68: req.body.resp_68,
            resp_69: req.body.resp_69,
            resp_70: req.body.resp_70,
            resp_71: req.body.resp_71,
            resp_72: req.body.resp_72,
            resp_73: req.body.resp_73,
            resp_74: req.body.resp_74,
            resp_75: req.body.resp_75,
            resp_76: req.body.resp_76,
            resp_77: req.body.resp_77,
            resp_78: req.body.resp_78,
            resp_79: req.body.resp_79,
            resp_80: req.body.resp_80,
            resp_81: req.body.resp_81,
            resp_82: req.body.resp_82,
            resp_83: req.body.resp_83,
            cod_decodificador: req.body.cod_decodificador,
            imagen_1: req.body.imagen_1,
            imagen_2: req.body.imagen_2,
            imagen_3: req.body.imagen_3,
            imagen_4: req.body.imagen_4,
            imagen_5: req.body.imagen_5,
            imagen_6: req.body.imagen_6,
            imagen_7: req.body.imagen_7,
            imagen_8: req.body.imagen_8,
            imagen_9: req.body.imagen_9,
            imagen_10: req.body.imagen_10,
            latitud: req.body.latitud,
            longitud: req.body.longitud,
            tipo_formulario_id: 6,
            usuario_id: null
        }
        let auth = new Promise ( (resolve, reject) => {
            global.validateToken(req.body.token, (response, err) => {
                if(!err){
                    log.info('usuario autorizado')
                    respuestas.usuario_id = response.userId
                    return resolve(true)
                }else{
                    statusError = 401
                    reject(new Error('Token inválido'))
                }
            })
        })

        auth
            // creamos el formulario, guardamos respuestas e imágenes
            .then( (resolved, rejected) => {
                return new Promise( (resolve, reject) => {
                    formulario.createForm(respuestas, (err, res) => {
                        if(err){
                            log.error(err)
                        }
                        return (err) ? reject(new Error('No se ha podido crear un nuevo formulario')) : resolve(res)
                    })
                })
            })

            // respondemos al cliente
            .then( (resolved, rejected) => {
                res.status(200).json({
                    success: true,
                    message: `Formulario guardado con éxito`
                })
                log.info('res: Formulario guardado con éxito')
            })

            // manejamos algún posible error
            .catch( (err) => {
                log.error(err)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })

    // Formulario de bafi id=7
    app.post('/formulario/entel/bafi', (req, res) => {
        log.info('post: /formulario/entel/instalacion/dth')
        log.info('req: ' + JSON.stringify(req.body))
        
        const respuestas = {
            fecha: Math.floor(Date.now() / 1000),
            ot_servicorp: req.body.ot_servicorp,
            folio_servicio: req.body.folio_servicio,
            resp_1: req.body.resp_1,
            resp_2: req.body.resp_2,
            resp_3: req.body.resp_3,
            resp_4: req.body.resp_4,
            resp_5: req.body.resp_5,
            resp_6: req.body.resp_6,
            resp_7: req.body.resp_7,
            resp_8: req.body.resp_8,
            resp_9: req.body.resp_9,
            resp_10: req.body.resp_10,
            resp_11: req.body.resp_11,
            resp_12: req.body.resp_12,
            resp_13: req.body.resp_13,
            resp_14: req.body.resp_14,
            resp_15: req.body.resp_15,
            resp_16: req.body.resp_16,
            resp_17: req.body.resp_17,
            resp_18: req.body.resp_18,
            resp_19: req.body.resp_19,
            resp_20: req.body.resp_20,
            resp_21: req.body.resp_21,
            resp_22: req.body.resp_22,
            resp_23: req.body.resp_23,
            resp_24: req.body.resp_24,
            resp_25: req.body.resp_25,
            resp_26: req.body.resp_26,
            resp_27: req.body.resp_27,
            resp_28: req.body.resp_28,
            cod_decodificador: req.body.cod_decodificador,
            imagen_1: req.body.imagen_1,
            imagen_2: req.body.imagen_2,
            imagen_3: req.body.imagen_3,
            imagen_4: req.body.imagen_4,
            imagen_5: req.body.imagen_5,
            imagen_6: req.body.imagen_6,
            imagen_7: req.body.imagen_7,
            imagen_8: req.body.imagen_8,
            imagen_9: req.body.imagen_9,
            imagen_10: req.body.imagen_10,
            latitud: req.body.latitud,
            longitud: req.body.longitud,
            tipo_formulario_id: 7,
            usuario_id: null
        }
        let auth = new Promise ( (resolve, reject) => {
            global.validateToken(req.body.token, (response, err) => {
                if(!err){
                    log.info('usuario autorizado')
                    respuestas.usuario_id = response.userId
                    return resolve(true)
                }else{
                    statusError = 401
                    reject(new Error('Token inválido'))
                }
            })
        })

        auth
            // creamos el formulario, guardamos respuestas e imágenes
            .then( (resolved, rejected) => {
                return new Promise( (resolve, reject) => {
                    formulario.createForm(respuestas, (err, res) => {
                        if(err){
                            log.error(err)
                        }
                        return (err) ? reject(new Error('No se ha podido crear un nuevo formulario')) : resolve(res)
                    })
                })
            })

            // respondemos al cliente
            .then( (resolved, rejected) => {
                res.status(200).json({
                    success: true,
                    message: `Formulario guardado con éxito`
                })
                log.info('res: Formulario guardado con éxito')
            })

            // manejamos algún posible error
            .catch( (err) => {
                log.error(err)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })

    // Formulario de duo id=8
    app.post('/formulario/entel/duo', (req, res) => {
        log.info('post: /formulario/entel/instalacion/dth')
        log.info('req: ' + JSON.stringify(req.body))
        
        const respuestas = {
            fecha: Math.floor(Date.now() / 1000),
            ot_servicorp: req.body.ot_servicorp,
            folio_servicio: req.body.folio_servicio,
            resp_1: req.body.resp_1,
            resp_2: req.body.resp_2,
            resp_3: req.body.resp_3,
            resp_4: req.body.resp_4,
            resp_5: req.body.resp_5,
            resp_6: req.body.resp_6,
            resp_7: req.body.resp_7,
            resp_8: req.body.resp_8,
            resp_9: req.body.resp_9,
            resp_10: req.body.resp_10,
            resp_11: req.body.resp_11,
            resp_12: req.body.resp_12,
            resp_13: req.body.resp_13,
            resp_14: req.body.resp_14,
            resp_15: req.body.resp_15,
            resp_16: req.body.resp_16,
            resp_17: req.body.resp_17,
            resp_18: req.body.resp_18,
            resp_19: req.body.resp_19,
            resp_20: req.body.resp_20,
            resp_21: req.body.resp_21,
            resp_22: req.body.resp_22,
            resp_23: req.body.resp_23,
            resp_24: req.body.resp_24,
            resp_25: req.body.resp_25,
            resp_26: req.body.resp_26,
            resp_27: req.body.resp_27,
            resp_28: req.body.resp_28,
            resp_29: req.body.resp_29,
            resp_30: req.body.resp_30,
            resp_31: req.body.resp_31,
            resp_32: req.body.resp_32,
            resp_33: req.body.resp_33,
            resp_34: req.body.resp_34,
            resp_35: req.body.resp_35,
            resp_36: req.body.resp_36,
            resp_37: req.body.resp_37,
            resp_38: req.body.resp_38,
            resp_39: req.body.resp_39,
            resp_40: req.body.resp_40,
            resp_41: req.body.resp_41,
            resp_42: req.body.resp_42,
            resp_43: req.body.resp_43,
            resp_44: req.body.resp_44,
            resp_45: req.body.resp_45,
            resp_46: req.body.resp_46,
            resp_47: req.body.resp_47,
            resp_48: req.body.resp_48,
            resp_49: req.body.resp_49,
            resp_50: req.body.resp_50,
            resp_51: req.body.resp_51,
            resp_52: req.body.resp_52,
            resp_53: req.body.resp_53,
            resp_54: req.body.resp_54,
            resp_55: req.body.resp_55,
            resp_56: req.body.resp_56,
            resp_57: req.body.resp_57,
            resp_58: req.body.resp_58,
            resp_59: req.body.resp_59,
            resp_60: req.body.resp_60,
            resp_61: req.body.resp_61,
            resp_62: req.body.resp_62,
            resp_63: req.body.resp_63,
            resp_64: req.body.resp_64,
            resp_65: req.body.resp_65,
            resp_66: req.body.resp_66,
            resp_67: req.body.resp_67,
            resp_68: req.body.resp_68,
            resp_69: req.body.resp_69,
            resp_70: req.body.resp_70,
            resp_71: req.body.resp_71,
            resp_72: req.body.resp_72,
            resp_73: req.body.resp_73,
            resp_74: req.body.resp_74,
            resp_75: req.body.resp_75,
            resp_76: req.body.resp_76,
            resp_77: req.body.resp_77,
            resp_78: req.body.resp_78,
            resp_79: req.body.resp_79,
            resp_80: req.body.resp_80,
            resp_81: req.body.resp_81,
            resp_82: req.body.resp_82,
            resp_83: req.body.resp_83,
            resp_84: req.body.resp_84,
            resp_85: req.body.resp_85,
            resp_86: req.body.resp_86,
            resp_87: req.body.resp_87,
            resp_88: req.body.resp_88,
            resp_89: req.body.resp_89,
            resp_90: req.body.resp_90,
            resp_91: req.body.resp_91,
            resp_92: req.body.resp_92,
            resp_93: req.body.resp_93,
            resp_94: req.body.resp_94,
            resp_95: req.body.resp_95,
            resp_96: req.body.resp_96,
            resp_97: req.body.resp_97,
            resp_98: req.body.resp_98,
            cod_decodificador: req.body.cod_decodificador,
            imagen_1: req.body.imagen_1,
            imagen_2: req.body.imagen_2,
            imagen_3: req.body.imagen_3,
            imagen_4: req.body.imagen_4,
            imagen_5: req.body.imagen_5,
            imagen_6: req.body.imagen_6,
            imagen_7: req.body.imagen_7,
            imagen_8: req.body.imagen_8,
            imagen_9: req.body.imagen_9,
            imagen_10: req.body.imagen_10,
            latitud: req.body.latitud,
            longitud: req.body.longitud,
            tipo_formulario_id: 8,
            usuario_id: null
        }
        let auth = new Promise ( (resolve, reject) => {
            global.validateToken(req.body.token, (response, err) => {
                if(!err){
                    log.info('usuario autorizado')
                    respuestas.usuario_id = response.userId
                    return resolve(true)
                }else{
                    statusError = 401
                    reject(new Error('Token inválido'))
                }
            })
        })

        auth
            // creamos el formulario, guardamos respuestas e imágenes
            .then( (resolved, rejected) => {
                return new Promise( (resolve, reject) => {
                    formulario.createForm(respuestas, (err, res) => {
                        if(err){
                            log.error(err)
                        }
                        return (err) ? reject(new Error('No se ha podido crear un nuevo formulario')) : resolve(res)
                    })
                })
            })

            // respondemos al cliente
            .then( (resolved, rejected) => {
                res.status(200).json({
                    success: true,
                    message: `Formulario guardado con éxito`
                })
                log.info('res: Formulario guardado con éxito')
            })

            // manejamos algún posible error
            .catch( (err) => {
                log.error(err)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })

    // Get de formularios
    app.get('/formulario/:empresa/:tipoFormulario/:subtipoFormulario/:token', (req, res) => {
        log.info(`get: /formulario/${req.params.empresa}/${req.params.tipoFormulario}/${req.params.subtipoFormulario}/${req.params.token}`)
        
        let data = {
            tipo_formulario_id: null,
            usuario_id: null,
        }
        if(req.params.empresa.toString() === 'claro' && req.params.tipoFormulario.toString() === 'mantencion' && req.params.subtipoFormulario.toString() === 'hfc'){
            //data.tipo_formulario_id = 1
            data.tipo_formulario_id = 3
        }else if(req.params.empresa.toString() === 'claro' && req.params.tipoFormulario.toString() === 'mantencion' && req.params.subtipoFormulario.toString() === 'dth'){
            data.tipo_formulario_id = 4
        }else if(req.params.empresa.toString() === 'claro' && req.params.tipoFormulario.toString() === 'instalacion' && req.params.subtipoFormulario.toString() === 'hfc'){
            data.tipo_formulario_id = 1
        }else if(req.params.empresa.toString() === 'claro' && req.params.tipoFormulario.toString() === 'instalacion' && req.params.subtipoFormulario.toString() === 'dth'){
            data.tipo_formulario_id = 2
        }else if(req.params.empresa.toString() === 'entel' && req.params.tipoFormulario.toString() === 'instalacion' && req.params.subtipoFormulario.toString() === 'dth'){
            data.tipo_formulario_id = 6
        }else if(req.params.empresa.toString() === 'entel' && req.params.tipoFormulario.toString() === 'bafi'){
            data.tipo_formulario_id = 7
        }else if(req.params.empresa.toString() === 'entel' && req.params.tipoFormulario.toString() === 'duo'){
            data.tipo_formulario_id = 8
        }
        let auth = new Promise ( (resolve, reject) => {
            global.validateToken(req.params.token, (response, err) => {
                if(!err){
                    data.usuario_id = response.userId
                    return resolve(true)
                }else{
                    statusError = 401
                    reject(new Error('Token inválido'))
                }
            })
        })
        
        auth
        // buscamos los formularios en la bdd
        .then( (resolved, rejected) => {
            return new Promise( (resolve, reject) => {
                formulario.getFormularios(data, (err, res) => {
                    if(err){
                        log.error(err)
                    }
                    return (err) ? reject(new Error('No se ha podido leer los formularios de la base de datos')) : resolve(res)
                })
            })
        })
        
        // entregamos los formularios correspondientes
        .then( (resolved, rejected) => {
            res.status(200).json({
                success: true,
                message: `Formularios de ${req.params.tipoFormulario} ${req.params.subtipoFormulario} ${req.params.empresa} del usuario con id = ${data.usuario_id}`,
                data: resolved
            })
            log.info(`Formularios de ${req.params.tipoFormulario} ${req.params.subtipoFormulario} ${req.params.empresa} del usuario con id = ${data.usuario_id}`)
            log.info(`res: ${JSON.stringify(resolved)}`)
        })

        // manejamos algún posible error
        .catch( (err) => {
            log.error(err)
            res.status(statusError).json({
                success: false,
                message: err.message
            })
        })
    })

    // Get de formularios de desconexion
    app.get('/formulario/claro/desconexion/:token', (req, res) => {
        log.info(`get: /formulario/claro/desconexion/${req.params.token}`)
        
        let data = {
            tipo_formulario_id: 5,
            usuario_id: null,
        }
        let auth = new Promise ( (resolve, reject) => {
            global.validateToken(req.params.token, (response, err) => {
                if(!err){
                    data.usuario_id = response.userId
                    return resolve(true)
                }else{
                    statusError = 401
                    reject(new Error('Token inválido'))
                }
            })
        })

        auth
            // buscamos los formularios en la bdd
            .then( (resolved, rejected) => {
                return new Promise( (resolve, reject) => {
                    formulario.getFormularios(data, (err, res) => {
                        if(err){
                            log.error(err)
                        }
                        return (err) ? reject(new Error('No se ha podido leer los formularios de la base de datos')) : resolve(res)
                    })
                })
            })

            // entregamos los formularios correspondientes
            .then( (resolved, rejected) => {
                res.status(200).json({
                    success: true,
                    message: `Formularios de desconexion del usuario con id = ${data.usuario_id}`,
                    data: resolved
                })
                log.info(`Formularios de desconexion del usuario con id = ${data.usuario_id}`)
                log.info(`res: ${JSON.stringify(resolved)}`)
            })

            // manejamos algún posible error
            .catch( (err) => {
                log.error(err)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })

    // Get respuestas por id de formulario
    app.get('/respuestas/:idFormulario/:token', (req, res) => {
        log.info(`get: /respuestas/${req.params.tipoFormulario}/${req.params.token}`)
        
        let formulario_id = req.params.idFormulario
        let auth = new Promise ( (resolve, reject) => {
            global.validateToken(req.params.token, (response, err) => {
                if(!err){
                    return resolve(true)
                }else{
                    statusError = 401
                    reject(new Error('Token inválido'))
                }
            })
        })

        auth
            // buscamos los formularios en la bdd
            .then( (resolved, rejected) => {
                return new Promise( (resolve, reject) => {
                    formulario.getResponsesByFormId(formulario_id, (err, res) => {
                        if(err){
                            log.error(err)
                        }
                        return (err) ? reject(new Error(`No se ha podido leer respuestas del formulario con id = ${req.params.idFormulario} de la base de datos`)) : resolve(res)
                    })
                })
            })

            // entregamos los formularios correspondientes
            .then( (resolved, rejected) => {
                res.status(200).json({
                    success: true,
                    message: `Respuestas del formulario con id = ${req.params.idFormulario}`,
                    data: resolved
                })
                log.info(`Respuestas del formulario con id = ${req.params.idFormulario}`)
                log.info(`res: ${JSON.stringify(resolved)}`)
            })

            // manejamos algún posible error
            .catch( (err) => {
                log.error(err)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })

    // Get preguntas por id de formulario
    app.get('/preguntas/:idFormulario/:token', (req, res) => {
        log.info(`get: /preguntas/${req.params.tipoFormulario}/${req.params.token}`)
        
        let formulario_id = req.params.idFormulario
        let auth = new Promise ( (resolve, reject) => {
            global.validateToken(req.params.token, (response, err) => {
                if(!err){
                    return resolve(true)
                }else{
                    statusError = 401
                    reject(new Error('Token inválido'))
                }
            })
        })

        auth
            // buscamos los formularios en la bdd
            .then( (resolved, rejected) => {
                return new Promise( (resolve, reject) => {
                    formulario.getQuestionsByFormId(formulario_id, (err, res) => {
                        if(err){
                            log.error(err)
                        }
                        return (err) ? reject(new Error(`No se ha podido leer preguntas del formulario con id = ${req.params.idFormulario} de la base de datos`)) : resolve(res)
                    })
                })
            })

            // entregamos los formularios correspondientes
            .then( (resolved, rejected) => {
                res.status(200).json({
                    success: true,
                    message: `Preguntas del formulario con id = ${req.params.idFormulario}`,
                    data: resolved
                })
                log.info(`Preguntas del formulario con id = ${req.params.idFormulario}`)
                log.info(`res: ${JSON.stringify(resolved)}`)
            })

            // manejamos algún posible error
            .catch( (err) => {
                log.error(err)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })

    // Get cantidad de formularios por id de usuario
    app.get('/formularios/:userId/:token', (req, res) => {
        log.info(`get: /formularios/${req.params.userId}/${req.params.token}`)
        
        let usuario_id = req.params.userId
        let auth = new Promise ( (resolve, reject) => {
            global.validateToken(req.params.token, (response, err) => {
                if(!err){
                    return resolve(true)
                }else{
                    statusError = 401
                    reject(new Error('Token inválido'))
                }
            })
        })

        auth
            // buscamos la cantidad de formularios en la bdd
            .then( (resolved, rejected) => {
                return new Promise( (resolve, reject) => {
                    formulario.getTotalFormsByUserId(usuario_id, (err, res) => {
                        if(err){
                            log.error(err)
                        }
                        return (err) ? reject(new Error(`No se ha podido leer la cantidad de formularios de la base de datos`)) : resolve(res)
                    })
                })
            })

            // entregamos la cantidad de formularios
            .then( (resolved, rejected) => {
                res.status(200).json({
                    success: true,
                    message: `Cantidad de formularios por usuario con id = ${usuario_id}`,
                    data: {
                        "instalacionHfc": resolved[0].cantidad,
                        "instalacionDth": resolved[1].cantidad,
                        "mantencionHfc": resolved[2].cantidad,
                        "mantencionDth": resolved[3].cantidad,
                        "desconexion": resolved[4].cantidad,
                        "instalacionDthEntel": resolved[5].cantidad,
                        "BAFIEntel": resolved[6].cantidad,
                        "DUOEntel": resolved[7].cantidad,
                        "total": resolved[0].cantidad + resolved[1].cantidad + resolved[2].cantidad + resolved[3].cantidad + resolved[4].cantidad + resolved[5].cantidad + resolved[6].cantidad + resolved[7].cantidad
                    }
                })
                log.info(`res: ${JSON.stringify(resolved)}`)
            })

            // manejamos algún posible error
            .catch( (err) => {
                log.error(err)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })

    // Get cantidad de formularios por id de usuario entre fechas
    app.get('/formularios/:userId/:fechaInicio/:fechaFin/:token', (req, res) => {
        log.info(`get: /formularios/${req.params.userId}/${req.params.fechaInicio}/${req.params.fechaFin}/${req.params.token}`)
        
        let data = {
            usuario_id: req.params.userId,
            fechaInicio: req.params.fechaInicio,
            fechaFin: req.params.fechaFin
        }
        let usuario_id = req.params.userId
        let auth = new Promise ( (resolve, reject) => {
            global.validateToken(req.params.token, (response, err) => {
                if(!err){
                    return resolve(true)
                }else{
                    statusError = 401
                    reject(new Error('Token inválido'))
                }
            })
        })

        auth
            // buscamos la cantidad de formularios en la bdd
            .then( (resolved, rejected) => {
                return new Promise( (resolve, reject) => {
                    formulario.getTotalFormsByUserIdAndDate(data, (err, res) => {
                        if(err){
                            log.error(err)
                        }
                        return (err) ? reject(new Error(`No se ha podido leer la cantidad de formularios de la base de datos`)) : resolve(res)
                    })
                })
            })

            // entregamos la cantidad de formularios
            .then( (resolved, rejected) => {
                res.status(200).json({
                    success: true,
                    message: `Cantidad de formularios por usuario con id = ${data.usuario_id}`,
                    data: {
                        "instalacionHfc": resolved[0].cantidad,
                        "instalacionDth": resolved[1].cantidad,
                        "mantencionHfc": resolved[2].cantidad,
                        "mantencionDth": resolved[3].cantidad,
                        "desconexion": resolved[4].cantidad,
                        "instalacionDthEntel": resolved[5].cantidad,
                        "BAFIEntel": resolved[6].cantidad,
                        "DUOEntel": resolved[7].cantidad,
                        "total": resolved[0].cantidad + resolved[1].cantidad + resolved[2].cantidad + resolved[3].cantidad + resolved[4].cantidad + resolved[5].cantidad + resolved[6].cantidad + resolved[7].cantidad
                    }
                })
                log.info(`res: ${JSON.stringify(resolved)}`)
            })

            // manejamos algún posible error
            .catch( (err) => {
                log.error(err)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })

    // 'Get' cantidad de formularios desde x fecha
    app.post('/formularios/:empresa/:token', (req, res) => {
        log.info(`post: /formularios/${req.params.empresa}/${req.params.token}`)
        log.info('req: ' + JSON.stringify(req.body))
        
        let fechas = req.body
        let auth = new Promise ( (resolve, reject) => {
            global.validateToken(req.params.token, (response, err) => {
                if(!err){
                    return resolve(true)
                }else{
                    statusError = 401
                    reject(new Error('Token inválido'))
                }
            })
        })
        
        auth

        // buscamos la cantidad de formularios en la bdd
        .then( (resolved, rejected) => {
            return new Promise( (resolve, reject) => {
                formulario.getTotalFormsByDate({empresa: req.params.empresa, fechas: fechas}, (err, res) => {
                    if(err){
                        log.error(err)
                    }
                    return (err) ? reject(new Error(err.message)) : resolve(res)
                })
            })
        })

        // entregamos la cantidad de formularios
        .then( (resolved, rejected) => {
            res.status(200).json({
                success: true,
                message: `Cantidad de formularios de ${req.params.empresa}`,
                data: resolved
            })
            log.info(`Cantidad de formularios de ${req.params.empresa}`)
            log.info(`res: ${JSON.stringify(resolved)}`)
        })

        // manejamos algún posible error
        .catch( (err) => {
            log.error(err)
            res.status(statusError).json({
                success: false,
                message: err.message
            })
        })
    })

    // Get cantidad de formularios desde x fecha
    app.get('/formularios/:empresa/fechas/:inicio/:fin/:token', (req, res) => {
        log.info(`get: /formularios/${req.params.empresa}/fechas/${req.params.inicio}/${req.params.fin}/${req.params.token}`)
        
        let data = {
            inicio: req.params.inicio,
            fin: req.params.fin,
            empresa: req.params.empresa
        }
        let auth = new Promise ( (resolve, reject) => {
            global.validateToken(req.params.token, (response, err) => {
                if(!err){
                    return resolve(true)
                }else{
                    statusError = 401
                    reject(new Error('Token inválido'))
                }
            })
        })
        
        auth
            // buscamos la cantidad de formularios en la bdd
            .then( (resolved, rejected) => {
                return new Promise( (resolve, reject) => {
                    formulario.getTotalFormsByDate(data, (err, res) => {
                        if(err){
                            log.error(err)
                        }
                        return (err) ? reject(new Error(`No se ha podido leer la cantidad de formularios de la base de datos`)) : resolve(res)
                    })
                })
            })

            // entregamos la cantidad de formularios
            .then( (resolved, rejected) => {
                if(req.params.empresa == 'claro'){
                    res.status(200).json({
                        success: true,
                        message: `Cantidad de formularios de claro con fecha = ${data.inicio}`,
                        data: {
                            "instalacion-hfc": resolved[0].cantidad,
                            "instalacion-dth": resolved[1].cantidad,
                            "mantencion-hfc": resolved[2].cantidad,
                            "mantencion-dth": resolved[3].cantidad,
                            "desconexion": resolved[4].cantidad,
                            "total": resolved[0].cantidad + resolved[1].cantidad + resolved[2].cantidad + resolved[3].cantidad + resolved[4].cantidad 
                        }
                    })
                }else if(req.params.empresa == 'entel'){
                    res.status(200).json({
                        success: true,
                        message: `Cantidad de formularios de entel con fecha = ${data.inicio}`,
                        data: {
                            "instalacionDthEntel": resolved[5].cantidad,
                            "BAFIEntel": resolved[6].cantidad,
                            "DUOEntel": resolved[7].cantidad,
                            "total": resolved[5].cantidad + resolved[6].cantidad + resolved[7].cantidad
                        }
                    })
                }
                log.info(`res: ${JSON.stringify(resolved)}`)
            })

            // manejamos algún posible error
            .catch( (err) => {
                log.error(err)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })

    // Get zips imagenes
    app.get('/zips-imgs/:token', (req, res) => {
        log.info(`get: /zips-imgs/${req.params.token}`)
        
        let auth = new Promise ( (resolve, reject) => {
            global.validateToken(req.params.token, (response, err) => {
                if(!err){
                    return resolve(true)
                }else{
                    statusError = 401
                    reject(new Error('Token inválido'))
                }
            })
        })

        auth
            // buscamos los formularios en la bdd
            .then( (resolved, rejected) => {
                return new Promise( (resolve, reject) => {
                    formulario.getZips((err, res) => {
                        if(err){
                            log.error(err)
                        }
                        return (err) ? reject(new Error(`No se ha podido leer los zips de la base de datos`)) : resolve(res)
                    })
                })
            })

            // entregamos los formularios correspondientes
            .then( (resolved, rejected) => {
                res.status(200).json({
                    success: true,
                    message: `Zips con imágenes`,
                    data: resolved
                })
                log.info(`Zips con imágenes`)
                log.info(`res: ${JSON.stringify(resolved)}`)
            })

            // manejamos algún posible error
            .catch( (err) => {
                log.error(err)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })

    // Get reporte segun tipo formulario y rango de fecha (*** NUEVO ***)
    app.get('/reporte/:tipoFormulario/:inicio/:fin/:token', (req, res) => {
        log.info(`get: /reporte/${req.params.tipoFormulario}/${req.params.inicio}/${req.params.fin}/${req.params.token}`)
        log.debug('Procesando solicitud')
        let workbook = new excel.Workbook() //creating workbook
        let worksheet = workbook.addWorksheet('Reporte')
        let data = {
            tipoFormulario: req.params.tipoFormulario,
            inicio: req.params.inicio,
            fin: req.params.fin,
            dataInicio: '',
            dataFin: ''
        }

        console.log(data)

        let formName
        if(data.tipoFormulario == 'instalacion'){
            formName = 'reporte_instalacion'
            data.dataInicio = 1
            data.dataFin = 2
        }else if(data.tipoFormulario == 'mantencion'){
            formName = 'reporte_mantencion'
            data.dataInicio = 3
            data.dataFin = 4
        }else if(data.tipoFormulario == 'desconexion'){
            formName = 'reporte_desconexion'
            data.dataInicio = 5
            data.dataFin = 5
        }else if(data.tipoFormulario == 'instalacion-DTH'){
            formName = 'reporte_instalacion-DTH'
            data.dataInicio = 6
            data.dataFin = 6
        }else if(data.tipoFormulario == 'BAFI'){
            formName = 'reporte_BAFI'
            data.dataInicio = 7
            data.dataFin = 7
        }else if(data.tipoFormulario == 'DUO'){
            formName = 'reporte_DUO'
            data.dataInicio = 8
            data.dataFin = 8
        }

        let auth = new Promise((resolve, reject) => {
            global.validateToken(req.params.token, (response, err) => {
                if(!err){
                    return resolve(true)
                }else{
                    statusError = 401
                    reject(new Error('Token inválido'))
                }
            })
        })

        auth
            // buscamos los formularios en la bdd
            .then( (resolved, rejected) => {
                return new Promise( (resolve, reject) => {
                    log.info('iniciando busqueda de formularios')
                    formulario.getFormulariosId(data, (err, res) => {
                        if(err){
                            log.error(err)
                        }
                        console.log('id de formularios',res)
                        return (err) ? reject(new Error(`No se ha podido generar el reporte`)) : resolve(res)
                    })
                })
            })

            // traemos las preguntas de el formulario solicitado para crear las columnas del excel
            .then((resolved, rejected) => {
                this.formIds = resolved
                return new Promise((resolve, reject) => {
                    formulario.getReporteByFormTypeId(data, (err, res) => {
                        if (err) {
                            log.error(err)
                        }else{

                            // Creamos la cabezera de la tabla del reporte
                            format = []
                            worksheet.columns = []
                            format.push({header:'Nº', key:'Nº'})
                            format.push({header:'Usuario', key:'Usuario'})
                            format.push({header:'Folio', key:'Folio'})
                            format.push({header:'Número de OT Servicio', key:'Número de OT Servicio'})
                            format.push({header:'Fecha', key:'Fecha'})
                            format.push({header:'Hora', key:'Hora'})
                            format.push({header:'Nombre de Cliente', key:'Nombre de Cliente'})
                            format.push({header:'Rut', key:'Rut'})
                            format.push({header:'Dirección', key:'Dirección'})
                            format.push({header:'Comuna', key:'Comuna'})
                            format.push({header:'Empresa Instaladora', key:'Empresa Instaladora'})
                            format.push({header:'Técnico', key:'Técnico'})
                            format.push({header:'Fecha de Servicio', key:'Fecha de Servicio'})
                            format.push({header:'Tipo de Venta', key:'Tipo de Venta'})
                            for (let i=2; i<res.length; i++){
                                if(res[i].glosa == 'IDU funcionando correctamente'){
                                    format.push({header: res[i].glosa, key: res[i].glosa})
                                }
                            }
                            format.push({header:'Coordenadas', key:'Coordenadas'})
                            worksheet.columns = format
                        }
                        return (err) ? reject(new Error(`No se ha podido leer las preguntas de los formularios de la base de datos`)) : resolve(res)
                    })
                })
            })

            // buscamos los formularios con sus preguntas y respuestas en la bdd
            .then((resolved, rejected) => {
                log.debug('trayendo datos de la bdd')
                return new Promise ((resolve, reject) => {
                    formulario.getReporteByFormTypeId(data, (err, res) => {
                        if (err) {
                            log.error(err)
                        }
                        return (err) ? reject(new Error(`No se ha podido leer los formularios de la base de datos`)) : resolve(res)
                    })
                })
            })


            // generamos el excel con los resultados
            .then((resolved, rejected) => {
                return new Promise((resolve, reject) => {
                    console.log(`Respuesta: ${JSON.stringify(resolved)}`)
                    data = JSON.parse(JSON.stringify(resolved))
                    aux = 0 // aquí guardaré el id_formulario para que genere una sola fila con cada formulario
                    // Agregamos los datos de la bdd
                    row = []
                    for(let i=0; i<data.length; i++){
                        if(data[i].id_formulario != aux){
                            row.push('')
                            row.push(data[i].username)
                            /* row.push(data[1].respuesta)
                            row.push(data[0].respuesta) */
                            if(data[i+1].glosa == 'FOLIO DE SERVICIO'){
                                row.push(data[i+1].respuesta)
                            }else{
                                row.push('')
                            }
                            if(data[i].glosa == 'OT SERVICORP'){
                                row.push(data[i].respuesta)
                            }else{
                                row.push('')
                            }
                            row.push(moment(data[i].fecha).format('DD-MM-YYYY'))
                            row.push(moment(data[i].fecha).subtract(4, 'hours').format('LTS'))
                            row.push('')
                            row.push('')
                            row.push('')
                            row.push('')
                            row.push('')
                            row.push('')
                            row.push('')
                            row.push('')
                            for(let j=i+2; j<data.length; j++){ // este for llena las respuestas sin hacer un match con las preguntas
                                if(data[i].id_formulario == data[j].id_formulario){
                                    if(data[j].glosa == 'Código Decodificador' && data[j].respuesta == ''){
                                        row.push('Sin código')
                                    }else{
                                        row.push(data[j].respuesta)
                                    }
                                    console.log(`Respuesta ${j}: ${JSON.stringify(data[j].glosa)}`)
                                }
                            }
                            row.push(data[i].latitud + ',' + data[i].longitud)
                            worksheet.addRows([row])
                            row = []
                            aux = data[i].id_formulario
                        }
                    }
                    
                    // Creamos el archivo
                    workbook.xlsx.writeFile(`/var/www/Servicorp/Servicorp-backend/src/reportes/${formName}.xlsx`)
                    .then(() => {
                        log.debug("reporte creado!")
                        res.download(`/var/www/Servicorp/Servicorp-backend/src/reportes/${formName}.xlsx`, (err) => {
                            if (err) {
                                res.status(500).json({
                                    success: false,
                                    message: 'Error al generar reporte'
                                })
                            } 
                        })
                    })
                    .catch(err => {
                        log.error(err)
                        reject(new Error(`No se ha podido enviar el reporte`))
                    })
                })
            })

            .catch(err => {
                log.error(err)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })

    // Get imgs segun id formulario
    app.get('/imgs/:idFormulario/:token', (req, res) => {
        log.info(`get: /imgs/${req.params.idFormulario}/${req.params.token}`)
        
        let auth = new Promise ( (resolve, reject) => {
            global.validateToken(req.params.token, (response, err) => {
                if(!err){
                    return resolve(true)
                }else{
                    statusError = 401
                    reject(new Error('Token inválido'))
                }
            })
        })

        auth
        .then((resolved, rejected) => {
            return new Promise( (resolve, reject) => {
                formulario.getFormularioImgs(req.params.idFormulario, (err, res) => {
                    if(err){
                        log.error(err)
                    }
                    return (err) ? reject(new Error(`No se ha podido leer las imágenes en la base de datos`)) : resolve(res)
                })
            })
        })

        .then((resolved, rejected) => {
            res.status(200).json({
                success: true,
                message: `Imágenes del furmulario con id = ${req.params.idFormulario}`,
                data: resolved
            })
            log.info(`Imágenes del furmulario con id = ${req.params.idFormulario}`)
            log.info(`res: ${JSON.stringify(resolved)}`)
        })

        // manejamos algún posible error
        .catch( (err) => {
            log.error(err)
            res.status(statusError).json({
                success: false,
                message: err.message
            })
        })
    })

    app.put('/edit-form/:idTipoFormulario/:token', (req, res) => {
        log.info(`put: /edit-form/${req.params.idFormulario}/${req.params.token}`)
        log.info('req: ' + JSON.stringify(req.body))
        
        let auth = new Promise ( (resolve, reject) => {
            global.validateToken(req.params.token, (response, err) => {
                if(!err){
                    return resolve(true)
                }else{
                    statusError = 401
                    reject(new Error('Token inválido'))
                }
            })
        })

        auth
        // editamos el formulario en la bdd
        .then( (resolved, rejected) => {
            return new Promise( (resolve, reject) => {
                formulario.editFormulario(req.body, req.params.idTipoFormulario, (err, res) => {
                    if(err){
                        log.error(err)
                    }
                    return (err) ? reject(new Error(`No se ha podido editar el formulario`)) : resolve(res)
                })
            })
        })

        // respondemos que los cambios se han guardado
        .then( (resolved, rejected) => {
            res.status(200).json({
                success: true,
                message: `Formulario Editado`,
                data: resolved
            })
            log.info('Formulario Editado')
            log.info(`res: ${JSON.stringify(resolved)}`)
        })

        // manejamos algún posible error
        .catch( (err) => {
            log.error(err)
            res.status(statusError).json({
                success: false,
                message: err.message
            })
        })
    })

}
