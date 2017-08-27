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

(function () {
    'use strict';

    // registering on angular
    angular.module('vilaMota').controller('MainController', MainController);

    // injecting dependencies
    MainController.$inject = [
        '$scope'
    ];

    // Main Controller
    function MainController($scope) {

        window.console.log($scope);

    }
}());

(function () {
    'use strict';

    // registering on angular
    angular.module('vilaMota').controller('homeController', HomeController);

    // injecting dependencies
    HomeController.$inject = [
        '$scope',
        '$mdSidenav'
    ];

    // Main Controller
    function HomeController($scope, $mdSidenav) {
        var list = [],
            i;

        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };

        for (i = 0; i < 100; i++) {
            list.push({
                'name'  : 'List Item ' + i,
                'idx'   : i
            });
        }
        $scope.list = list;

    }
}());

angular.module('vilaMota.templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('home.html','<md-toolbar layout=row><div class=md-toolbar-tools><button ng-click="toggleSidenav(\'left\')" hide-gt-sm="" class=menuBtn aria-label="Toggle Menu"></button><h1 layout-align-gt-sm=center>Hello World</h1></div></md-toolbar><div layout=row flex="" class=change-my-css><md-sidenav layout=column class="md-sidenav-left md-whiteframe-z2" md-component-id=left md-is-locked-open="$mdMedia(\'gt-sm\')"><div>Side Navigation</div><md-list><md-list-item ng-repeat="li in list"><div class=md-list-item-text><div layout=row><span>{{li.name}}</span> <span flex=""></span> <span>{{li.idx || 0}}</span></div></div></md-list-item></md-list></md-sidenav><md-content layout=column id=content flex="" class=md-padding>Content<p ng-repeat="x in [1,2,3,4,5,6,7,8,9,0]">Test {{x}}</p><p ng-repeat="x in [1,2,3,4,5,6,7,8,9,0]">Test {{x}}</p><p ng-repeat="x in [1,2,3,4,5,6,7,8,9,0]">Test {{x}}</p><p ng-repeat="x in [1,2,3,4,5,6,7,8,9,0]">Test {{x}}</p><p ng-repeat="x in [1,2,3,4,5,6,7,8,9,0]">Test {{x}}</p><p ng-repeat="x in [1,2,3,4,5,6,7,8,9,0]">Test {{x}}</p><p ng-repeat="x in [1,2,3,4,5,6,7,8,9,0]">Test {{x}}</p><p ng-repeat="x in [1,2,3,4,5,6,7,8,9,0]">Test {{x}}</p></md-content></div>');}]);