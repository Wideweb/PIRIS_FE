import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux  from 'ng-redux';
import ngReduxUiRouter from 'redux-ui-router';

import navigationComponent from './navigation/navigation.component';
import footerComponent from './footer/footer.component';
import pirisSelectComponent from './piris-select/piris-select.component';
import notFoundComponent from './not-found/not-found.component';

import DateInputDirective from './directives/date-input.directive';

import httpMiddleware from './middleware/http/http-middleware';
import redirectMiddleware from './middleware/route/redirect-middleware';

import urls from './constants/urls';

import utils from './services/utils';

const ngModule = angular
    .module('common', [
        uiRouter,
        ngRedux,
        ngReduxUiRouter
    ])

    .component('navigation', navigationComponent)
    .component('footer', footerComponent)
    .component('pirisSelect', pirisSelectComponent)
    .component('notFound', notFoundComponent)

    .directive('dateInput', () =>new DateInputDirective())

    .factory('httpMiddleware', httpMiddleware)
    .factory('redirectMiddleware', redirectMiddleware)

    .service('utils', utils)

    .constant('urls', urls);

export default ngModule;