const user = require('../models/user')
const global = require('../middlewares/auth')
const bcrypt = require('bcrypt-nodejs')
const path = require('path')
const log = require('../logging-system/logger').Logger;

module.exports = (app) => {
    app.get('/users', (req, res) => {
        log.info('get: /users')
        user.getUsers((err, data) => {
            res.status(200).json(data)
            log.info('res: ' + JSON.stringify(data))
        })
    })

    app.get("/user/id/:id", (req, res) => {
        log.info(`get: /user/id/${req.params.id}`)
        //id del usuario
        let id = req.params.id
        //solo actualizamos si la id es un número
        if(!isNaN(id)) {
            user.getUserById(id, (error, data) => {
                //si el usuario existe lo mostramos en formato json
                if (typeof data !== 'undefined' && data.length > 0) {
                    res.status(200).json(data)
                    log.info('res: ' + JSON.stringify(data))
                }
                //en otro caso mostramos una respuesta conforme no existe
                else {
                    res.status(404).json({
                        "msg":`No existe el usuario con id = ${req.params.id}`
                    })
                    log.error(`No existe el usuario con id = ${req.params.id}`)
                }
            })
        }
        //si hay algún error
        else {
            res.status(500).json({"msg":"Error"})
            log.error('Error al hacer get de usuarios por id')
        }
    })

    app.get("/user/:userName", (req, res) => {
        log.info(`get: /user/id/${req.params.userName}`)
        log.info('res: ' + JSON.stringify(res))
        //id del usuario
        let userName = req.params.userName
        user.getUserByUsername(userName, (err, data) => {
            //si el usuario existe lo mostramos en formato json
            if (typeof data !== 'undefined' && data.length > 0) {
                res.status(200).json(data)
                log.info('res: ' + JSON.stringify(data))
            }
            //en otro caso mostramos una respuesta conforme no existe
            else {
                res.status(404).json({
                    "msg":`No existe el usuario con userName = ${req.params.userName}`
                })
                log.error(`No existe el usuario con userName = ${req.params.userName}`)
            }
        })
    })

    app.post('/login', (req, res) => {
        log.info('post: /login')
        log.info('req: "username": ' + req.body.username)
        log.info('res: usuario ' + req.body.username + ' logueado')
        let username = req.body.username
        let password = req.body.password
        global.auth(username, password, res)
    })

    // crear nuevo usuario
    app.post('/new/user/:token', (req, res) => {
        log.info(`post: /new/user/${req.params.token}`)
        log.info('req: ' + JSON.stringify(req.body))
        log.info('res: ' + JSON.stringify(res))
        const userData = {
            'id': null,
            'username': req.body.username,
            'password': bcrypt.hashSync(req.body.password),
            'nombre': req.body.nombre,
            'apellido': req.body.apellido,
            'tipo_usuario': req.body.tipo_usuario,
            'empresa': req.body.empresa,
            'estado': 'activo'
        }
        let auth = new Promise ( (resolve, reject) => {
            global.validateToken(req.params.token, (response, err) => {
                if(!err){
                    log.info('usuario autorizado')
                    return resolve(true)
                }else{
                    log.error(err)
                    statusError = 401
                    reject(new Error('Token inválido'))
                }
            })
        })
        auth
            // creamos el formulario, guardamos respuestas e imágenes
            .then( (resolved, rejected) => {
                return new Promise( (resolve, reject) => {
                    user.createUser(userData, (err, data) => {
                        log.error(err)
                        return (err) ? reject(new Error('No se ha podido crear un nuevo usuario')) : resolve(res)
                    })
                })
            })
            .then((resolved, rejected) => {
                res.status(200).json({
                    success: true,
                    msg: 'Usuario creado'
                })
                log.info('res: Usuario creado')
            })
            .catch(err => {
                log.error(err)
                res.status(500).json({
                    success: false,
                    msg: `Error al crear nuevo usuario: ${err.message}`
                })
            })
        
    })
}