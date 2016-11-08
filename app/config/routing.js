export default ngModule => {
    ngModule.run($rootScope => {
        $rootScope.$on('$stateChangeStart', (e, toState, toStateParams, fromState, fromStateParams) => {
            toState.controllerAs = 'vm';
        })
    });
}