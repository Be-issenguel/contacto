var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

module.exports = function(){
    var schema = mongoose.Schema({
        login:{
            type: String,
            required: true,
            unique: true,
        },
        nome:{
            type: String,
            required: true,
        },
        inclusao:{
            type: Date,
            default: Date.now(),
        }
    });
    schema.plugin(findOrCreate);
    return mongoose.model('User', schema);
};