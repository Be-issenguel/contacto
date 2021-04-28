var http = require('http');
var app = require('./config/express')();
require('./config/passport')()
require('./config/database')('mongodb://localhost:27017/contacto');

http.createServer(app).listen(app.get('port'), function(){
    console.log('servidor rodando na porta: '+ app.get('port'));
})