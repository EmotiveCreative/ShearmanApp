(function() {
    'use strict';

    angular.module('ssWidgets')
        .factory('ssWeatherDataService', ssWeatherDataService);

    function ssWeatherDataService($http) {
        var service = {
            getWeatherData: getWeatherData
        };

        return service;

        function getWeatherData(cityName) {
            var url = 'api.openweathermap.org/data/2.5/weather?q=' + cityName + 
            '&APPID=41eda6222591b5541c36c2cc1ebfeb4c';
            return $http.post(url).then();
        }

    }


})();