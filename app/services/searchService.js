define(['app'], function(app) {

	app.factory('searchService',['$location', '$rootScope', function($location, $rootScope) {
		var searchURLbase = "search/result?q=";
		var searchQuery = "";
		var searchURL = "";
		
		return {
			
			setSearch : function(query) {
				searchQuery = query;
				searchURL = searchURLbase + query;
				$rootScope.searchFields.searchQuery = query;
			},
			
	        getURL : function() {
	        	return searchURL;
	        },

	        getQuery : function() {
	        	if(searchQuery === ""){
	        		var searchObject = $location.search();
                 	if (searchObject.q) {
                    	searchQuery = searchObject.q;
                 	}
	        	}

	        	return searchQuery;
	        }
	    };
	}]);
});