import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import uiBootstrap from 'angular-ui-bootstrap';

import 'jquery';
import 'bootstrap-loader';

import config from './config';
import identityModule from './modules/identity';
import commonModule from './modules/common';

import './index.css';

const ngModule = angular.module('app', [
    uiRouter,
    ngAnimate,
    uiBootstrap,
    
    identityModule.name,
    commonModule.name
]);

config(ngModule);

export default ngModule;