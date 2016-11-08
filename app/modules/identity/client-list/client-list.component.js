import template from './client-list.html';
import controller from './client-list.controller';
import './client-list.scss';

let clientListComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default clientListComponent;
