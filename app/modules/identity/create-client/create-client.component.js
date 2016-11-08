import template from './create-client.html';
import controller from './create-client.controller';
import './create-client.scss';

let createClientComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default createClientComponent;
