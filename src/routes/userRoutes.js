const user = require('../models/user');
const global = require('../middlewares/auth');
const bcrypt = require('bcrypt-nodejs');
const path = require('path');

module.exports = (app) => {
    app.get('/users', (req, res) => {
        user.getUsers((err, data) => {
            res.status(200).json(data);
        })
    });

    app.get("/user/id/:id", (req, res) => {
        //id del usuario
        let id = req.params.id;
        //solo actualizamos si la id es un número
        if(!isNaN(id)) {
            user.getUserById(id, (error, data) => {
                //si el usuario existe lo mostramos en formato json
                if (typeof data !== 'undefined' && data.length > 0) {
                    res.status(200).json(data);
                }
                //en otro caso mostramos una respuesta conforme no existe
                else {
                    res.status(404).json({
                        "msg":`No existe el usuario con id = ${req.params.id}`
                    });
                }
            });
        }
        //si hay algún error
        else {
            res.status(500).json({"msg":"Error"});
        }
    });

    app.get("/user/:userName", function(req, res) {
        //id del usuario
        let userName = req.params.userName;
        user.getUserByUsername(userName, function(err, data) {
            //si el usuario existe lo mostramos en formato json
            if (typeof data !== 'undefined' && data.length > 0) {
                res.status(200).json(data);
            }
            //en otro caso mostramos una respuesta conforme no existe
            else {
                res.status(404).json({
                    "msg":`No existe el usuario con userName = ${req.params.userName}`
                });
            }
        });
    });

    app.get('/login', (req, res) => {
        res.sendFile(path.join(__dirname+'/../public/login.html'));
    });

    // llama vista de creacion de nuevo usuario
    app.post('/new-user', (req, res) => {
        let userToken = req.body.token;
        console.log(userToken);
        global.validateToken(userToken, (response, err) => {
            console.table(err);
            if(err){
                console.log(err.data.message);
                res.status(500).send('Error en post new-user');
            }else{
                res.sendFile(path.join(__dirname+'/../public/newUser.html'));
            }
        })
    });

    app.post('/login', (req, res) => {
        console.log(req);
        let username = req.body.username;
        let password = req.body.password;
        global.auth(username, password, res);
    });


    // crear nuevo usuario
    app.post('/new/user', (req, res) => {
        const userData = {
            'id': null,
            'username': req.body.username,
            'password': bcrypt.hashSync(req.body.password),
            'nombre': req.body.nombre,
            'apellido': req.body.apellido,
            'tipo_usuario': req.body.tipo_usuario,
            'estado': 'activo'
        };

        user.createUser(userData, (err, data) => {
            if(data && data.insertId){
                res.status(200).json({
                    success: true,
                    msg: 'Usuario creado',
                    data: data
                });
                console.table(data);
            }else{
                res.status(500).json({
                    success: false,
                    msg: `Error al crear nuevo usuario: ${err.message}`
                })
            }
        })
    });
};