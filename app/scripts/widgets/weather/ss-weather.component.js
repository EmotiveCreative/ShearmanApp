(function () {
    'use strict';

    angular.module('ssWidgets')
        .component('ssWeather', {
            bindings: {
                cityIds: '<'
            },
            controller: Controller,
            controllerAs: 'ssWeather',
            templateUrl: 'scripts/widgets/weather/ss-weather.component.html'
        });


    function Controller(ssWeatherDataService) {
        var vm = this;

        vm.$onChanges = function () {
            var ssWeatherData = JSON.parse(localStorage.getItem('ssWeatherData'));
            var currentTimestamp = Math.round(new Date() / 1000);

            if (!ssWeatherData || (ssWeatherData && (currentTimestamp - ssWeatherData.timestamp > 600))) {
                ssWeatherDataService.getWeatherData(vm.cityIds).then(function (response) {
                    vm.weatherData = ssWeatherData = response.data;
                    ssWeatherData.timestamp = currentTimestamp;
                    localStorage.setItem('ssWeatherData', JSON.stringify(ssWeatherData));
                });
                return;
            }

            vm.weatherData = ssWeatherData;
        
        };

    }

})();