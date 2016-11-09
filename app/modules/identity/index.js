import angular  from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux  from 'ng-redux';

import createClientComponent from './create-client/create-client.component';
import clientListComponent from './client-list/client-list.component';

import { RootReducer } from './reducers';

const ngModule = angular
    .module('identity', [
        uiRouter,
        ngRedux
    ])
    
    .component('clientCreate', createClientComponent)
    .component('clientList', clientListComponent)

    .config(($stateProvider, $ngReduxProvider) => {

        $stateProvider
            .state('client-create', {
                url: '/create-client',
                template: '<client-create></client-create>',
            })
            .state('client-list', {
                url: '/client-list',
                template: '<client-list></client-list>'
            });


        $ngReduxProvider.createStoreWith(RootReducer);
    });

export default ngModule;
