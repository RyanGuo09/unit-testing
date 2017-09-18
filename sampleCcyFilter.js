angular
    .module('currencyFilter')
    .filter('ccy', ccyFilter);

ccyFilter.$inject = ['$filter'];

function ccyFilter($filter) {
    return function (input, fractionSize, defaultValue) {
        if (input !== null && typeof input !== 'undefined' && input.toString().trim() !== '' && !isNaN(input)) {
            return $filter('currency')(input, '$', fractionSize || 2);
        } else {
            return defaultValue || '--';
        }
    };
}