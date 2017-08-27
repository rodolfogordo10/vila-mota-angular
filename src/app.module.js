(function () {
    'use strict';

    // Injeção de Dependência
    angular.module('vilaMota', [
        'ngMaterial',
        'ngAnimate',
        'ngMessages',
        'ngRoute'
    ]);

    angular.module('vilaMota').config(vilaMotaConfig);
    vilaMotaConfig.$inject  = [ '$mdThemingProvider', '$routeProvider', '$locationProvider' ];

    angular.module('vilaMota').run(vilaMotaRun);
    vilaMotaRun.$inject     = [ ];

    // Config method
    function vilaMotaConfig($mdThemingProvider, $routeProvider, $locationProvider) {

        $mdThemingProvider
            .theme('default')
            .primaryPalette('pink', {
                'default': '400',
                'hue-1': '100',
                'hue-2': '600',
                'hue-3': 'A100'
            })
            // If you specify less than all of the keys, it will inherit from the
            // default shades
            .accentPalette('purple', {
                'default': '200'
            }).dark();

        $routeProvider
            .when('/', {
                'templateUrl'    : 'src/components/home/home.html',
                'controller'     : 'homeController',
                'reloadOnSearch' : false
            })

            .otherwise({
                'redirectTo': '/'
            });

        $locationProvider.html5Mode(true);

    }

    // Run method
    function vilaMotaRun() {

        window.console.log('Funcionando!');

    }

}());
