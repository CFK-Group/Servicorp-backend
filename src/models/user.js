let userModel = {};
const log = require('../logging-system/logger').Logger;

userModel.getUsers = (callback) => {
    pool.getConnection(function(err, connection){
        connection.query('SELECT * FROM srv_usuario WHERE id NOT BETWEEN 1 AND 3 AND tipo_usuario NOT LIKE "%superadmin%" ORDER BY id',
            (err, row) => {
                if(err){
                    callback(err, null)
                    log.error(`Error en getUsers: ${err.message}`)
                }
                if(!err){
                    callback(null, row)
                }
            }
        )
        connection.release()
    })
}

userModel.getUserById = (id, callback) => {
    pool.getConnection(function(err, connection){
        connection.query('SELECT * FROM srv_usuario WHERE id=?', id,
            (err, row) => {
                if(err){
                    callback(err, null)
                    log.error(`Error en getUserById: ${err.message}`)
                }
                if(!err){
                    callback(null, row)
                }
            }
        )
        connection.release()
    })
}

userModel.getUserByUsername = (user, callback) => {
    pool.getConnection(function(err, connection){
        connection.query('SELECT * FROM srv_usuario WHERE username = ?', user,
            (err, row) => {
                if(err){
                    callback(err, null);
                    log.error(`Error en getUserByUsername: ${err.message}`)
                }
                if(!err) callback(null, row);
            }
        )
        connection.release()
    })
}

userModel.createUser = (userData, callback) => {
    pool.getConnection(function(err, connection){
        connection.query(
            'INSERT INTO srv_usuario SET ?', userData,
            (err, row) => {
                if(err){
                    callback(err, null)
                    log.error(`Error en createUser: ${err.message}`)
                }
                if(!err) callback(null, row)
            }
        )
        connection.release()
    })
}

userModel.saveToken = (userData, callback) => {
    pool.getConnection(function(err, connection){
        let data = Object.keys(userData).map(key => userData[key]);
        connection.query('UPDATE srv_usuario SET api_token=? WHERE id=?', data,
            (err, row) => {
                if(err){
                    callback(err, null)
                    log.error(`Error en saveToken: ${err.message}`)
                }
                if(!err) callback(null, row)
            }
        )
        connection.release()
    })
}

module.exports = userModel