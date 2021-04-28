//configuração da estratégia de autenticação
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function () {

    var User = mongoose.model('User');

    passport.use(new GitHubStrategy({
        clientID: '912778b1ee34ccd7a766',
        clientSecret: '440e29fea8532e378060994e3ed3f9bfc03bd76e',
        callbackUrl: 'http://localhost:3000/auth/github/callback',
    }, function (accessToken, refreshToken, profile, done) {
        User.findOrCreate(
            {'login': profile.username},
            {'nome': profile.username},
            function(erro, user){
                if(erro){
                    console.log(erro);
                    return done(erro);
                }

                return done(null, user);
            })
    }));


    passport.serializeUser(function(user, done){
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done){
        User.findById(id).exec()
        .then(function(user){
            done(null, user);
        })
    });

}