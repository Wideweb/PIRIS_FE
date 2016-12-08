import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import toaster from 'angularjs-toaster';
import chartJs from 'chart.js';
import ngChart from 'angular-chart.js';
import 'angular-mocks';

import 'jquery';
import 'bootstrap-loader';

import config from './config';
import identityModule from './modules/identity';
import commonModule from './modules/common';
import formsModule from './modules/forms';

import './index.css';
import './toaster.css';

import './content/logo.png';

const ngModule = angular.module('app', [
    uiRouter,
    ngAnimate,
    toaster,
    ngChart,
    //'ngMockE2E',
    
    identityModule.name,
    commonModule.name,
    formsModule.name
]);

config(ngModule);

export default ngModule;