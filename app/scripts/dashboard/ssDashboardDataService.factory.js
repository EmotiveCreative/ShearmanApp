(function() {
    'use strict';

    angular.module('ssDashboard')
        .factory('ssDashboardDataService', ssDashboardDataService);

    function ssDashboardDataService() {
        var service = {
            getDashboardUserData: getDashboardUserData
        };

        function getDashboardUserData() {
            return {
                userName: 'Lenny',
                widgets: [
                    {
                        weather: {
                            locations: [
                                {
                                    cityId: '1816670',
                                    cityName: 'Beijing'
                                },
                                {
                                    cityId: '2800866',
                                    cityName: 'Brussels'
                                },
                                {
                                    cityId: '5128638',
                                    cityName: 'New York'
                                }
                            ] 
                        }        
                    }
                ]
            }
        }
    }
}

})();