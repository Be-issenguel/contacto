
angular.module('contacto').controller('ContactoController', function ($scope, $routeParams, $resource) {
    Contacto = $resource('/contactos/:id');

    $scope.mensagem = '';

    console.log(Contacto);

    function buscarContactos() {
        Contacto.query().$promise
            .then(function (contactos) {
                $scope.contactos = contactos;
            }).catch(function () {
                console.log('não foi possivel buscar os contactos');
            });
    }

    $scope.salvar = function () {
        Contacto.save($scope.contacto).$promise
            .then(function (contacto) {
                $scope.contacto = {};
                $scope.mensagem = 'contacto actualizado';
            }).catch(function (erro) {
                console.log('erro ao actualizar contacto: ' + erro);
            });
    }

    $scope.remover = function(contacto){
        Contacto.remove({id: contacto._id}).$promise
        .then(buscarContactos()).catch(function(erro){
            console.log('erro ao remover o contacto');
        });
    }

    if ($routeParams.id) {
        Contacto.get({
                id: $routeParams.id
            }).$promise
            .then(function (contacto) {
                $scope.contacto = contacto;
            }).catch(function (erro) {
                console.log('Erro: ' + erro);
            })
    } else {
        $scope.contacto = {};
    }

    $scope.init = function () {
        buscarContactos();
    }

    $scope.init();
});