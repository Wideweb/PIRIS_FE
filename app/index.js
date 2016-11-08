import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import config from './config';
import identityModule from './modules/identity';

import './index.css';

const ngModule = angular.module('app', [
    uiRouter,
    ngAnimate,
    
    identityModule.name
]);

config(ngModule);

export default ngModule;