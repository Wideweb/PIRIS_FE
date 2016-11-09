import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux  from 'ng-redux';

import navigationComponent from './navigation/navigation.component'
import footerComponent from './footer/footer.component'

const ngModule = angular
    .module('common', [
        uiRouter,
        ngRedux
    ])

    .component('navigation', navigationComponent)
    .component('footer', footerComponent)

    .config(($stateProvider) => {
        
    });

export default ngModule;