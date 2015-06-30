app.controller('repositoryController', ['$rootScope', '$scope', '$routeParams', 'api', function ($rootScope, $scope, $routeParams, api) {
	
	var getRepoById = function (owner, id) {
		api.repository.getById(owner, id).success(function (data, status, headers, config) {
			$scope.repository = angular.fromJson(data);
		})	
	}
	
	var getRepoCollaborators = function (owner, id) {
		api.repository.getCollaborators(owner, id).success(function (data, status, headers, config) {
			$scope.collaborators = angular.fromJson(data);
		})	
	}
	

	$scope.setBookmark = function (repository) {
		var index = -1

		angular.forEach($rootScope.bookmark, function (value, key) {
			if (value.name === repository.name)
				index = key
		})
		console.log(index)
		if (index === -1)
			$rootScope.bookmark.push(repository)
		else 
			$rootScope.bookmark.splice(index, 1)
			
	}

	$scope.existBookmark = function (repository) {
		var exists = false;

		if (typeof repository !== 'undefined' )
			angular.forEach($rootScope.bookmark, function (value, key) {
				if (value.name === repository.name)
					exists = true
			})
		return exists
	}

	getRepoById($routeParams.owner, $routeParams.id);
	getRepoCollaborators($routeParams.owner, $routeParams.id);
}])