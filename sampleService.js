angular
    .module('app')
    .factory('sampleService', sampleService);

sampleService.$inject = ['$http', '$cacheFactory', '$q'];

function sampleService($http, $cacheFactory, $q) {
    var cache = $cacheFactory('sampleCache'),
        cacheKey = 'get',
        api =  '/sampleUrl',
        sampleService = {
            get: get,
        };
    

    return sampleService;


    //////
    function get(refresh) {
        var data = cache.get(cacheKey);

        if (!refresh && data) {
            return $q.when(data);
        }
        else {
            return $http.get(api, { cache: false })
                .then(function (response) {
                    cache.put(cacheKey, response);
                    return response;
                });
        }        
    }
}
