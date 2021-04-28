var http = require('http');
var app = require('./config/express')();
require('./config/passport')()
require('./config/database')('mongodb+srv://bernardo:bernardo@bcluster.vqcbi.mongodb.net/contacto?retryWrites=true&w=majority');
const PORT = process.env.PORT || 3000
http.createServer(app).listen(PORT, function(){
    console.log('servidor rodando na porta: '+ PORT);
})