app.config(function ($routeProvider) {
	$routeProvider
		.when ('/home', {
			templateUrl: 'partials/home.html',
			controller: 'homeController'	
		})
		.when('/bookmarks', {
			templateUrl: 'partials/bookmarks.html',
			controller: 'bookmarkController'
		})
		.when('/repository/:owner/:id', {
			templateUrl: 'partials/repository.html',
			controller: 'repositoryController'
		})
		.when ('/searchResult/:criteria', {
			templateUrl: 'partials/search.html',
			controller: 'searchController'
		})
})