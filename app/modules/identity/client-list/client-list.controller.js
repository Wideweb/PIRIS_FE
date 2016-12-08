import ClientActions from '../actions/client.actions';

class ClientListController {

    constructor($state, clientService) {
        this.clients = [];
        this.$state = $state;
        this.clientService = clientService;
        
        this.fetchAllClients();
    }

    editClient(client){
        this.$state.go('client-create', { id: client.id });
    }

    fetchAllClients(){
        this.clientService.getAllClients().then(response => {
            this.clients = response.data;
        })
    }
}

export default ClientListController;
