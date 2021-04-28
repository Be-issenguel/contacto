var mongoose = require('mongoose');


module.exports = function(uri){

    const connectionParams={
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true 
    }

    mongoose.connect(uri, connectionParams);

    mongoose.connection.on('connected', function(){
        console.log('Mongoose! conectado com sucesso.');
    });

    mongoose.connection.on('desconnected', function(){
        console.log('Mongoose! desconectado com sucesso.');
    });

    mongoose.connection.on('error', function(erro){
        console.log('Mongoose! erro ao conectar: ');
    });

    process.on('SIGNIT', function(){
        mongoose.connection.close(function(){
            console.log('Mongoose! conexão encerrada pelo termino da aplicação.');
            process.exit(0);
        });
    });
}