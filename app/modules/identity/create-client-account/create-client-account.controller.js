class CreateClientAccountController {
    
    constructor(clientAccountService, $state, utils) {
        this.clientAccount = {};
        this.questions = [];
        this.disableForm = false;

        this.clientAccountService = clientAccountService;
        this.$state = $state;
        this.utils = utils;

        this.fetchClientAccountForm()

        if(this.$state.params.id){
            this.fetchClientAccount();
            this.disableForm = true;
        }
    }

    fetchClientAccountForm() {
        this.clientAccountService
            .getClientAccountFormQuestions()
            .then(response => {
                this.questions = response.data;
            });
    }

    fetchClientAccount() {
        this.clientAccountService
            .getClientAccount(this.$state.params.id)
            .then(response => {
                this.clientAccount = response.data;
            });
    }

    submitClientAccount() {
        this.errors = [];
        
        this.clientAccountService
            .saveClientAccount(this.clientAccount)
            .then(response => {
                this.utils.showSuccess();
                this.$state.go('client-account-create', { id: response.data })
            })
            .catch(error => {
                this.errors = error.data[''];
                this.utils.showError();
            });
    }
}

export default CreateClientAccountController;
