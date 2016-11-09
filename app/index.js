import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import 'jquery';
import 'bootstrap-loader';

import config from './config';
import identityModule from './modules/identity';
import commonModule from './modules/common';
import formsModule from './modules/forms';

import './index.css';

const ngModule = angular.module('app', [
    uiRouter,
    ngAnimate,
    
    identityModule.name,
    commonModule.name,
    formsModule.name
]);

config(ngModule);

export default ngModule;