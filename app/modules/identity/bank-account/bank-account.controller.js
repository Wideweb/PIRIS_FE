class BankAccountController {
    
    constructor(bankService, $state) {
        this.questions = [];
        this.bankAccount = {};

        this.bankService = bankService;

        this.fetchBankAccount();
    }

    fetchBankAccountForm() {
        this.bankService
            .getBankAccountFormQuestions()
            .then(response => {
                this.questions = response.data;
            });
    }

    fetchBankAccount() {
        this.bankService
            .GetBankAccount(this.accountPlanId)
            .then(response => {
                this.deposit = response.data;
            });
    }
}

export default BankAccountController;
