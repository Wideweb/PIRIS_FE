class CreateCreditController {
    
    constructor(creditService, $state, urls, $scope, clientAccountService, utils) {
        this.credit = {};

        this.creditService = creditService;
        this.$state = $state;
        this.urls = urls;
        this.$scope = $scope;
        this.clientAccountService = clientAccountService;
        this.utils = utils;
        
        $scope.$watch(() => this.credit.masterClientAccountId, this.onMasterClientAccountChanged.bind(this));
    }

    getCreditPlanLookupsUrl() {
        return this.urls.getCreditPlanLookups
            + "?creditTypeId=" + this.credit.creditTypeId
            + "&currencyId=" + this.credit.currencyId;
    }

    getClientAccountLookupsUrl(accountPlanId) {
        return this.urls.getClientAccountLookups
            + "?clientId=" + this.credit.clientId
            + (accountPlanId ? "&accountPlanId=" + accountPlanId : '');
    }

    canChooseCreditPlan() {
        return this.credit.currencyId && this.credit.creditTypeId;
    }

    canChooseClientAccount() {
        return this.credit.clientId;
    }

    onMasterClientAccountChanged(clientAccountId, oldClientAccountId){
        if(!clientAccountId || clientAccountId == oldClientAccountId){
            return;
        }

        this.clientAccountService
            .getClientAccount(clientAccountId)
            .then(response => {
                var account = response.data;
                this.credit.currencyId = account.currencyId;
            });
    }

    onTrySubmit(form){
        if(form.$valid){
            this.submitCredit();
        }
    }

    submitCredit() {
        this.errors = [];
        
        this.creditService
            .saveCredit(this.credit)
            .then(response => {
                this.utils.showSuccess();
                //this.$state.go('credit', { id: response.data });
            })
            .catch(error => {
                this.utils.showError();
                this.errors = error.data[''];
            });
    }
}

export default CreateCreditController;
