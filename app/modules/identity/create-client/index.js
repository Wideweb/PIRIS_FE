import createClientCtrl from './create-client-ctrl.js';

export default ngModule => {
    createClientCtrl(ngModule);

    ngModule.config(function($stateProvider){
        $stateProvider.state('client-create', {
            url: '/create-client',
            template: require('./create-client.html'),
            controller: 'createClientCtrl'
        })
    });
}