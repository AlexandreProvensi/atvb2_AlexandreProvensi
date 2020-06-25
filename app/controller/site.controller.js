(function(app) {

    app.controller('SiteController', function($scope, CategoriaService, ProdutoService) {


        //Carrega categorias do site
        CategoriaService.listar().then(function(result) {
            $scope.produtos = [];
            $scope.categorias = result.data;

            //Carrega produtos
            ProdutoService.listar().then(function(result2) {
                $scope.produtos = result2.data;
            })
        })
    });
})(appATVB2)