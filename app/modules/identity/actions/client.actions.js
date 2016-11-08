import { CLIENTS } from '../constants/clients';

function addClient(client){
    return {
        type: CLIENTS.ADD_CLIENT,
        payload: client
    }
}

function removeClient(index){
    return {
        type: CLIENTS.REMOVE_CLIENT,
        payload: index
    };
}

export default { addClient, removeClient };
