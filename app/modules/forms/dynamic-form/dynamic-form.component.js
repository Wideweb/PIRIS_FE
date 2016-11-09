import controller from './dynamic-form.controller';
import template from './dynamic-form.html';
import './dynamic-form.css';

let dynamicFormComponent = {
    restrict: 'E',
    bindings: {
        questions: '<',
        ngModel: '=',
        onSubmit: '&'
    },
    template,
    controller
}

export default dynamicFormComponent;