class DepositController {
    
    constructor(depositService, $state, urls, $scope, accountService) {
        this.deposit = {};
        this.questions = [];

        this.depositService = depositService;
        this.$state = $state;
        this.urls = urls;
        this.$scope = $scope;
        this.accountService = accountService;

        if(this.$state.params.id){
            this.fetchDeposit();
        }
        
        $scope.$watch(() => this.deposit.masterClientAccountId, this.onMasterClientAccountChanged.bind(this));
    }

    fetchDeposit() {
        this.depositService
            .getDeposit(this.$state.params.id)
            .then(response => {
                this.deposit = response.data;
            });
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

    onMasterClientAccountChanged(accountId, oldAccountId){
        if(!accountId || accountId == oldAccountId){
            return;
        }

        this.accountService
            .getAccount(accountId)
            .then(response => {
                var account = response.data;
                this.deposit.currencyId = account.currencyId;
            });
    }
}

export default DepositController;
