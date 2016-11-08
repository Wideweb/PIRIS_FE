import angular from 'angular';
import config from './config';
import identityModule from './modules/identity';
import './index.css';
import 'angular-animate';

const ngModule = angular.module('app', [
    'ui.router',
    'ngAnimate',
    identityModule.name
]);

config(ngModule);

export default ngModule;