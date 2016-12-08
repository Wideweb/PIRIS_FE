import _ from 'lodash';

class BankController {
    
    constructor(bankService, clientAccountService, $state) {
        this.bankAccounts = [];
        this.clientAccounts = [];
        this.bankService = bankService;
        this.clientAccountService = clientAccountService;
        this.$state = $state;

        this.fetchAllBankAccounts();
        this.fetchAllClientAccounts();

        this.fetchBankDate();
        this.fetchAnnualReportData();

        this.labels = [];
        this.series = ['Credits', 'Deposits'];
        this.data = [];
    }

    closeBankDay(){
        this.bankService
            .closeBankDay()
            .then(response => {
                this.fetchAllBankAccounts();
                this.fetchAllClientAccounts();
                this.fetchAnnualReportData();
                this.fetchBankDate();
            });
    }

    fetchAnnualReportData(){
        this.bankService
            .getAnnualReportData()
            .then(response => {
                this.labels = _.map(response.data, 'monthName');
                this.data = [];
                this.data.push(_.map(response.data, 'credits'));
                this.data.push(_.map(response.data, 'deposits'));
            });
    }

    fetchBankDate(){
        this.bankService
            .getBankDate()
            .then(response => {
                this.bankDate = response.data;
            })
    }

    fetchAllBankAccounts(){
        this.bankService
            .getAllBankAccounts()
            .then(response => {
                this.bankAccounts = response.data;
            });
    }

    fetchAllClientAccounts(){
        this.clientAccountService
            .getAllClientAccounts()
            .then(response => {
                this.clientAccounts = response.data;
            });
    }

    goToAccount(accountId){
        this.$state.go('account', { id: accountId })
    }
}

export default BankController;
