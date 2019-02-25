const secret = 'starLabs'
const user = require('../models/user')
const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')
let global = {}
const log = require('../logging-system/logger').Logger;

global.auth = (username, password, res) => {

    user.getUserByUsername(username, (err, userData) => {
        if (err) return res.status(500).send({auth: false, token: null, message: 'Error en getUserByUsername.'})
        userData = userData[0]
        if (!userData) return res.status(401).send({auth: false, token: null, message: 'Usuario no autorizado.'})

        //Validar la contraseña
        passwordIsValid = bcrypt.compareSync(password, userData.password)
        if (!passwordIsValid) return res.status(401).send({auth: false, token: null, message: 'Usuario no autorizado.'})

        //guardar token en bdd
        const userD = {
            userToken: token = jwt.sign({id: userData.id, username: userData.username}, secret, {expiresIn: 86400 /* expires in 24 hoursΩ */}), //Crear token
            id: userData.id
        }
        return user.saveToken(userD, (err, data) => {
            if(data && data.affectedRows > 0){
                return res.status(200).json({
                    success: true,
                    msg: 'Token guardado',
                    data: data,
                    auth: true,
                    token: userD.userToken,
                    typeUser: userData.tipo_usuario,
                    id_usuario: userData.id,
                    empresa: userData.empresa
                })
            }else{
                return res.status(500).json({
                    success: false,
                    msg: `Error al guardar token`
                })
            }
        })
    })
}

global.validateToken = (token, callback) => {
    if (!token) {
        callback(null, {
            statusCode: 403,
            data:{
                auth: false,
                message: 'No token provided.'
            }
        })
    }else {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) callback(null, {
                statusCode: 500,
                data:{
                    auth: false,
                    message: 'Failed to authenticate token.'
                }
            })
            // if everything good, save to request for use in other routes
            let data = {
                auth: true,
                message: 'Usuario autenticado.',
                userId: decoded.id
            }
            callback(data, null)
        })
    }
}

module.exports = global