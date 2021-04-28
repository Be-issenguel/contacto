var mongoose = require('mongoose');

module.exports = function () {

    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        emergencia: {
            type: mongoose.Schema.ObjectId,
            ref: 'Contacto'
        }
    });
    
    return mongoose.model('Contacto', schema);
};