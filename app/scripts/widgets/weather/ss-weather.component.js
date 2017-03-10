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
                    response.data.list = addWeatherImageUrls(response.data.list);
                    vm.weatherData = ssWeatherData = response.data;
                    ssWeatherData.timestamp = currentTimestamp;
                    localStorage.setItem('ssWeatherData', JSON.stringify(ssWeatherData));
                });
                return;
            }

            vm.weatherData = ssWeatherData;
        
        };

        function addWeatherImageUrls(weatherDataArr) {
            if (weatherDataArr.length && weatherDataArr.length > 0) {
                weatherDataArr.forEach(function(weatherItem) {
                    // source: https://openweathermap.org/weather-conditions
                    switch (weatherItem.weather[0].main) {
                        case "Thunderstorm":
                            weatherItem.imageUrl = '/images/004-flash.svg';
                            break;
                        case "Drizzle":
                            weatherItem.imageUrl = '/images/006-umbrella.svg';
                            break;
                        case "Rain":
                            weatherItem.imageUrl = '/images/006-umbrella.svg';
                            break;
                        case "Snow":
                            weatherItem.imageUrl = '/images/008-snowflake.svg';
                            break;
                        case "Atmosphere":
                            weatherItem.imageUrl = '/images/006-umbrella.svg';
                            break;
                        case "Clear":
                            weatherItem.imageUrl = '/images/003-sun.svg';
                            break;
                        case "Clouds":
                            weatherItem.imageUrl = '/images/007-cloud-outline.svg';
                            break;
                        case "Extreme":
                            weatherItem.imageUrl = '/images/004-flash.svg';
                            break;
                        case "Additional":
                            weatherItem.imageUrl = '/images/007-cloud-outline.svg';
                            break;
                        default:
                            weatherItem.imageUrl = '/images/003-sun.svg';
                            break;
                    }
                }); 
            }
            return weatherDataArr;
        }

    }

})();