import { ClientActions } from '../actions/client.actions';

class CreateClientController {
    constructor($ngRedux) {
        this.client = '';
        this.unsubscribe = $ngRedux.connect(this.mapStateToThis, ClientActions)(this);
    }

    submitClient() {
        this.addClient(this.client);
        this.client = '';
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
