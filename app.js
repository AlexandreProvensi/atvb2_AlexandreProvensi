appATVB2 = angular.module('appATVB2', ['ngRoute', 'ngStorage']);

//Configurar as rotas da aplicação
appATVB2.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/template/site.view.html',
            controller: 'SiteController'
        })
        .when('/admin/categorias', {
            templateUrl: 'app/template/admin/categoria.view.html',
            controller: 'CategoriaController'
        })
        .when('/admin/produtos', {
            templateUrl: 'app/template/admin/produto.view.html',
            controller: 'ProdutoController'
        })
        .when('/signin', {
            templateUrl: 'app/template/admin/signin.view.html',
            controller: 'SignController'
        })
        .when('/signup', {
            templateUrl: 'app/template/admin/signup.view.html',
            controller: 'SignController'
        })
        .when('/contato', {
            templateUrl: 'app/template/contato.view.html'
        })
        .otherwise({ redirectTo: '/' });
});

//Defino o que acontecerá na execução da aplicação
appATVB2.run(function($rootScope, $location, $sessionStorage) {

    $rootScope.$on('$locationChangeStart', function() {

        if ($location.path().indexOf('sign') < 0) {
            //Verifica se o usuário entrou
            if (!$sessionStorage.logado) {
                $location.path('/signin');
            }
        }
    })
});