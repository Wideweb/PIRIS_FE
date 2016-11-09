import ClientActions from '../actions/client.actions';

class ClientListController {

    constructor($ngRedux) {
        this.unsubscribe = $ngRedux.connect(this.mapStateToThis, ClientActions)(this);
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

export default ClientListController;
