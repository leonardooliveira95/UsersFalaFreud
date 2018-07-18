var MongoClient = require('mongodb').MongoClient;
var constantes = require('../util/Constantes.js');

module.exports = {

    //Lista os usuários do banco e chama a função de callback passada por parâmetro
    listaUsuariosBanco: (callback) => {

        MongoClient.connect(constantes.urlBanco, function (err, db) {
            
            if (err) 
                throw err;

            var dbo = db.db("usersnode");
            
            dbo.collection("usuarios").find({}).toArray(callback);

        });

    },

    gravar: (user) => {

        MongoClient.connect(constantes.urlBanco, (err, db) => {

            if (err)
                throw err;

            var dbo = db.db("usersnode");

            dbo.collection("usuarios").insertOne(user, (err, res) => {

                if (err)
                    throw err;

                db.close();

            });
        });

    }

};