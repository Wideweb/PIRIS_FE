import angular  from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux  from 'ng-redux';

import createClientComponent from './create-client/create-client.component';
import clientListComponent from './client-list/client-list.component';
import createClientAccountComponent from './create-client-account/create-client-account.component';
import depositComponent from './deposit/deposit.component';
import createDepositComponent from './create-deposit/create-deposit.component';
import bankComponent from './bank/bank.component';
import bankAccountComponent from './bank-account/bank-account.component';
import accountComponent from './account/account.component';
import createCreditComponent from './create-credit/create-credit.component';

import clientService from './services/client.service';
import clientAccountService from './services/client-account.service';
import accountService from './services/account.service';
import depositService from './services/deposit.service';
import bankService from './services/bank.service';
import creditService from './services/credit.service';

import { RootReducer } from './reducers';

const ngModule = angular
    .module('identity', [
        uiRouter,
        ngRedux
    ])
    
    .component('clientCreate', createClientComponent)
    .component('clientList', clientListComponent)
    .component('clientAccountCreate', createClientAccountComponent)
    .component('deposit', depositComponent)
    .component('createDeposit', createDepositComponent)
    .component('bank', bankComponent)
    .component('bankAccount', bankAccountComponent)
    .component('account', accountComponent)
    .component('createCredit', createCreditComponent)

    .service('clientService', clientService)
    .service('clientAccountService', clientAccountService)
    .service('accountService', accountService)
    .service('depositService', depositService)
    .service('bankService', bankService)
    .service('creditService', creditService)

    .config(($stateProvider, $ngReduxProvider) => {

        $stateProvider
            .state('client-create', {
                url: '/create-client?id',
                template: '<client-create></client-create>',
            })
            .state('client-list', {
                url: '/client-list',
                template: '<client-list></client-list>'
            })
            .state('client-account-create', {
                url: '/create-account-client?id',
                template: '<client-account-create></client-account-create>',
            })
            .state('deposit', {
                url: '/deposit?id',
                template: '<deposit></deposit>',
            })
            .state('create-deposit', {
                url: '/create-deposit',
                template: '<create-deposit></create-deposit>',
            })
            .state('create-credit', {
                url: '/create-credit',
                template: '<create-credit></create-credit>',
            })
            .state('bank', {
                url: '/bank',
                template: '<bank></bank>',
            })
            .state('account', {
                url: '/account?id',
                template: '<account></account>',
            })
            .state('not-found', {
                url: '/not-found',
                template: '<not-found></not-found>'
            });

        $ngReduxProvider.createStoreWith(RootReducer, ['httpMiddleware']);
    });

export default ngModule;
