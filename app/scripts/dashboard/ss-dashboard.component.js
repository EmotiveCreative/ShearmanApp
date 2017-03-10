(function() {
    'use strict';

    angular.module('ssDashboard')
        .component('ssDashboard', {
            controller: Controller,
            controllerAs: 'ssDashboard',
            templateUrl: 'scripts/dashboard/ss-dashboard.component.html'
        });
    

    function Controller (ssDashboardDataService) {
        var vm = this;

        vm.$onInit = function() {
            vm.userData = ssDashboardDataService.getDashboardUserData();
            vm.cityIdList = ['1816670','2800866','5128638'];
        }

    }

})();