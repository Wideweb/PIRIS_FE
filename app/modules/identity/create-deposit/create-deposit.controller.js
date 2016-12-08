class CreateDepositController {
    
    constructor(depositService, $state, urls, $scope, clientAccountService, utils) {
        this.deposit = {};
        this.questions = [];

        this.depositService = depositService;
        this.$state = $state;
        this.urls = urls;
        this.$scope = $scope;
        this.clientAccountService = clientAccountService;
        this.utils = utils;
        
        $scope.$watch(() => this.deposit.masterClientAccountId, this.onMasterClientAccountChanged.bind(this));
    }

    getDepositPlanLookupsUrl() {
        return this.urls.getDepositPlanLookups
            + "?depositTypeId=" + this.deposit.depositTypeId
            + "&currencyId=" + this.deposit.currencyId;
    }

    getClientAccountLookupsUrl(accountPlanId) {
        return this.urls.getClientAccountLookups
            + "?clientId=" + this.deposit.clientId
            + (accountPlanId ? "&accountPlanId=" + accountPlanId : '');
    }

    canChooseDepositPlan() {
        return this.deposit.depositTypeId && this.deposit.currencyId;
    }

    canChooseClientAccount() {
        return this.deposit.clientId;
    }

    onMasterClientAccountChanged(clientAccountId, oldClientAccountId){
        if(!clientAccountId || clientAccountId == oldClientAccountId){
            return;
        }

        this.clientAccountService
            .getClientAccount(clientAccountId)
            .then(response => {
                var account = response.data;
                this.deposit.currencyId = account.currencyId;
            });
    }

    onTrySubmit(form){
        if(form.$valid){
            this.submitDeposit();
        }
    }

    submitDeposit() {
        this.errors = [];
        
        this.depositService
            .saveDeposit(this.deposit)
            .then(response => {
                this.utils.showSuccess();
                this.$state.go('deposit', { id: response.data });
            })
            .catch(error => {
                this.utils.showError();
                this.errors = error.data[''];
            });
    }
}

export default CreateDepositController;
