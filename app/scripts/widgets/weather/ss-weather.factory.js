(function() {
    'use strict';

    angular.module('ssWidgets')
        .factory('ssWeatherDataService', ssWeatherDataService);

    function ssWeatherDataService($http) {
        var service = {
            getWeatherData: getWeatherData
        };

        return service;

        function getWeatherData(cityIds) {
            var url = 'http://api.openweathermap.org/data/2.5/group?id=' + cityIds.join(',') + 
            '&APPID=41eda6222591b5541c36c2cc1ebfeb4c&units=imperial';
            return $http.post(url).then();
        }

    }


})();