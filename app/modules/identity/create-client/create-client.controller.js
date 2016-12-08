import ClientActions from '../actions/client.actions';

class CreateClientController {
    
    constructor(clientService, $state, utils) {
        this.client = {};
        this.questions = [];
        this.utils = utils

        this.clientService = clientService;
        this.$state = $state;
        
        this.fetchClientForm();

        if($state.params.id){
            this.fetchClient();
        }
    }

    fetchClientForm() {
        this.clientService
            .getClientFormQuestions()
            .then(response => {
                this.questions = response.data;
            });
    }

    fetchClient() {
        this.clientService
            .getClient(this.$state.params.id)
            .then(response => {
                this.client = response.data;
            });
    }

    submitClient() {
        this.errors = [];
        
        this.clientService
            .saveClient(this.client)
            .then(response => this.utils.showSuccess())
            .catch(error => {
                this.errors = error.data[''];
                this.utils.showError();
            });
    }

    createClient(){
        this.client.id = 0;
        this.submitClient();
    }
}

export default CreateClientController;
