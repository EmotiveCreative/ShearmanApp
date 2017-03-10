(function () {
    'use strict';

    angular.module('ssWidgets')
        .component('ssWeather', {
            bindings: {
                cityIds: '<'
            },
            controller: Controller,
            controllerAs: 'ssWeather',
            templateUrl:'scripts/widgets/weather/ss-weather.component.html'
        });


    function Controller(ssWeatherDataService) {
        var vm = this;

        vm.$onChanges = function() {

            // ssWeatherDataService.getWeatherData(vm.cityIds).then(function(response) {
            //     vm.weatherData = response.data;
            //     console.log(vm.weatherData);
            // });
            
        };
        
    }

})();