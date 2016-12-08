import template from './bank-account.html';
import controller from './bank-account.controller';
import './bank-account.css';

let BankAccountComponent = {
  restrict: 'E',
  bindings: {
    accountPlanId: '@',
    title: '@'
  },
  template,
  controller
};

export default BankAccountComponent;
