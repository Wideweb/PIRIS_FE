import './create-client.css';

export default ngModule => {

    ngModule.controller('createClientCtrl', createClientCtrl);
    
    function createClientCtrl(){
        var vm = this;

        activate();

        function activate(){
            vm.message = "createClientCtrl";
        }
    };
}