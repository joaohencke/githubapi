app.factory('api', ['$http', function ($http) {
	return {
		repository: {
			getByUser : function (user) {
				return $http.get('https://api.github.com/users/' + user + '/repos');
			},

			getById : function (owner, id) {
				return $http.get('https://api.github.com/repos/' + owner + '/' + id);
			},

			searchByCriteria : function (criteria) {
				return $http.get('https://api.github.com/search/repositories', { params: {q : criteria, sort : 'stars', order : 'desc' }} );
			},

			getCollaborators : function (owner, id) {
				return $http.get('https://api.github.com/repos/' + owner + '/' + id + '/contributors');
			}
		}
	}

}])