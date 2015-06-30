app.controller('menuController', ['$scope', '$rootScope', function($scope, $rootScope){
	$scope.menuOptions = [{'name': 'Meus Repositórios', 'page' : 'home'}, {'name': 'Favoritos', 'page': 'bookmarks'}]

	$scope.isActive = function (option) {
		return $rootScope.activePage == option.page
	}

	$scope.setMenu = function (page) {
		$rootScope.activePage = page;
	}

	
}]);