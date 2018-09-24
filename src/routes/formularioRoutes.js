const formulario = require('../models/formulario')
const global = require('../middlewares/auth')

module.exports = (app) => {
    let statusError = 500

    //***************************Formularios Claro***************************

    // Formulario de mantencion hfc id=1
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
            tipo_formulario_id: 1,
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

    // Formulario de mantencion dth id=2
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

    // Formulario de instalacion hfc id=3
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
            tipo_formulario_id: 3,
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

    // Formulario de instalacion dth id=4
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
            data.tipo_formulario_id = 1
        }else if(req.params.empresa.toString() === 'claro' && req.params.tipoFormulario.toString() === 'mantencion' && req.params.subtipoFormulario.toString() === 'dth'){
            data.tipo_formulario_id = 2
        }else if(req.params.empresa.toString() === 'claro' && req.params.tipoFormulario.toString() === 'instalacion' && req.params.subtipoFormulario.toString() === 'hfc'){
            data.tipo_formulario_id = 3
        }else if(req.params.empresa.toString() === 'claro' && req.params.tipoFormulario.toString() === 'instalacion' && req.params.subtipoFormulario.toString() === 'dth'){
            data.tipo_formulario_id = 4
        }else if(req.params.empresa.toString() === 'entel' && req.params.tipoFormulario.toString() === 'instalacion' && req.params.subtipoFormulario.toString() === 'dth'){
            data.tipo_formulario_id = 6
        }
        let auth = new Promise ( (resolve, reject) => {
            global.validateToken(req.params.token, (response, err) => {
                if(!err){
                    console.log('usuario autorizado id =', response.userId)
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
                    console.log('usuario autorizado id =', response.userId)
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
                    console.log('usuario autorizado id =', response.userId)
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
                    console.log('usuario autorizado id =', response.userId)
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
                    console.log('usuario autorizado id =', response.userId)
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
                    console.log('usuario autorizado id =', response.userId)
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
                    console.log('usuario autorizado id =', response.userId)
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

}