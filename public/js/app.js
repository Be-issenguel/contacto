angular.module('contacto',['ngRoute','ngResource']).config(function($routeProvider){

    $routeProvider.when('/contactos', {
        templateUrl: '/partials/contactos.html',
        controller: 'ContactoController'
    });

    $routeProvider.when('/contacto/:id', {
        templateUrl: '/partials/contacto.html',
        controller: 'ContactoController'
    });

    $routeProvider.when('/novo', {
        templateUrl: '/partials/contacto.html',
        controller: 'ContactoController'
    });

    $routeProvider.otherwise({redirectTo: '/contactos'});
});