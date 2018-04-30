const secret = 'starLabs';
const user = require('../models/user');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
let global = {};

global.auth = (username, password, res) => {

    user.getUserByUsername(username, (err, userData) => {
        if (err) return res.status(500).send('Error en getUserByUsername.');
        userData = userData[0];
        if (!userData) return res.status(404).send('Usuario no encontrado.');

        //Validar la contraseña
        passwordIsValid = bcrypt.compareSync(password, userData.password);
        if (!passwordIsValid) return res.status(401).send({auth: false, token: null});

        //guardar token en bdd
        const userD = {
            userToken: token = jwt.sign({id: userData.id}, secret, {expiresIn: 86400 /* expires in 24 hoursΩ */}), //Crear token
            id: userData.id
        };
        user.saveToken(userD, (err, data) => {
            if(data && data.affectedRows > 0){
                res.status(200).json({
                    success: true,
                    msg: 'Token guardado',
                    data: data,
                    auth: true,
                    token: token
                })
            }else{
                res.status(500).json({
                    success: false,
                    msg: `Error al guardar token`
                })
            }
            console.log(data);
        })
    });
};

global.validateToken = (token, callback) => {
    if (!token) callback(null, {
        statusCode: 403,
        data:{
            auth: false,
            message: 'No token provided.'
        }
    });
    jwt.verify(token, secret, (err, decoded) => {
        if (err) callback(null, {
            statusCode: 500,
            data:{
                auth: false,
                message: 'Failed to authenticate token.'
            }
        });
        // if everything good, save to request for use in other routes
        callback(true, null);
    });
};

module.exports = global;