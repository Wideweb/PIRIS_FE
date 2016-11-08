import './client-list.css';

export default ngModule => {

    ngModule.controller('clientListCtrl', clientListCtrl);
     
    function clientListCtrl(){
        var vm = this;

        activate();

        function activate(){
            vm.message = "clientListCtrl";
        }
    };
}