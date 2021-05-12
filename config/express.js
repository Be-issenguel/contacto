var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var helmet = require('helmet');

module.exports = function () {
    app = express();
    app.set('port', 3000);
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    /**
     * =========================================
     * configuração para integração com o github
     * =========================================
     */
    
    //configuração do cookie para salvar o id da sessão    
    app.use(cookieParser());
    //confguração da sessão para salvar os dados do utilizador
    app.use(session({
        secret: 'homem planta',
        resave: true,
        saveUninitialized: true
    }));
    //inicialização do passport
    app.use(passport.initialize());
    //configuração para que o passport salve os dados de autenticação na sessão
    app.use(passport.session());
    //protegendo headers
    app.use(helmet());
    app.use(helmet.hidePoweredBy({setTo: 'PHP 5.5.14'}));

    load('models', {
            cwd: 'app'
        })
        .then('controllers')
        .then('routes/auth.js')
        .then('routes')
        .into(app);


    return app;
}