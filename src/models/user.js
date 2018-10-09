let userModel = {};

userModel.getUsers = (callback) => {
    if(connection){
        connection.query('SELECT * FROM srv_usuario WHERE id NOT BETWEEN 1 AND 3 AND tipo_usuario NOT LIKE "%superadmin%" ORDER BY id',
            (err, row) => {
                if(err){
                    callback(err, null);
                    console.log(`Error en getUsers: ${err.message}`);
                }
                if(!err){
                    callback(null, row);
                }
            }
        )
    }
};

userModel.getUserById = (id, callback) => {
    if(connection){
        connection.query('SELECT * FROM srv_usuario WHERE id=?', id,
            (err, row) => {
                if(err){
                    callback(err, null);
                    console.log(`Error en getUserById: ${err.message}`);
                }
                if(!err){
                    callback(null, row);
                }
            }
        )
    }
};

userModel.getUserByUsername = (user, callback) => {
    if (connection) {
        connection.query('SELECT * FROM srv_usuario WHERE username=?', user,
            (err, row) => {
                if(err){
                    callback(err, null);
                    console.log(`Error en getUserByUsername: ${err.message}`);
                }
                if(!err) callback(null, row);
            }
        );
    }
};

userModel.createUser = (userData, callback) => {
    if(connection){
        connection.query(
            'INSERT INTO srv_usuario SET ?', userData,
            (err, row) => {
                if(err){
                    callback(err, null);
                    console.log(`Error en createUser: ${err.message}`);
                }
                if(!err) callback(null, row);
            }
        )
    }
};

userModel.saveToken = (userData, callback) => {
    if(connection){
        let data = Object.keys(userData).map(key => userData[key]);
        connection.query('UPDATE srv_usuario SET api_token=? WHERE id=?', data,
            (err, row) => {
                if(err){
                    callback(err, null);
                    console.log(`Error en saveToken: ${err.message}`);
                }
                if(!err) callback(null, row)
            }
        )
    }
};

module.exports = userModel;