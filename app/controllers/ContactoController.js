
module.exports = function(app){
    var Contacto = app.models.Contacto;
    var controller = {};

    controller.index = function(req, res){
        Contacto.find().populate('emergencia').exec()
        .then(function(contactos){
            res.json(contactos);
        }).catch(function(erro){
            res.status(500).send(erro);
        });
    };

    controller.storeOrUpdate = function(req, res){
        var id = req.body._id;
        if(id){
            Contacto.findByIdAndUpdate({_id: id}, req.body).exec()
            .then(function(contacto){
                res.status(200).json(contacto);
            }).catch(function(erro){
                res.status(404).json(erro);
            });
        }else{
            Contacto.create(req.body)
            .then(function(contacto){
                res.status(200).json(contacto);
            }).catch(function(erro){
                res.status(500).json(erro);
            });
        }
    };

    controller.find = function(req, res)
    {
        Contacto.findById({_id: req.params.id}).exec()
        .then(function(contacto){
            res.status(200).json(contacto);
        }).catch(function(erro){
            res.status(404).json(erro);
        })
    }


    controller.destroy = function(req, res){
        var id = req.params.id;
        Contacto.remove({_id: id}).exec()
        .then(function(){
            res.status(200);
        }).catch(function(erro){
            res.status(404).json(erro);
        });
    };

    return controller;
}