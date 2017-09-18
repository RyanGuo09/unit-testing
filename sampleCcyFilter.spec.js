(function () {
  describe('Unit Test: Core: The currency filter', function () {

    var $filter;

    beforeEach(module('currencyFilter'));

    beforeEach(function () {
      angular.mock.inject(function (_$filter_) {
        $filter = _$filter_;
      });
    });

    describe('when input includes input, fractionSize, defaultValue', function() {
      it('should return formatted currency.', function() {
        expect($filter('ccy')(100, 2, 'no_value')).toEqual('$100.00');
        expect($filter('ccy')(100, 1, 'no_value')).toEqual('$100.0');
        expect($filter('ccy')(100.12, 2, 'no_value')).toEqual('$100.12');
        expect($filter('ccy')(100.12, 1, 'no_value')).toEqual('$100.1');
        expect($filter('ccy')(100, 2)).toEqual('$100.00');
        expect($filter('ccy')(100, 1)).toEqual('$100.0');
        expect($filter('ccy')(100.12, 2)).toEqual('$100.12');
        expect($filter('ccy')(100.12, 1)).toEqual('$100.1');  
        expect($filter('ccy')(100)).toEqual('$100.00');
        expect($filter('ccy')(100.12)).toEqual('$100.12');       
        
      });
    });

    describe('when passed an invalid number', function() {
      it('should return the default value.', function() {
        expect($filter('ccy')()).toEqual('--');
        expect($filter('ccy')(null)).toEqual('--');
        expect($filter('ccy')(null, 2)).toEqual('--');
        expect($filter('ccy')(null, 2, 'no_value')).toEqual('no_value');        
        expect($filter('ccy')({})).toEqual('--');
        expect($filter('ccy')({}, 2)).toEqual('--');
        expect($filter('ccy')({}, 2, 'no_value')).toEqual('no_value');
        expect($filter('ccy')('test')).toEqual('--');
        expect($filter('ccy')('test', 2)).toEqual('--');
        expect($filter('ccy')('test', 2, 'no_value')).toEqual('no_value');
      });
    });
  });
})();
