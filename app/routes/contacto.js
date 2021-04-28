
module.exports = function (app) {
    var ContactoController = app.controllers.ContactoController;
    var verificarAutenticacao = require('../../config/auth');

    app.get('/', function(req, res){
        res.render('index',{'userLogado': req.user.login});
    })

    app.route('/contactos')
        .get(verificarAutenticacao ,ContactoController.index)
        .post(ContactoController.storeOrUpdate);
    app.route('/contactos/:id')
        .get(ContactoController.find)
        .delete(ContactoController.destroy);
}