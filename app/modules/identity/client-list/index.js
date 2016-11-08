import clientListCtrl from './client-list-ctrl.js';

export default ngModule => {
    clientListCtrl(ngModule);

    ngModule.config(function($stateProvider){
        $stateProvider.state('client-list', {
            url: '/client-list',
            template: require('./client-list.html'),
            controller: 'clientListCtrl'
        });
    });
}