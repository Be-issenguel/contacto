var mongoose = require('mongoose');


module.exports = function(uri){

    mongoose.connect(uri);

    mongoose.connection.on('connected', function(){
        console.log('Mongoose! conectado com sucesso.');
    });

    mongoose.connection.on('desconnected', function(){
        console.log('Mongoose! desconectado com sucesso.');
    });

    mongoose.connection.on('error', function(erro){
        console.log('Mongoose! erro ao conectar: '+ erro);
    });

    process.on('SIGNIT', function(){
        mongoose.connection.close(function(){
            console.log('Mongoose! conexão encerrada pelo termino da aplicação.');
            process.exit(0);
        });
    });
}