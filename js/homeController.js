app.controller('homeController', ['$rootScope', '$scope', 'api', function ($rootScope, $scope, api) {
	
	var loadRepo = function(user) {
		api.repository.getByUser(user).success(function (data, status, headers, config) {
			$scope.repositories = angular.fromJson(data);
		})	
	}
	
	loadRepo('joaohencke')


}])