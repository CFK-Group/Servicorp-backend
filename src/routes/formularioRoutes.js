const formulario = require('../models/formulario');
const global = require('../middlewares/auth');

module.exports = (app) => {
    let statusError = 500;

    // Formulario de mantencion hfc id=1
    app.post('/formulario/mantencion/hfc', (req, res) => {
        const respuestas = {
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
            cod_decodificador: req.body.cod_decodificador
        };
        let data = {
            latitud: req.body.latitud,
            longitud: req.body.longitud,
            tipo_formulario_id: 1,
            usuario_id: parseInt(req.body.usuario_id)
        };
        let auth = new Promise ( (resolve, reject) => {
            global.validateToken(req.body.token, (response, err) => {
                if(!err){
                    return resolve(true);
                }else{
                    statusError = 401;
                    reject(new Error('Token inválido'));
                }
            })
        });

        auth
            // creamos el formulario
            .then( (resolved, rejected) => {
                return new Promise( (resolve, reject) => {
                    formulario.createForm(data, (err, res) => {
                        return (err) ? reject(new Error('No se ha podido crear un nuevo formulario')) : resolve(res);
                    })
                })
            })

            // enviamos las respuestas a la bdd
            .then( (resolved, rejected) => {
                console.log('ahora guardamos las respuestas: ',resolved);
                data = {
                    tipo_formulario_id: resolved.insertId,
                    respuestas: respuestas
                };
                data = {
                    respuesta 
                }
                return new Promise( (resolve, reject) => {
                    formulario.guardarRespuestas(data, (err, res) => {
                        return (err) ? reject(new Error('No se ha podido guardar las respuestas')) : resolve(data);
                    })
                })
            })

            // guardámos las imágenes en el servidor
            // .then( (resolved, rejected) => {
            //
            // })

            // respondemos al cliente
            .then( (resolved, rejected) => {
                res.status(200).json({
                    success: true,
                    message: `Formulario guardado con éxito`
                })
            })

            // manejamos algún posible error
            .catch( (err) => {
                console.log(err.message);
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    });

    // Formulario de mantencion dth id=2
    app.post('/formulario/mantencion/dth', (req, res) => {
        global.validateToken(req.query.token, (response, err) => {
            if(!err){
                // hacer algo
            }else {
                console.log(`Error en post mantencion dth: ${err.msg}`);
                res.status(500).send('Internal Server Error');
            }
        })
    });

    // Formulario de instalacion hfc id=3
    app.post('/formulario/instalacion/hfc', (req, res) => {
        console.log(req);
        const respuestas = {
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
            cod_decodificador: req.body.cod_decodificador
        };
        let data = {
            latitud: req.body.latitud,
            longitud: req.body.longitud,
            tipo_formulario_id: 3,
            usuario_id: req.body.usuario_id
        };
        let statusError = 500;
        let auth = new Promise ( (resolve, reject) => {
            global.validateToken(req.body.token, (err, response) => {
                console.log('linea 285',err);
                if(err){
                    statusError = 401;
                }
                return (err) ? reject(new Error('Token inválido')) : resolve(true);
            })
        });

        auth
        // creamos el formulario
            .then( (resolved, rejected) => {
                return new Promise( (resolve, reject) => {
                    formulario.createForm(respuestas, (err, data) => {
                        console.log(data);
                        return (err) ? reject(new Error('No se ha podido crear un nuevo formulario')) : resolve(data);
                    })
                })
            })

            // enviamos las respuestas a la bdd
            .then( (resolved, rejected) => {
                data = {
                    tipo_formulario_id: resolved.data.tipo_formulario_id,
                    respuestas: respuestas
                };
                return new Promise( (resolve, reject) => {
                    formulario.guardarRespuestas(resolved, (err, data) => {
                        return (err) ? reject(new Error('No se ha podido guardar las respuestas')) : resolve(data);
                    })
                })
            })

            // guardámos las imágenes en el servidor
            // .then( (resolved, rejected) => {
            //
            // })

            // respondemos al cliente
            .then( (resolved, rejected) => {
                res.status(200).json({
                    success: true,
                    message: `Formulario guardado con éxito`
                })
            })

            // manejamos algún posible error
            .catch( (err) => {
                console.log(err);
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    });

    // Formulario de instalacion dth id=4
    app.post('/formulario/instalacion/dth', (req, res) => {
        global.validateToken(req.query.token, (response, err) => {
            if(!err){
                // hacer algo
            }else {
                console.log(`Error en post instalacion dth: ${err.msg}`);
                res.status(500).send('Internal Server Error');
            }
        })
    });

    // Formulario de desconexion id=5
    app.post('/formulario/desconexion', (req, res) => {
        let auth = new Promise ( (resolve, reject) => {
            global.validateToken(req.body.token, (err, response) => {
                if(err){
                    statusError = 401;
                }
                return (err) ? reject(new Error('Token inválido')) : resolve(true);
            })
        });

        auth
            .then((resolved, rejected) => {
                res.status(200).json({
                    success: true,
                    message: `Desconexión realizada con éxito`
                })
            })

            // manejamos algún posible error
            .catch( (err) => {
                console.log(err);
                res.status(statusError).json({
                    success: false,
                    message: err.message
                })
            })
    });

};