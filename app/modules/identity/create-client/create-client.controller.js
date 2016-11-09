import ClientActions from '../actions/client.actions';

class CreateClientController {
    
    constructor($ngRedux, clientService) {
        this.client = {};
        this.questions = [];

        this.clientService = clientService;
        this.unsubscribe = $ngRedux.connect(this.mapStateToThis, ClientActions)(this);

        this.clientService
            .getClientFormQuestions()
            .then(response => {
                this.questions = response.data;
            });
    }

    submitClient() {
        this.addClient(this.client);
        this.client = {};
    }

    $onDestroy() {
        this.unsubscribe();
    }

    mapStateToThis(state) {
        return {
            clients: state.clients
        };
    }
}

export default CreateClientController;
