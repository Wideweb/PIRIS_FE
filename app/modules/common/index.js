import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux  from 'ng-redux';

import navigationComponent from './navigation/navigation.component';
import footerComponent from './footer/footer.component';

import httpMiddleware from './middleware/http/http-middleware';

import urls from './constants/urls';

const ngModule = angular
    .module('common', [
        uiRouter,
        ngRedux
    ])

    .component('navigation', navigationComponent)
    .component('footer', footerComponent)

    .factory('httpMiddleware', httpMiddleware)

    .constant('urls', urls);

export default ngModule;