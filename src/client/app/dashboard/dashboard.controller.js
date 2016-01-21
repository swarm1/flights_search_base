(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function DashboardController($q, dataservice, logger) {
        var vm = this;
        vm.news = {
            title: 'flightSearch',
            description: 'Hot Towel Angular is a SPA template for Angular developers.'
        };
        vm.messageCount = 0;
        vm.people = [];
        vm.cities = [];
        vm.title = 'Dashboard';

        activate();

        function activate() {
            var promises = [getMessageCount(), getPeople(), getCities()];
            return $q.all(promises).then(function() {
                logger.info('Activated Dashboard View');
            });
        }

        function getMessageCount() {
            return dataservice.getMessageCount().then(function (data) {
                vm.messageCount = data;
                return vm.messageCount;
            });
        }

        function getPeople() {
            return dataservice.getPeople().then(function (data) {
                vm.people = data;
                return vm.people;
            });
        }
        function getCities () {
            return dataservice.getCities().then(function(data) {
                vm.cities = data;
                return vm.cities
            })
        }
    }
})();
