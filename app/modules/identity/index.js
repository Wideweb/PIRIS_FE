import angular from 'angular';
import 'angular-ui-router';
import createClient from './create-client';
import clientList from './client-list';

const ngModule = angular.module('identity', [
    'ui.router'
]);

createClient(ngModule);
clientList(ngModule);

export default ngModule;