class AccountController {

    constructor($state, accountService) {
        this.transactions = [];
        this.$state = $state;
        this.accountService = accountService;
        
        this.fetchAccountTransactionList();
    }

    fetchAccountTransactionList(){
        this.accountService.getAccountTransactionList(this.$state.params.id)
        .then(response => {
            this.transactions = response.data;
        })
    }
}

export default AccountController;
