const formulario = require('../models/formulario')
const global = require('../middlewares/auth')
const excel = require('excel4node')
const path = require('path')
const moment = require('moment')
const timezone = 3


module.exports = (app) => {
    let statusError = 500

    //***************************Formularios Claro***************************

    // Formulario de mantencion hfc id=3
    app.post('/formulario/claro/mantencion/hfc', (req, res) => {
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
                    console.log('usuario autorizado')
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
                        console.log('-----------------------------')
                        console.log(err)
                        console.log(res)
                        console.log('-----------------------------')
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
            })

            // manejamos algún posible error
            .catch( (err) => {
                console.log(err.message)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })

    // Formulario de mantencion dth id=4
    app.post('/formulario/claro/mantencion/dth', (req, res) => {
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
                    console.log('usuario autorizado')
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
                        console.log('-----------------------------')
                        console.log(err)
                        console.log(res)
                        console.log('-----------------------------')
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
            })

            // manejamos algún posible error
            .catch( (err) => {
                console.log(err.message)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })

    // Formulario de instalacion hfc id=1
    app.post('/formulario/claro/instalacion/hfc', (req, res) => {
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
                    console.log('usuario autorizado')
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
                        console.log('-----------------------------')
                        console.log(err)
                        console.log(res)
                        console.log('-----------------------------')
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
            })

            // manejamos algún posible error
            .catch( (err) => {
                console.log(err.message)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })

    // Formulario de instalacion dth id=2
    app.post('/formulario/claro/instalacion/dth', (req, res) => {
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
                    console.log('usuario autorizado')
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
            })

            // manejamos algún posible error
            .catch( (err) => {
                console.log(err.message)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })
    
    // Formulario de desconexion id=5
    app.post('/formulario/claro/desconexion', (req, res) => {
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
                    console.log('usuario autorizado')
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
                        console.log('-----------------------------')
                        console.log(err)
                        console.log(res)
                        console.log('-----------------------------')
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
            })

            // manejamos algún posible error
            .catch( (err) => {
                console.log(err.message)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })
    
    //***************************Formularios Entel***************************

    // Formulario de instalacion dth id=6
    app.post('/formulario/entel/instalacion/dth', (req, res) => {
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
                    console.log('usuario autorizado')
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
                        console.log('-----------------------------')
                        console.log(err)
                        console.log(res)
                        console.log('-----------------------------')
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
            })

            // manejamos algún posible error
            .catch( (err) => {
                console.log(err.message)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })

    // Get de formularios
    app.get('/formulario/:empresa/:tipoFormulario/:subtipoFormulario/:token', (req, res) => {
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
                    return (err) ? reject(new Error('No se ha podido leer los formularios de la base de datos')) : resolve(res)
                })
            })
        })
        
        // entregamos los formularios correspondientes
        .then( (resolved, rejected) => {
            console.log(data.tipo_formulario_id)
            res.status(200).json({
                success: true,
                message: `Formularios de ${req.params.tipoFormulario} ${req.params.subtipoFormulario} ${req.params.empresa} del usuario con id = ${data.usuario_id}`,
                data: resolved
            })
        })

        // manejamos algún posible error
        .catch( (err) => {
            console.log(err.message)
            res.status(statusError).json({
                success: false,
                message: err.message
            })
        })
    })

    // Get de formularios de desconexion
    app.get('/formulario/claro/desconexion/:token', (req, res) => {
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
            })

            // manejamos algún posible error
            .catch( (err) => {
                console.log(err.message)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })

    // Get respuestas por id de formulario
    app.get('/respuestas/:idFormulario/:token', (req, res) => {
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
            })

            // manejamos algún posible error
            .catch( (err) => {
                console.log(err.message)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })

    // Get preguntas por id de formulario
    app.get('/preguntas/:idFormulario/:token', (req, res) => {
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
            })

            // manejamos algún posible error
            .catch( (err) => {
                console.log(err.message)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })

    // Get cantidad de formularios por id de usuario
    app.get('/formularios/:userId/:token', (req, res) => {
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
                        "total": resolved[0].cantidad + resolved[1].cantidad + resolved[2].cantidad + resolved[3].cantidad + resolved[4].cantidad + resolved[5].cantidad
                    }
                })
            })

            // manejamos algún posible error
            .catch( (err) => {
                console.log(err.message)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })

    // 'Get' cantidad de formularios desde x fecha
    app.post('/formularios/:empresa/:token', (req, res) => {
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
                    return (err) ? reject(new Error(err.message)) : resolve(res)
                })
            })
        })

        // entregamos la cantidad de formularios
        .then( (resolved, rejected) => {
            res.status(200).json({
                success: true,
                message: `Cantidad de formularios de claro`,
                data: resolved
            })
        })

        // manejamos algún posible error
        .catch( (err) => {
            console.log(err.message)
            res.status(statusError).json({
                success: false,
                message: err.message
            })
        })
    })

    // Get cantidad de formularios desde x fecha
    app.get('/formularios/:empresa/fechas/:inicio/:fin/:token', (req, res) => {
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
                            "instalacion-dth": resolved[5].cantidad,
                            "total": resolved[5].cantidad
                        }
                    })
                }
            })

            // manejamos algún posible error
            .catch( (err) => {
                console.log(err.message)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })

    // Get zips imagenes
    app.get('/zips-imgs/:token', (req, res) => {
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
            })

            // manejamos algún posible error
            .catch( (err) => {
                console.log(err.message)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })

    // Get reporte segun tipo de formulario y rango de fecha
    app.get('/reporte/:tipoFormulario/:empresa/:inicio/:fin/:token', (req, res) => {

        // Creamos un libro de excel
        let xl = new excel.Workbook()

        // agregamos hojas de trabajo al libro excel
        let hoja_1 = xl.addWorksheet('Hoja 100')


        console.log("Iniciando solicitud de reporte")
        let data = {
            tipo_formulario: req.params.tipoFormulario,
            fechaInicio: req.params.inicio,
            fechaFin: req.params.fin,
            formulario_id: '',
            empresa: req.params.empresa
        }
        console.log(data)
        let auth = new Promise ( (resolve, reject) => {
            console.log('validando token')
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
                    console.log('iniciando busqueda de formularios')
                    formulario.getFormulariosId(data, (err, res) => {
                        return (err) ? reject(new Error(`No se ha podido generar el reporte`)) : resolve(res)
                    })
                })
            })
            
            .then( (resolved, rejected) => { // resolved = array con los ids de los formularios a consultar
                tipoReporte = ''
                let formsId = []
                for(let j=0; j<resolved.length; j++){
                    formsId.push(JSON.parse(JSON.stringify(resolved[j].id)))
                }
                console.log('++++')
                console.log('ids de formularios', formsId)
                console.log('++++')
                console.log('ids de formularios', formsId.length)
                for(let i=0; i<formsId.length; i++){ //formsId.length
                    auth
                    .then( (resolved, rejected) => {
                        return new Promise( (resolve, reject) => {
                            data.formulario_id = formsId[i]
                            formulario.getReporte(data, (err, res) => {
                                return (err) ? reject(new Error(`No se ha podido generar el reporte`)) : resolve(res)
                            })
                        })
                    })
                    
                    .then( (resolved, rejected) => {
                        aux = JSON.parse(JSON.stringify(resolved))
                        // console.log('------------------------------')
                        // console.log(aux[i+1].formulario_id)
                        // console.log(aux[i+1].respuesta)
                        // console.log('++++++++++++++++++++++++++++++')
                        // console.log(data)
                        // console.log(data.tipo_formulario === 'instalacion')
                        if (data.tipo_formulario.toString() === 'instalacion' && data.empresa.toString() === 'Entel')
                        {
                            if(i===0){
                                hoja_1.cell(1,1).string('N°')
                                hoja_1.cell(1,2).string('USUARIO')
                                hoja_1.cell(1,3).string('FOLIO')
                                hoja_1.cell(1,4).string('NUMERO DE OT SERVICIO')
                                hoja_1.cell(1,5).string('FECHA')
                                hoja_1.cell(1,6).string('HORA')
                                hoja_1.cell(1,7).string('NOMBRE DE CLIENTE')
                                hoja_1.cell(1,8).string('RUT')
                                hoja_1.cell(1,9).string('DIRECCION')
                                hoja_1.cell(1,10).string('COMUNA')
                                hoja_1.cell(1,11).string('EMPRESA INSTALADORA')
                                hoja_1.cell(1,12).string('TÉCNICO')
                                hoja_1.cell(1,13).string('FECHA DE SERVICIO')
                                hoja_1.cell(1,14).string('TIPO DE VENTA')
                                hoja_1.cell(1,15).string('TECNICO FUE AMABLE')
                                hoja_1.cell(1,16).string('LA PRESENTACIÓN DEL TECNICO ERA LA CORRECTA')
                                hoja_1.cell(1,17).string('TECNICO INFORMO EL TRABAJO A REALIZAR')
                                hoja_1.cell(1,18).string('TECNICO CAPACITO EN USO DE EQUIPOS')
                                hoja_1.cell(1,19).string('USO ANTENA ENTEL')
                                hoja_1.cell(1,20).string('CORRECTA UBICACIÓN DE ANTENA ENTEL')
                                hoja_1.cell(1,21).string('CORRECTA FIJACIÓN DE ANTENA ENTEL')
                                hoja_1.cell(1,22).string('UTILIZO EL CABLE Y MATERIALES DE ENTEL')
                                hoja_1.cell(1,23).string('CORRECTA INSTALACIÓN LNB ENTEL')
                                hoja_1.cell(1,24).string('INSTALACIÓN DE AMARRAS PLÁSTICAS')
                                hoja_1.cell(1,25).string('RUTEO Y GRAPEADO EXTERIOR.')
                                hoja_1.cell(1,26).string('LOOP MANTENCIÓN')
                                hoja_1.cell(1,27).string('FIJACION DE MULTISWITCH ENTEL')
                                hoja_1.cell(1,28).string('POSEE PASAMUROS EXTERIOR')
                                hoja_1.cell(1,29).string('POSEE PASAMUROS INTERIOR')
                                hoja_1.cell(1,30).string('EN LAS ESQUINAS DE MUROS LOS ÁNGULOS DE LOS CABLES(ÁNGULO DE CURVATURA) ESTÁ SEGÚN NORMA')
                                hoja_1.cell(1,31).string('USÓ CABLEADO ENTEL')
                                hoja_1.cell(1,32).string('RUTEO Y GRAPEADO INTERIOR')
                                hoja_1.cell(1,33).string('FIJACIÓN DE LOS CABLES DE ENTEL')
                                hoja_1.cell(1,34).string('CONECTORES ENTEL PRENSADOS CORRECTAMENTE')
                                hoja_1.cell(1,35).string('EL O LOS STB SE ENCUENTRAN BIEN UBICADOS SEGÚN NORMA')
                                hoja_1.cell(1,36).string('EL O LOS STB ESTÁN FUNCIONANDO CORRECTAMENTE')
                                hoja_1.cell(1,37).string('BUEN NIVEL DE SEÑAL 1 STB')
                                hoja_1.cell(1,38).string('BUEN NIVEL DE SEÑAL 2° STB')
                                hoja_1.cell(1,39).string('BUEN NIVEL DE SEÑAL 3 ° STB')
                                hoja_1.cell(1,40).string('SEÑAL PIXELADA')
                                hoja_1.cell(1,41).string('AUDITOR SOLICITA VISITA TÉCNICA')
                                hoja_1.cell(1,42).string('MOTIVO DE LA BAJA')
                                hoja_1.cell(1,43).string('CANTIDAD DECOS SEGÚN PLAN')
                                hoja_1.cell(1,44).string('CANTIDAD DECOS EXISTENTES EN DOMICILIO')
                                hoja_1.cell(1,45).string('CANTIDAD MULTISWITCH')
                                hoja_1.cell(1,46).string('TAMAÑO ANTENA')
                                hoja_1.cell(1,47).string('T1(10728H) PRINCIPAL')
                                hoja_1.cell(1,48).string('T2(10768 H) PRINCIPAL')
                                hoja_1.cell(1,49).string('T3(10808 H) PRINCIPAL')
                                hoja_1.cell(1,50).string('T4(10808 H) PRINCIPAL')
                                hoja_1.cell(1,51).string('T5(10888 H) PRINCIPAL')
                                hoja_1.cell(1,52).string('T6(10928 H) PRINCIPAL')
                                hoja_1.cell(1,53).string('T7(11222 H) PRINCIPAL')
                                hoja_1.cell(1,54).string('T8(11262 H) PRINCIPAL')
                                hoja_1.cell(1,55).string('T9(11302 H) PRINCIPAL')
                                hoja_1.cell(1,56).string('T10(11342 H) PRINCIPAL')
                                hoja_1.cell(1,57).string('T11(1382 H) PRINCIPAL')
                                hoja_1.cell(1,58).string('T12(11422 H) PRINCIPAL')
                                hoja_1.cell(1,59).string('T13(10728 V) PRINCIPAL')
                                hoja_1.cell(1,60).string('T1(10728H) SEGUNDO')
                                hoja_1.cell(1,61).string('T2(10768 H) SEGUNDO')
                                hoja_1.cell(1,62).string('T3(10808 H) SEGUNDO')
                                hoja_1.cell(1,63).string('T4(10808 H) SEGUNDO')
                                hoja_1.cell(1,64).string('T5(10888 H) SEGUNDO')
                                hoja_1.cell(1,65).string('T6(10928 H) SEGUNDO')
                                hoja_1.cell(1,66).string('T7(11222 H) SEGUNDO')
                                hoja_1.cell(1,67).string('T8(11262 H) SEGUNDO')
                                hoja_1.cell(1,68).string('T9(11302 H) SEGUNDO')
                                hoja_1.cell(1,69).string('T10(11342 H) SEGUNDO')
                                hoja_1.cell(1,70).string('T11(1382 H) SEGUNDO')
                                hoja_1.cell(1,71).string('T12(11422 H) SEGUNDO')
                                hoja_1.cell(1,72).string('T13(10728 V) SEGUNDO')
                                hoja_1.cell(1,73).string('T1(10728H) TERCERO')
                                hoja_1.cell(1,74).string('T2(10768 H) TERCERO')
                                hoja_1.cell(1,75).string('T3(10808 H) TERCERO')
                                hoja_1.cell(1,76).string('T4(10808 H) TERCERO')
                                hoja_1.cell(1,77).string('T5(10888 H) TERCERO')
                                hoja_1.cell(1,78).string('T6(10928 H) TERCERO')
                                hoja_1.cell(1,79).string('T7(11222 H) TERCERO')
                                hoja_1.cell(1,80).string('T8(11262 H) TERCERO')
                                hoja_1.cell(1,81).string('T9(11302 H) TERCERO')
                                hoja_1.cell(1,82).string('T10(11342 H) TERCERO')
                                hoja_1.cell(1,83).string('T11(1382 H) TERCERO')
                                hoja_1.cell(1,84).string('T12(11422 H) TERCERO')
                                hoja_1.cell(1,85).string('T13(10728 V) TERCERO')
                                hoja_1.cell(1,86).string('OBSERVACIONES')
                                hoja_1.cell(1,87).string('UTILIZA MATERIAL CON AUTORIZACIÓN CLIENTE')
                                hoja_1.cell(1,88).string('SE REALIZA REPARACIÓN MENOR')
                                hoja_1.cell(1,89).string('SOLUCIONES')
                                hoja_1.cell(1,90).string('CABLE ENTEL UTILIZADO')
                                hoja_1.cell(1,91).string('CONECTORES')
                                hoja_1.cell(1,92).string('AMARRAS')
                                hoja_1.cell(1,93).string('PASAMUROS UTILIZADOS')
                                hoja_1.cell(1,94).string('TIRAFONDOS INSTALADOS')
                                hoja_1.cell(1,95).string('VOLTAJE FASE NEUTRO')
                                hoja_1.cell(1,96).string('VOLTAJE FASE TIERRA')
                                hoja_1.cell(1,97).string('VOLTAJE NEUTRO TIERRA')
                                hoja_1.cell(1,98).string('CODIGO DECODIFICADOR')
                                hoja_1.cell(1,99).string('COORDENADAS')
                            }
                            hoja_1.cell(i+2,2).string((aux[0].username || '').toString())
                            hoja_1.cell(i+2,3).number(parseInt(aux[84].respuesta) || 0)
                            hoja_1.cell(i+2,4).number(parseInt(aux[83].respuesta) || 0)
                            hoja_1.cell(i+2,5).date(moment(aux[0].create_time,'YYYY-MM-DDTHH:mm:ss:SSSZ').subtract(timezone, 'hours').format()).style({numberFormat: 'dd-mm-yyyy'})
                            hoja_1.cell(i+2,6).date(moment(aux[0].create_time, 'YYYY-MM-DDTHH:mm:ss:SSSZ').subtract(timezone, 'hours').format()).style({numberFormat: 'HH:MM'})
                            hoja_1.cell(i+2,15).string((aux[0].respuesta || '').toString())

                            hoja_1.cell(i+2,15).string((aux[0].respuesta || '').toString())
                            hoja_1.cell(i+2,16).string((aux[1].respuesta || '').toString())
                            hoja_1.cell(i+2,17).string((aux[2].respuesta || '').toString())
                            hoja_1.cell(i+2,18).string((aux[3].respuesta || '').toString())
                            hoja_1.cell(i+2,19).string((aux[4].respuesta || '').toString())
                            hoja_1.cell(i+2,20).string((aux[5].respuesta || '').toString())
                            hoja_1.cell(i+2,21).string((aux[6].respuesta || '').toString())
                            hoja_1.cell(i+2,22).string((aux[7].respuesta || '').toString())
                            hoja_1.cell(i+2,23).string((aux[8].respuesta || '').toString())
                            hoja_1.cell(i+2,24).string((aux[9].respuesta || '').toString())
                            hoja_1.cell(i+2,25).string((aux[10].respuesta || '').toString())
                            hoja_1.cell(i+2,26).string((aux[11].respuesta || '').toString())
                            hoja_1.cell(i+2,27).string((aux[12].respuesta || '').toString())
                            hoja_1.cell(i+2,28).string((aux[13].respuesta || '').toString())
                            hoja_1.cell(i+2,29).string((aux[14].respuesta || '').toString())
                            hoja_1.cell(i+2,30).string((aux[15].respuesta || '').toString())
                            hoja_1.cell(i+2,31).string((aux[16].respuesta || '').toString())
                            hoja_1.cell(i+2,32).string((aux[17].respuesta || '').toString())
                            hoja_1.cell(i+2,33).string((aux[18].respuesta || '').toString())
                            hoja_1.cell(i+2,34).string((aux[19].respuesta || '').toString())
                            hoja_1.cell(i+2,35).string((aux[20].respuesta || '').toString())
                            hoja_1.cell(i+2,36).string((aux[21].respuesta || '').toString())
                            hoja_1.cell(i+2,37).string((aux[22].respuesta || '').toString())
                            hoja_1.cell(i+2,38).string((aux[23].respuesta || '').toString())
                            hoja_1.cell(i+2,39).string((aux[24].respuesta || '').toString())
                            hoja_1.cell(i+2,40).string((aux[25].respuesta || '').toString())
                            hoja_1.cell(i+2,41).string((aux[26].respuesta || '').toString())
                            hoja_1.cell(i+2,42).string((aux[27].respuesta || '').toString())
                            hoja_1.cell(i+2,43).string((aux[28].respuesta || '').toString())
                            hoja_1.cell(i+2,44).string((aux[29].respuesta || '').toString())
                            hoja_1.cell(i+2,45).string((aux[30].respuesta || '').toString())
                            hoja_1.cell(i+2,46).string((aux[31].respuesta || '').toString())
                            hoja_1.cell(i+2,47).string((aux[32].respuesta || '').toString())
                            hoja_1.cell(i+2,48).string((aux[33].respuesta || '').toString())
                            hoja_1.cell(i+2,49).string((aux[34].respuesta || '').toString())
                            hoja_1.cell(i+2,50).string((aux[35].respuesta || '').toString())
                            hoja_1.cell(i+2,51).string((aux[36].respuesta || '').toString())
                            hoja_1.cell(i+2,52).string((aux[37].respuesta || '').toString())
                            hoja_1.cell(i+2,53).string((aux[38].respuesta || '').toString())
                            hoja_1.cell(i+2,54).string((aux[39].respuesta || '').toString())
                            hoja_1.cell(i+2,55).string((aux[40].respuesta || '').toString())
                            hoja_1.cell(i+2,56).string((aux[41].respuesta || '').toString())
                            hoja_1.cell(i+2,57).string((aux[42].respuesta || '').toString())
                            hoja_1.cell(i+2,58).string((aux[43].respuesta || '').toString())
                            hoja_1.cell(i+2,59).string((aux[44].respuesta || '').toString())
                            hoja_1.cell(i+2,60).string((aux[45].respuesta || '').toString())
                            hoja_1.cell(i+2,61).string((aux[46].respuesta || '').toString())
                            hoja_1.cell(i+2,62).string((aux[47].respuesta || '').toString())
                            hoja_1.cell(i+2,63).string((aux[48].respuesta || '').toString())
                            hoja_1.cell(i+2,64).string((aux[49].respuesta || '').toString())
                            hoja_1.cell(i+2,65).string((aux[50].respuesta || '').toString())
                            hoja_1.cell(i+2,66).string((aux[51].respuesta || '').toString())
                            hoja_1.cell(i+2,67).string((aux[52].respuesta || '').toString())
                            hoja_1.cell(i+2,68).string((aux[53].respuesta || '').toString())
                            hoja_1.cell(i+2,69).string((aux[54].respuesta || '').toString())
                            hoja_1.cell(i+2,70).string((aux[55].respuesta || '').toString())
                            hoja_1.cell(i+2,71).string((aux[56].respuesta || '').toString())
                            hoja_1.cell(i+2,72).string((aux[57].respuesta || '').toString())
                            hoja_1.cell(i+2,73).string((aux[58].respuesta || '').toString())
                            hoja_1.cell(i+2,74).string((aux[59].respuesta || '').toString())
                            hoja_1.cell(i+2,75).string((aux[60].respuesta || '').toString())
                            hoja_1.cell(i+2,76).string((aux[61].respuesta || '').toString())
                            hoja_1.cell(i+2,77).string((aux[62].respuesta || '').toString())
                            hoja_1.cell(i+2,78).string((aux[63].respuesta || '').toString())
                            hoja_1.cell(i+2,79).string((aux[64].respuesta || '').toString())
                            hoja_1.cell(i+2,80).string((aux[65].respuesta || '').toString())
                            hoja_1.cell(i+2,81).string((aux[66].respuesta || '').toString())
                            hoja_1.cell(i+2,82).string((aux[67].respuesta || '').toString())
                            hoja_1.cell(i+2,83).string((aux[68].respuesta || '').toString())
                            hoja_1.cell(i+2,84).string((aux[69].respuesta || '').toString())
                            hoja_1.cell(i+2,85).string((aux[70].respuesta || '').toString())
                            hoja_1.cell(i+2,86).string((aux[71].respuesta || '').toString())
                            hoja_1.cell(i+2,87).string((aux[72].respuesta || '').toString())
                            hoja_1.cell(i+2,88).string((aux[75].respuesta ||'').toString())
                            hoja_1.cell(i+2,89).string((aux[73].respuesta ||'').toString())
                            hoja_1.cell(i+2,90).string((aux[74].respuesta ||'').toString())
                            hoja_1.cell(i+2,91).string((aux[76].respuesta ||'').toString())
                            hoja_1.cell(i+2,92).string((aux[77].respuesta ||'').toString())
                            hoja_1.cell(i+2,93).string((aux[78].respuesta ||'').toString())
                            hoja_1.cell(i+2,94).string((aux[79].respuesta ||'').toString())
                            hoja_1.cell(i+2,95).string((aux[80].respuesta ||'').toString())
                            hoja_1.cell(i+2,96).string((aux[81].respuesta ||'').toString())
                            hoja_1.cell(i+2,97).string((aux[82].respuesta ||'').toString())
                            hoja_1.cell(i+2,98).string(('').toString())
                            hoja_1.cell(i+2,99).string((aux[0].coordenadas || '').toString())
                        } else if (data.tipo_formulario.toString() === 'instalacion' && data.empresa.toString() === 'Claro')
                        {
                            if(i===0){
                                hoja_1.cell(1,1).string('N°')
                                hoja_1.cell(1,2).string('USUARIO')
                                hoja_1.cell(1,3).string('FOLIO')
                                hoja_1.cell(1,4).string('NUMERO DE OT SERVICIO')
                                hoja_1.cell(1,5).string('FECHA')
                                hoja_1.cell(1,6).string('HORA')
                                hoja_1.cell(1,7).string('NOMBRE DE CLIENTE')
                                hoja_1.cell(1,8).string('RUT')
                                hoja_1.cell(1,9).string('DIRECCION')
                                hoja_1.cell(1,10).string('COMUNA')
                                hoja_1.cell(1,11).string('EMPRESA INSTALADORA')
                                hoja_1.cell(1,12).string('TÉCNICO')
                                hoja_1.cell(1,13).string('FECHA DE SERVICIO')
                                hoja_1.cell(1,14).string('TIPO DE VENTA')
                                hoja_1.cell(1,15).string('LOS TÉCNICOS CUMPLIERON CON FECHA Y HORA ACORDADA')
                                hoja_1.cell(1,16).string('TÉCNICO SE IDENTIFICÓ CON CREDENCIAL ,NOMBRE, APELLIDO')
                                hoja_1.cell(1,17).string('VESTÍAN UNIFORME Y CORRECTAMENTE ORDENADOS')
                                hoja_1.cell(1,18).string('EXPLICARON EL DETALLE DEL TRABAJO ANTES DE COMENZAR')
                                hoja_1.cell(1,19).string('EL TRATO FUE CORDIAL DURANTE LA VISITA')
                                hoja_1.cell(1,20).string('CONTABAN CON LAS HERRAMIENTAS NECESARIAS')
                                hoja_1.cell(1,21).string('RESPONDIERON SUS DUDAS DURANTE LA ACTIVIDAD EJECUTADA')
                                hoja_1.cell(1,22).string('DEJARON COPIA DE ORDEN DE TRABAJO')
                                hoja_1.cell(1,23).string('EFECTUARON CAPACITACIÓN DEL USO DE LOS EQUIPOS')
                                hoja_1.cell(1,24).string('QUEDARON TODOS LOS SERVICIOS FUNCIONANDO CORRECTAMENTE, AL TERMINO DE LA ACTIVIDAD.')
                                hoja_1.cell(1,25).string('DEJARON EL LUGAR LIMPIO AL CONCLUIR LA ACTIVIDAD')
                                hoja_1.cell(1,26).string('TÉCNICO EXPLICO NO DESENCHUFAR  EQUIPOS DE ELECTRICIDAD (DECOS-C.M.EMTA)')
                                hoja_1.cell(1,27).string('ENTREGA CLAVE DE ACCESO WIFI Y PERSONALIZADA A CLIENTE')
                                hoja_1.cell(1,28).string('CAPACITO EN EL USO DE CONTROL REMOTO DEL DECODIFICADOR')
                                hoja_1.cell(1,29).string('FIJACIÓN DE ANTENA CON (4 PERNOS).')
                                hoja_1.cell(1,30).string('CONECTOR LNB PROTEGIDO')
                                hoja_1.cell(1,31).string('ANTENA DEBIDAMENTE FIRME ( SIN MOVIMIENTOS)')
                                hoja_1.cell(1,32).string('ALTURA ACOMETIDA EN NORMA (4,5MTS)')
                                hoja_1.cell(1,33).string('LA ACOMETIDA ES NUEVA ( NO REUTILIZADA)')
                                hoja_1.cell(1,34).string('ESTÁ INSTALADA CORRECTAMENTE FICHA DE ABONADO Y GOMA EN TAP')
                                hoja_1.cell(1,35).string('LOOP DE MANTENCIÓN ')
                                hoja_1.cell(1,36).string('RUTEO Y CABLEADO CORRECTO ( 40 CMS DISTANCIA ENTRE GRAMPAS)')
                                hoja_1.cell(1,37).string('FIJACIÓN DE SPLITERS')
                                hoja_1.cell(1,38).string('TIENE PASAMUROS EXTERIOR')
                                hoja_1.cell(1,39).string('TIENE LOOP DE GOTEO BOTA AGUA')
                                hoja_1.cell(1,40).string('LOS NIVELES ESTÁN DENTRO DE RANGO')
                                hoja_1.cell(1,41).string('RUTEO Y GRAMPEADO CORRECTOS ( 40 CM. DISTANCIA ENTRE GRAMPAS)')
                                hoja_1.cell(1,42).string('CURVA  DE CABLEADO MAYOR O IGUAL A  90 GRADOS')
                                hoja_1.cell(1,43).string('CONECTOR ARMADO Y PRENSADO CORRECTAMENTE')
                                hoja_1.cell(1,44).string('USO CONECTOR DE COMPRESIÓN CLARO')
                                hoja_1.cell(1,45).string('CABLE PIN ES NUEVO')
                                hoja_1.cell(1,46).string('CONECTORES CORRECTAMENTE TORQUEADOS ')
                                hoja_1.cell(1,47).string('TIENE FILTRO HUM EN INSTALACIÓN DE TV')
                                hoja_1.cell(1,48).string('TIENE CABLE  HDMI EN DECODIFICADOR Y TV  HD')
                                hoja_1.cell(1,49).string('DEJA  EQUIPO MODO NAT ( CM-EMTA)')
                                hoja_1.cell(1,50).string('CERTIFICA / CAMBIA CANAL DE TRANSMISIÓN DE WIFI')
                                hoja_1.cell(1,51).string('INFORMÓ NÚMERO TELEFÓNICO ASIGNADO')
                                hoja_1.cell(1,52).string('DIRECCIÓN CORRECTA')
                                hoja_1.cell(1,53).string('TÉCNICO VISITO DOMICILIO')
                                hoja_1.cell(1,54).string('HFC/DTH')
                                hoja_1.cell(1,55).string('DECOS STD.')
                                hoja_1.cell(1,56).string('DECOS H.D.')
                                hoja_1.cell(1,57).string('CANTIDAD EQUIPOS CORRESPONDE A CONTRATO')
                                hoja_1.cell(1,58).string('1 TP (12092) N. SEÑAL')
                                hoja_1.cell(1,59).string('1 TP (12092) N. CALIDAD')
                                hoja_1.cell(1,60).string('1 TP (12092) C/N')
                                hoja_1.cell(1,61).string('1 TP (12172) N. SEÑAL')
                                hoja_1.cell(1,62).string('1 TP (12172) N. CALIDAD')
                                hoja_1.cell(1,63).string('1 TP (12172) C/N')
                                hoja_1.cell(1,64).string('TX')
                                hoja_1.cell(1,65).string('RX')
                                hoja_1.cell(1,66).string('SNR')
                                hoja_1.cell(1,67).string('OBSERVACIONES')
                                hoja_1.cell(1,68).string('SE GENERA VISITA TÉCNICA POR GARANTIA')
                                hoja_1.cell(1,69).string('SE REALIZA REPARACIÓN MENOR')
                                hoja_1.cell(1,70).string('REUTILIZADA INSTALACIÓN ')
                                hoja_1.cell(1,71).string('1004311 - CONECTORES RG-06 F A COMPRESIÓN')
                                hoja_1.cell(1,72).string('1008635 - CABLE COAXIAL DOBLE MALLA RG-6 BLANCO SIN MENSAJERO (INDOOR)(1)')
                                hoja_1.cell(1,73).string('1004177 - ACOPLADORES DIRECCIONAL INTERIOR 1 VÍA 9DB')
                                hoja_1.cell(1,74).string('1004178 - ACOPLADORES DIRECCIONAL INTERIOR 1 VÍA 12DB')
                                hoja_1.cell(1,75).string('1004271 - GRAMPA BLANCA TELEFÓNICA N° 7 ( PIN INTERIOR )')
                                hoja_1.cell(1,76).string('1004174 - SPLITTER 3 VÍAS ( 7 DB )')
                                hoja_1.cell(1,77).string('1004171 - AMARRA CABLES NYLON 4,8 X 15,6')
                                hoja_1.cell(1,78).string('1004167 - GOMAS PARA TAPS')
                                hoja_1.cell(1,79).string('1004179 - GRAMPA RG-6 BLANCAS')
                                hoja_1.cell(1,80).string('1004180 - GRAMPA RG-6 NEGRAS')
                                hoja_1.cell(1,81).string('1004812 - BLOQUEADOR DE VOLTAJE')
                                hoja_1.cell(1,82).string('1004183 - ATENUADOR FAM 3')
                                hoja_1.cell(1,83).string('1004184 - ATENUADOR FAM 6')
                                hoja_1.cell(1,84).string('1004185 - ATENUADOR FAM 8')
                                hoja_1.cell(1,85).string('1004186 - ATENUADOR FAM 10')
                                hoja_1.cell(1,86).string('1004173 - SPLITTER 2 VÍAS ( 4 DB)')
                                hoja_1.cell(1,87).string('1003508 - CONECTOR RJ-45')
                                hoja_1.cell(1,88).string('1003507 - CONECTOR RJ-11')
                                hoja_1.cell(1,89).string('1004270 - FICHA ABONADO (MARCA ACOMETIDA) ROJO')
                                hoja_1.cell(1,90).string('1003553 - ROSETA TELEFÓNICA RJ-11')
                                hoja_1.cell(1,91).string('1004181 - CONECTORES GROUND BLOCK')
                                hoja_1.cell(1,92).string('1004518 - CONTROL REMOTO CAJA DIGITAL')
                                hoja_1.cell(1,93).string('1008608 - CABLE TELEFONICO PLANO 4 CONDUCTORES')
                                hoja_1.cell(1,94).string('1004409 - PILAS ALCALINAS AAA')
                                hoja_1.cell(1,95).string('1004526 - CABLE VIDEO COMPONENTE 3 CONEXIONES')
                                hoja_1.cell(1,96).string('1004836 - CABLE HDMI')
                                hoja_1.cell(1,97).string('1004233 - CABLE AUDIO VIDEO RCA')
                                hoja_1.cell(1,98).string('1004176 - ACOPLADORES DIRECCIONAL INTERIOR 1 VÍA 6DB')
                                hoja_1.cell(1,99).string('1004288 - LNB')
                                hoja_1.cell(1,100).string('1008635 - CABLE COAXIAL BLANCO')
                                hoja_1.cell(1,101).string('1004311 - CONECTORES')
                                hoja_1.cell(1,102).string('1004672 - LNB DUAL')
                                hoja_1.cell(1,103).string('1004791 - LNB QUAD')
                                hoja_1.cell(1,104).string('1004648 - SPLITER')
                                hoja_1.cell(1,105).string('CÓDIGO DECODIFICADOR')
                                hoja_1.cell(1,106).string('COORDENADAS')
                            }

                            hoja_1.cell(i+2,2).string((aux[0].username || '').toString())
                            hoja_1.cell(i+2,3).number(parseInt(aux[90].respuesta) || 0)
                            hoja_1.cell(i+2,4).number(parseInt(aux[89].respuesta) || 0)
                            hoja_1.cell(i+2,5).date(moment(aux[0].create_time,'YYYY-MM-DDTHH:mm:ss:SSSZ').subtract(timezone, 'hours').format()).style({numberFormat: 'dd-mm-yyyy'})
                            hoja_1.cell(i+2,6).date(moment(aux[0].create_time, 'YYYY-MM-DDTHH:mm:ss:SSSZ').subtract(timezone, 'hours').format()).style({numberFormat: 'HH:MM'})
                            hoja_1.cell(i+2,15).string((aux[0].respuesta || '').toString())
                            hoja_1.cell(i+2,16).string((aux[1].respuesta || '').toString())
                            hoja_1.cell(i+2,17).string((aux[2].respuesta || '').toString())
                            hoja_1.cell(i+2,18).string((aux[3].respuesta || '').toString())
                            hoja_1.cell(i+2,19).string((aux[4].respuesta || '').toString())
                            hoja_1.cell(i+2,20).string((aux[5].respuesta || '').toString())
                            hoja_1.cell(i+2,21).string((aux[6].respuesta || '').toString())
                            hoja_1.cell(i+2,22).string((aux[7].respuesta || '').toString())
                            hoja_1.cell(i+2,23).string((aux[8].respuesta || '').toString())
                            hoja_1.cell(i+2,24).string((aux[9].respuesta || '').toString())
                            hoja_1.cell(i+2,25).string((aux[10].respuesta || '').toString())
                            hoja_1.cell(i+2,26).string((aux[11].respuesta || '').toString())
                            hoja_1.cell(i+2,27).string((aux[12].respuesta || '').toString())
                            hoja_1.cell(i+2,28).string((aux[13].respuesta || '').toString())
                            hoja_1.cell(i+2,29).string((aux[14].respuesta || '').toString())
                            hoja_1.cell(i+2,30).string((aux[15].respuesta || '').toString())
                            hoja_1.cell(i+2,31).string((aux[16].respuesta || '').toString())
                            hoja_1.cell(i+2,32).string((aux[17].respuesta || '').toString())
                            hoja_1.cell(i+2,33).string((aux[18].respuesta || '').toString())
                            hoja_1.cell(i+2,34).string((aux[19].respuesta || '').toString())
                            hoja_1.cell(i+2,35).string((aux[20].respuesta || '').toString())
                            hoja_1.cell(i+2,36).string((aux[21].respuesta || '').toString())
                            hoja_1.cell(i+2,37).string((aux[22].respuesta || '').toString())
                            hoja_1.cell(i+2,38).string((aux[23].respuesta || '').toString())
                            hoja_1.cell(i+2,39).string((aux[24].respuesta || '').toString())
                            hoja_1.cell(i+2,40).string((aux[25].respuesta || '').toString())
                            hoja_1.cell(i+2,41).string((aux[26].respuesta || '').toString())
                            hoja_1.cell(i+2,42).string((aux[27].respuesta || '').toString())
                            hoja_1.cell(i+2,43).string((aux[28].respuesta || '').toString())
                            hoja_1.cell(i+2,44).string((aux[29].respuesta || '').toString())
                            hoja_1.cell(i+2,45).string((aux[30].respuesta || '').toString())
                            hoja_1.cell(i+2,46).string((aux[31].respuesta || '').toString())
                            hoja_1.cell(i+2,47).string((aux[32].respuesta || '').toString())
                            hoja_1.cell(i+2,48).string((aux[33].respuesta || '').toString())
                            hoja_1.cell(i+2,49).string((aux[34].respuesta || '').toString())
                            hoja_1.cell(i+2,50).string((aux[35].respuesta || '').toString())
                            hoja_1.cell(i+2,51).string((aux[36].respuesta || '').toString())
                            hoja_1.cell(i+2,52).string((aux[37].respuesta || '').toString())
                            hoja_1.cell(i+2,53).string((aux[38].respuesta || '').toString())
                            hoja_1.cell(i+2,54).string((aux[39].respuesta || '').toString())
                            hoja_1.cell(i+2,55).string((aux[40].respuesta || '').toString())
                            hoja_1.cell(i+2,56).string((aux[41].respuesta || '').toString())
                            hoja_1.cell(i+2,57).string((aux[42].respuesta || '').toString())
                            hoja_1.cell(i+2,58).string((aux[43].respuesta || '').toString())
                            hoja_1.cell(i+2,59).string((aux[44].respuesta || '').toString())
                            hoja_1.cell(i+2,60).string((aux[45].respuesta || '').toString())
                            hoja_1.cell(i+2,61).string((aux[46].respuesta || '').toString())
                            hoja_1.cell(i+2,62).string((aux[47].respuesta || '').toString())
                            hoja_1.cell(i+2,63).string((aux[48].respuesta || '').toString())
                            hoja_1.cell(i+2,64).string((aux[49].respuesta || '').toString())
                            hoja_1.cell(i+2,65).string((aux[50].respuesta || '').toString())
                            hoja_1.cell(i+2,66).string((aux[51].respuesta || '').toString())
                            hoja_1.cell(i+2,67).string((aux[52].respuesta || '').toString())
                            hoja_1.cell(i+2,68).string((aux[53].respuesta || '').toString())
                            hoja_1.cell(i+2,69).string((aux[54].respuesta || '').toString())
                            hoja_1.cell(i+2,70).string((aux[55].respuesta || '').toString())
                            hoja_1.cell(i+2,71).string((aux[56].respuesta || '').toString())
                            hoja_1.cell(i+2,72).string((aux[57].respuesta || '').toString())
                            hoja_1.cell(i+2,73).string((aux[58].respuesta || '').toString())
                            hoja_1.cell(i+2,74).string((aux[59].respuesta || '').toString())
                            hoja_1.cell(i+2,75).string((aux[60].respuesta || '').toString())
                            hoja_1.cell(i+2,76).string(('').toString())
                            hoja_1.cell(i+2,77).string((aux[61].respuesta || '').toString())
                            hoja_1.cell(i+2,77).string((aux[61].respuesta || '').toString())
                            hoja_1.cell(i+2,78).string((aux[62].respuesta || '').toString())
                            hoja_1.cell(i+2,79).string((aux[63].respuesta || '').toString())
                            hoja_1.cell(i+2,80).string((aux[64].respuesta || '').toString())
                            hoja_1.cell(i+2,81).string((aux[65].respuesta || '').toString())
                            hoja_1.cell(i+2,82).string((aux[66].respuesta || '').toString())
                            hoja_1.cell(i+2,83).string((aux[67].respuesta || '').toString())
                            hoja_1.cell(i+2,84).string((aux[68].respuesta || '').toString())
                            hoja_1.cell(i+2,85).string((aux[69].respuesta || '').toString())
                            hoja_1.cell(i+2,86).string((aux[70].respuesta || '').toString())
                            hoja_1.cell(i+2,87).string((aux[71].respuesta || '').toString())
                            hoja_1.cell(i+2,88).string((aux[72].respuesta || '').toString())
                            hoja_1.cell(i+2,89).string((aux[73].respuesta || '').toString())
                            hoja_1.cell(i+2,90).string((aux[74].respuesta || '').toString())
                            hoja_1.cell(i+2,91).string((aux[75].respuesta || '').toString())
                            hoja_1.cell(i+2,92).string((aux[76].respuesta || '').toString())
                            hoja_1.cell(i+2,93).string((aux[77].respuesta || '').toString())
                            hoja_1.cell(i+2,94).string((aux[78].respuesta || '').toString())
                            hoja_1.cell(i+2,95).string((aux[79].respuesta || '').toString())
                            hoja_1.cell(i+2,96).string((aux[80].respuesta || '').toString())
                            hoja_1.cell(i+2,97).string((aux[81].respuesta || '').toString())
                            hoja_1.cell(i+2,98).string((aux[82].respuesta || '').toString())
                            hoja_1.cell(i+2,99).string((aux[83].respuesta || '').toString())
                            hoja_1.cell(i+2,100).string((aux[84].respuesta || '').toString())
                            hoja_1.cell(i+2,101).string((aux[85].respuesta || '').toString())
                            hoja_1.cell(i+2,102).string((aux[86].respuesta || '').toString())
                            hoja_1.cell(i+2,103).string((aux[87].respuesta || '').toString())
                            hoja_1.cell(i+2,104).string((aux[88].respuesta || '').toString())
                            hoja_1.cell(i+2,105).string(('').toString())
                            hoja_1.cell(i+2,106).string((aux[90].coordenadas || '').toString())

                        } else if (data.tipo_formulario.toString() === 'mantencion')
                        {
                            if (i===0){
                                hoja_1.cell(1,1).string('N°')
                                hoja_1.cell(1,2).string('USUARIO')
                                hoja_1.cell(1,3).string('FOLIO')
                                hoja_1.cell(1,4).string('NUMERO DE OT SERVICIO')
                                hoja_1.cell(1,5).string('FECHA')
                                hoja_1.cell(1,6).string('HORA')
                                hoja_1.cell(1,7).string('NOMBRE DE CLIENTE')
                                hoja_1.cell(1,8).string('RUT')
                                hoja_1.cell(1,9).string('DIRECCION')
                                hoja_1.cell(1,10).string('COMUNA')
                                hoja_1.cell(1,11).string('EMPRESA INSTALADORA')
                                hoja_1.cell(1,12).string('TÉCNICO')
                                hoja_1.cell(1,13).string('FECHA DE SERVICIO')
                                hoja_1.cell(1,14).string('TIPO DE VENTA')
                                hoja_1.cell(1,15).string('LOS TÉCNICOS CUMPLIERON CON FECHA Y HORA ACORDADA')
                                hoja_1.cell(1,16).string('TÉCNICO SE IDENTIFICÓ CON CREDENCIAL ,NOMBRE, APELLIDO')
                                hoja_1.cell(1,17).string('VESTÍAN UNIFORME Y CORRECTAMENTE ORDENADOS')
                                hoja_1.cell(1,18).string('EXPLICARON EL DETALLE DEL TRABAJO ANTES DE COMENZAR')
                                hoja_1.cell(1,19).string('EL TRATO FUE CORDIAL DURANTE LA VISITA')
                                hoja_1.cell(1,20).string('CONTABAN CON LAS HERRAMIENTAS NECESARIAS')
                                hoja_1.cell(1,21).string('RESPONDIERON SUS DUDAS DURANTE LA ACTIVIDAD EJECUTADA')
                                hoja_1.cell(1,22).string('DEJARON COPIA DE ORDEN DE TRABAJO')
                                hoja_1.cell(1,23).string('EFECTUARON CAPACITACIÓN DEL USO DE LOS EQUIPOS')
                                hoja_1.cell(1,24).string('QUEDARON TODOS LOS SERVICIOS FUNCIONANDO CORRECTAMENTE, AL TERMINO DE LA ACTIVIDAD.')
                                hoja_1.cell(1,25).string('DEJARON EL LUGAR LIMPIO AL CONCLUIR LA ACTIVIDAD')
                                hoja_1.cell(1,26).string('ENTREGA CLAVE DE ACCESO WIFI Y PERSONALIZADA A CLIENTE')
                                hoja_1.cell(1,27).string('TÉCNICO CERTIFICA FIJACIÓN DE ANTENA ( 4 PERNOS)')
                                hoja_1.cell(1,28).string('TÉCNICO DEJA ANTENA DEBIDAMENTE FIRME ( SIN MOVIMIENTO)')
                                hoja_1.cell(1,29).string('TÉCNICO  CAMBIA ACOMETIDA DAÑADA')
                                hoja_1.cell(1,30).string('TÉCNICO CERTIFICA O CAMBIA GROUND BLOCK')
                                hoja_1.cell(1,31).string('TÉCNICO FIJA SPLITER')
                                hoja_1.cell(1,32).string('TÉCNICO CERTIFICÓ FICHA DE ABONADO Y GOMA EN TAP')
                                hoja_1.cell(1,33).string('TÉCNICO CERTIFICA O CAMBIA CONECTORES')
                                hoja_1.cell(1,34).string('TÉCNICO DEJA CONECTORES CORRECTAMENTE TORQUEADOS ')
                                hoja_1.cell(1,35).string('TÉCNICO CERTIFICA O CAMBIA CABLEADO INTERIOR')
                                hoja_1.cell(1,36).string('TÉCNICO CERTIFICA O CAMBIA CABLE PIN')
                                hoja_1.cell(1,37).string('TÉCNICO CERTIFICA O CAMBIA ROSETA TELEFONICA')
                                hoja_1.cell(1,38).string('TÉCNICO CERTIFICA O CAMBIA EQUIPO TELEFONICO')
                                hoja_1.cell(1,39).string('TÉCNICO DEJA CONECTORES CORRECTAMENTE  TORQUEADOS')
                                hoja_1.cell(1,40).string('TÉCNICO CERTIFICA O CAMBIA CABLE HDMI')
                                hoja_1.cell(1,41).string('TÉCNICO CERTIFICA O CAMBIA CABLE RCA')
                                hoja_1.cell(1,42).string('TÉCNICO CERTIFICA O CAMBIA DECODIFICADOR/CMO MTA')
                                hoja_1.cell(1,43).string('TÉCNICO DEJÓ EQUIPO MODO NAT ( CM-EMTA)')
                                hoja_1.cell(1,44).string('TÉCNICO CERTIFICA O CAMBIA CANAL DE TRANSMISION DE WIFI')
                                hoja_1.cell(1,45).string('TÉCNICO CERTIFICA NIVELES OPERACIONES (CM-MTA-DECO)')
                                hoja_1.cell(1,46).string('TÉCNICO CERTIFICA O CAMBIA CONTROL REMOTO')
                                hoja_1.cell(1,47).string('TÉCNICO CERTIFICA O CAMBIA PASIVOS SPLITER- DC')
                                hoja_1.cell(1,48).string('DIRECCIÓN CORRECTA')
                                hoja_1.cell(1,49).string('TÉCNICO VISITO DOMICILIO')
                                hoja_1.cell(1,50).string('HFC/DTH')
                                hoja_1.cell(1,51).string('DECOS STD.')
                                hoja_1.cell(1,52).string('DECOS H.D.')
                                hoja_1.cell(1,53).string('CANTIDAD EQUIPOS CORRESPONDE A CONTRATO')
                                hoja_1.cell(1,54).string('1 TP (12092) N. SEÑAL')
                                hoja_1.cell(1,55).string('1 TP (12092) N. CALIDAD')
                                hoja_1.cell(1,56).string('1 TP (12092) C/N')
                                hoja_1.cell(1,57).string('1 TP (12172) N. SEÑAL')
                                hoja_1.cell(1,58).string('1 TP (12172) N. CALIDAD')
                                hoja_1.cell(1,59).string('1 TP (12172) C/N')
                                hoja_1.cell(1,60).string('TX')
                                hoja_1.cell(1,61).string('RX')
                                hoja_1.cell(1,62).string('SNR')
                                hoja_1.cell(1,63).string('OBSERVACIONES')
                                hoja_1.cell(1,64).string('SE GENERA VISITA TÉCNICA POR GARANTIA')
                                hoja_1.cell(1,65).string('SE REALIZA REPARACIÓN MENOR')
                                hoja_1.cell(1,66).string('REUTILIZADA INSTALACIÓN ')
                                hoja_1.cell(1,67).string('1004311 - CONECTORES RG-06 F A COMPRESIÓN')
                                hoja_1.cell(1,68).string('1008635 - CABLE COAXIAL DOBLE MALLA RG-6 BLANCO SIN MENSAJERO (INDOOR)(1)')
                                hoja_1.cell(1,69).string('1004177 - ACOPLADORES DIRECCIONAL INTERIOR 1 VÍA 9DB')
                                hoja_1.cell(1,70).string('1004178 - ACOPLADORES DIRECCIONAL INTERIOR 1 VÍA 12DB')
                                hoja_1.cell(1,71).string('1004271 - GRAMPA BLANCA TELEFÓNICA N° 7 ( PIN INTERIOR )')
                                hoja_1.cell(1,72).string('1004174 - SPLITTER 3 VÍAS ( 7 DB )')
                                hoja_1.cell(1,73).string('1004171 - AMARRA CABLES NYLON 4,8 X 15,6')
                                hoja_1.cell(1,74).string('1004167 - GOMAS PARA TAPS')
                                hoja_1.cell(1,75).string('1004179 - GRAMPA RG-6 BLANCAS')
                                hoja_1.cell(1,76).string('1004180 - GRAMPA RG-6 NEGRAS')
                                hoja_1.cell(1,77).string('1004812 - BLOQUEADOR DE VOLTAJE')
                                hoja_1.cell(1,78).string('1004183 - ATENUADOR FAM 3')
                                hoja_1.cell(1,79).string('1004184 - ATENUADOR FAM 6')
                                hoja_1.cell(1,80).string('1004185 - ATENUADOR FAM 8')
                                hoja_1.cell(1,81).string('1004186 - ATENUADOR FAM 10')
                                hoja_1.cell(1,82).string('1004173 - SPLITTER 2 VÍAS ( 4 DB)')
                                hoja_1.cell(1,83).string('1003508 - CONECTOR RJ-45')
                                hoja_1.cell(1,84).string('1003507 - CONECTOR RJ-11')
                                hoja_1.cell(1,85).string('1004270 - FICHA ABONADO (MARCA ACOMETIDA) ROJO')
                                hoja_1.cell(1,86).string('1003553 - ROSETA TELEFÓNICA RJ-11')
                                hoja_1.cell(1,87).string('1004181 - CONECTORES GROUND BLOCK')
                                hoja_1.cell(1,88).string('1004518 - CONTROL REMOTO CAJA DIGITAL')
                                hoja_1.cell(1,89).string('1008608 - CABLE TELEFONICO PLANO 4 CONDUCTORES')
                                hoja_1.cell(1,90).string('1004409 - PILAS ALCALINAS AAA')
                                hoja_1.cell(1,91).string('1004526 - CABLE VIDEO COMPONENTE 3 CONEXIONES')
                                hoja_1.cell(1,92).string('1004836 - CABLE HDMI')
                                hoja_1.cell(1,93).string('1004233 - CABLE AUDIO VIDEO RCA')
                                hoja_1.cell(1,94).string('1004176 - ACOPLADORES DIRECCIONAL INTERIOR 1 VÍA 6DB')
                                hoja_1.cell(1,95).string('1004288 - LNB')
                                hoja_1.cell(1,96).string('1008635 - CABLE COAXIAL BLANCO')
                                hoja_1.cell(1,97).string('1004311 - CONECTORES')
                                hoja_1.cell(1,98).string('1004672 - LNB DUAL')
                                hoja_1.cell(1,99).string('1004791 - LNB QUAD')
                                hoja_1.cell(1,100).string('1004648 - SPLITER')
                                hoja_1.cell(1,101).string('CÓDIGO DECODIFICADOR')
                                hoja_1.cell(1,102).string('COORDENADAS')
                            }
                            //hoja_1.cell(i+2,1).number((aux[0].formulario_id))
                            hoja_1.cell(i+2,2).string((aux[0].username || '').toString())
                            hoja_1.cell(i+2,3).number(parseInt(aux[88].respuesta) || 0)
                            hoja_1.cell(i+2,4).number(parseInt(aux[87].respuesta) || 0)
                            hoja_1.cell(i+2,5).date(moment(aux[0].create_time,'YYYY-MM-DDTHH:mm:ss:SSSZ').subtract(timezone, 'hours').format()).style({numberFormat: 'dd-mm-yyyy'})
                            hoja_1.cell(i+2,6).date(moment(aux[0].create_time, 'YYYY-MM-DDTHH:mm:ss:SSSZ').subtract(timezone, 'hours').format()).style({numberFormat: 'HH:MM'})
                            hoja_1.cell(i+2,15).string((aux[0].respuesta || '').toString())
                            hoja_1.cell(i+2,16).string((aux[1].respuesta || '').toString())
                            hoja_1.cell(i+2,17).string((aux[2].respuesta || '').toString())
                            hoja_1.cell(i+2,18).string((aux[3].respuesta || '').toString())
                            hoja_1.cell(i+2,19).string((aux[4].respuesta || '').toString())
                            hoja_1.cell(i+2,20).string((aux[5].respuesta || '').toString())
                            hoja_1.cell(i+2,21).string((aux[6].respuesta || '').toString())
                            hoja_1.cell(i+2,22).string((aux[7].respuesta || '').toString())
                            hoja_1.cell(i+2,23).string((aux[8].respuesta || '').toString())
                            hoja_1.cell(i+2,24).string((aux[9].respuesta || '').toString())
                            hoja_1.cell(i+2,25).string((aux[10].respuesta || '').toString())
                            hoja_1.cell(i+2,26).string((aux[12].respuesta || '').toString())
                            hoja_1.cell(i+2,27).string((aux[14].respuesta || '').toString())
                            hoja_1.cell(i+2,28).string((aux[15].respuesta || '').toString())
                            hoja_1.cell(i+2,29).string((aux[16].respuesta || '').toString())
                            hoja_1.cell(i+2,30).string((aux[17].respuesta || '').toString())
                            hoja_1.cell(i+2,31).string((aux[18].respuesta || '').toString())
                            hoja_1.cell(i+2,32).string(('').toString())
                            hoja_1.cell(i+2,33).string((aux[20].respuesta || '').toString())
                            hoja_1.cell(i+2,34).string((aux[25].respuesta || '').toString())
                            hoja_1.cell(i+2,35).string((aux[21].respuesta || '').toString())
                            hoja_1.cell(i+2,36).string((aux[22].respuesta || '').toString())
                            hoja_1.cell(i+2,37).string((aux[23].respuesta || '').toString())
                            hoja_1.cell(i+2,38).string((aux[24].respuesta || '').toString())
                            hoja_1.cell(i+2,39).string((aux[25].respuesta || '').toString())
                            hoja_1.cell(i+2,40).string((aux[26].respuesta || '').toString())
                            hoja_1.cell(i+2,41).string((aux[27].respuesta || '').toString())
                            hoja_1.cell(i+2,42).string((aux[28].respuesta || '').toString())
                            hoja_1.cell(i+2,43).string((aux[29].respuesta || '').toString())
                            hoja_1.cell(i+2,44).string((aux[30].respuesta || '').toString())
                            hoja_1.cell(i+2,45).string((aux[31].respuesta || '').toString())
                            hoja_1.cell(i+2,46).string((aux[32].respuesta || '').toString())
                            hoja_1.cell(i+2,47).string((aux[33].respuesta || '').toString())
                            hoja_1.cell(i+2,48).string((aux[34].respuesta || '').toString())
                            hoja_1.cell(i+2,49).string((aux[35].respuesta || '').toString())
                            hoja_1.cell(i+2,50).string((aux[36].respuesta || '').toString())
                            hoja_1.cell(i+2,51).string((aux[37].respuesta || '').toString())
                            hoja_1.cell(i+2,52).string((aux[38].respuesta || '').toString())
                            hoja_1.cell(i+2,53).string((aux[39].respuesta || '').toString())
                            hoja_1.cell(i+2,54).string((aux[40].respuesta || '').toString())
                            hoja_1.cell(i+2,55).string((aux[41].respuesta || '').toString())
                            hoja_1.cell(i+2,56).string((aux[42].respuesta || '').toString())
                            hoja_1.cell(i+2,57).string((aux[43].respuesta || '').toString())
                            hoja_1.cell(i+2,58).string((aux[44].respuesta || '').toString())
                            hoja_1.cell(i+2,59).string((aux[45].respuesta || '').toString())
                            hoja_1.cell(i+2,60).string((aux[46].respuesta || '').toString())
                            hoja_1.cell(i+2,61).string((aux[47].respuesta || '').toString())
                            hoja_1.cell(i+2,62).string((aux[48].respuesta || '').toString())
                            hoja_1.cell(i+2,63).string((aux[49].respuesta || '').toString())
                            hoja_1.cell(i+2,64).string((aux[50].respuesta || '').toString())
                            hoja_1.cell(i+2,65).string((aux[51].respuesta || '').toString())
                            hoja_1.cell(i+2,66).string((aux[52].respuesta || '').toString())
                            hoja_1.cell(i+2,67).string((aux[53].respuesta || '').toString())
                            hoja_1.cell(i+2,68).string((aux[54].respuesta || '').toString())
                            hoja_1.cell(i+2,69).string((aux[55].respuesta || '').toString())
                            hoja_1.cell(i+2,70).string((aux[56].respuesta || '').toString())
                            hoja_1.cell(i+2,71).string((aux[57].respuesta || '').toString())
                            hoja_1.cell(i+2,72).string(('').toString())
                            hoja_1.cell(i+2,73).string((aux[58].respuesta || '').toString())
                            hoja_1.cell(i+2,74).string((aux[59].respuesta || '').toString())
                            hoja_1.cell(i+2,75).string((aux[60].respuesta || '').toString())
                            hoja_1.cell(i+2,76).string((aux[61].respuesta || '').toString())
                            hoja_1.cell(i+2,77).string((aux[62].respuesta || '').toString())
                            hoja_1.cell(i+2,78).string((aux[63].respuesta || '').toString())
                            hoja_1.cell(i+2,79).string((aux[64].respuesta || '').toString())
                            hoja_1.cell(i+2,80).string((aux[65].respuesta || '').toString())
                            hoja_1.cell(i+2,81).string((aux[66].respuesta || '').toString())
                            hoja_1.cell(i+2,82).string((aux[67].respuesta || '').toString())
                            hoja_1.cell(i+2,83).string((aux[68].respuesta || '').toString())
                            hoja_1.cell(i+2,84).string((aux[69].respuesta || '').toString())
                            hoja_1.cell(i+2,85).string((aux[70].respuesta || '').toString())
                            hoja_1.cell(i+2,86).string((aux[71].respuesta || '').toString())
                            hoja_1.cell(i+2,87).string((aux[72].respuesta || '').toString())
                            hoja_1.cell(i+2,88).string((aux[73].respuesta || '').toString())
                            hoja_1.cell(i+2,89).string((aux[74].respuesta || '').toString())
                            hoja_1.cell(i+2,90).string((aux[75].respuesta || '').toString())
                            hoja_1.cell(i+2,91).string((aux[76].respuesta || '').toString())
                            hoja_1.cell(i+2,92).string((aux[77].respuesta || '').toString())
                            hoja_1.cell(i+2,93).string((aux[78].respuesta || '').toString())
                            hoja_1.cell(i+2,94).string((aux[79].respuesta || '').toString())
                            hoja_1.cell(i+2,95).string((aux[80].respuesta || '').toString())
                            hoja_1.cell(i+2,96).string((aux[81].respuesta || '').toString())
                            hoja_1.cell(i+2,97).string((aux[82].respuesta || '').toString())
                            hoja_1.cell(i+2,98).string((aux[83].respuesta || '').toString())
                            hoja_1.cell(i+2,99).string((aux[84].respuesta || '').toString())
                            hoja_1.cell(i+2,100).string((aux[84].respuesta || '').toString())
                            hoja_1.cell(i+2,101).string((aux[86].respuesta || '').toString())
                            hoja_1.cell(i+2,102).string((aux[0].coordenadas || '').toString())


                        } else if(data.tipo_formulario.toString() === 'desconexion')
                        {
                            if (i===0){
                                tipoReporte = 'Desconexion'
                                console.log('entró')
                                hoja_1.cell(1,1).string('N°')
                                hoja_1.cell(1,2).string('USUARIO')
                                hoja_1.cell(1,3).string('FOLIO')
                                hoja_1.cell(1,4).string('NÚMERO DE OT DE SERVICIO')
                                hoja_1.cell(1,5).string('FECHA')
                                hoja_1.cell(1,6).string('HORA')
                                hoja_1.cell(1,7).string('NOMBRE DE CLIENTE')
                                hoja_1.cell(1,8).string('RUT')
                                hoja_1.cell(1,9).string('DIRECCIÓN')
                                hoja_1.cell(1,10).string('COMUNA')
                                hoja_1.cell(1,11).string('EMPRESA INSTALADORA')
                                hoja_1.cell(1,12).string('TÉCNICO')
                                hoja_1.cell(1,13).string('FECHA DE SERVICIO')
                                hoja_1.cell(1,14).string('TIPO DE VENTA')
                                hoja_1.cell(1,15).string('TECNICO CORTA ACOMETIDA')
                                hoja_1.cell(1,16).string('TECNICO RETIRA ACOMETIDA')
                                hoja_1.cell(1,17).string('DESCONEXION OK')
                                hoja_1.cell(1,18).string('CLIENTE ACTIVO')
                                hoja_1.cell(1,19).string('CERTIFICADOR DESCONECTA')
                                hoja_1.cell(1,20).string('SE CORTA ILEGAL')
                                hoja_1.cell(1,21).string('NO PERMITEN REALIZAR CORTE')
                                hoja_1.cell(1,22).string('OBSERVACIONES')
                                hoja_1.cell(1,23).string('COORDENADAS')
                            }

                            //hoja_1.cell(i+2,1).number((aux[0].formulario_id))
                            hoja_1.cell(i+2,2).string((aux[0].username || '').toString())
                            hoja_1.cell(i+2,3).number(parseInt(aux[9].respuesta) || 0)
                            hoja_1.cell(i+2,4).number(parseInt(aux[8].respuesta) || 0)
                            hoja_1.cell(i+2,5).date(moment(aux[0].create_time,'YYYY-MM-DDTHH:mm:ss:SSSZ').subtract(timezone, 'hours').format()).style({numberFormat: 'dd-mm-yyyy'})
                            hoja_1.cell(i+2,6).date(moment(aux[0].create_time, 'YYYY-MM-DDTHH:mm:ss:SSSZ').subtract(timezone, 'hours').format()).style({numberFormat: 'HH:MM'})
                            hoja_1.cell(i+2,15).string((aux[0].respuesta || '').toString())
                            hoja_1.cell(i+2,16).string((aux[1].respuesta || '').toString())
                            hoja_1.cell(i+2,17).string((aux[2].respuesta || '').toString())
                            hoja_1.cell(i+2,18).string((aux[3].respuesta || '').toString())
                            hoja_1.cell(i+2,19).string((aux[4].respuesta || '').toString())
                            hoja_1.cell(i+2,20).string((aux[5].respuesta || '').toString())
                            hoja_1.cell(i+2,21).string((aux[6].respuesta || '').toString())
                            hoja_1.cell(i+2,22).string((aux[7].respuesta || '').toString())
                            hoja_1.cell(i+2,23).string((aux[7].coordenadas || '').toString())
                        }

                        if (i === formsId.length-1){
                            console.log('terminando de escribir en el excel')
                            xl.write(`reporte-${tipoReporte}.xlsx`, res)
                        }
                    })

                    // manejamos algún posible error
                    .catch( (err) => {
                        console.log(err.message)
                    })


                }

            })

            // manejamos algún posible error
            .catch( (err) => {
                console.log(err.message)
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    })

    // Get imgs segun id formulario
    app.get('/imgs/:idFormulario/:token', (req, res) => {
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
        })

        // manejamos algún posible error
        .catch( (err) => {
            console.log(err.message)
            res.status(statusError).json({
                success: false,
                message: err.message
            })
        })
    })

    app.put('/edit-form/:idTipoFormulario/:token', (req, res) => {
        console.log(req.body)
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
        })

        // manejamos algún posible error
        .catch( (err) => {
            console.log(err.message)
            res.status(statusError).json({
                success: false,
                message: err.message
            })
        })
    })

}
