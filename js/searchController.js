app.controller('searchController', ['$scope', '$routeParams', 'api', function ($scope, $routeParams, api) {
	var searchRepoByCriteria = function (criteria) {
		api.repository.searchByCriteria(criteria).success(function (data, status, headers, config) {
			$scope.searchResult = angular.fromJson(data);
			$scope.jsonResult = data;
		})
	}

	searchRepoByCriteria($routeParams.criteria)
}])