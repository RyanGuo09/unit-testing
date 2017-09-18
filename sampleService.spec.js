describe('Unit Test: sample Component service', function() {
  'use strict';
  var sampleService;
  var $http;
  var $q;
  var sampleResponse = {
    name: 'Ryan',
    age: 20
  };

  beforeEach(function() {
    angular.mock.module('app');
    angular.mock.inject(function(_$q_, _$http_, _$httpBackend_, sampleService) {
      $http = _$http_;
      sampleService = _sampleService_;
      $q = _$q_;
      $httpBackend = _$httpBackend_;
    });
    cache = $cacheFactory('sampleCache'),
    cacheKey = 'get',
    api =  '/sampleUrl',
  });
  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });
  describe('a successful API call to get data from API with refresh', function() {
    it('should get the response object from API.', function() {
      httpBackend.expectGET(api).respond(200, sampleResponse);
      var serviceResponse = {};
      sampleService.get(true).then(function(response){
        serviceResponse = response;
      })
      httpBackend.flush();
      expect(serviceResponse).toEqual(sampleResponse);
    });
  });
});