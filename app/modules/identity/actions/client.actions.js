import { clientActionTypes, CLIENT_REQUEST, CLIENT_FAILURE, CLIENT_SUCCESS, CLIENT_LIST_SUCCESS } from './client-action-types';
import { CALL_API } from '../../common/middleware/http/http-middleware';
import urls from '../../common/constants/urls';

function fetchClient(id) {
    return {
        [CALL_API]: {
            types: [CLIENT_REQUEST, CLIENT_SUCCESS, CLIENT_FAILURE],
            payload: {
                url: urls.client,
                method: 'GET',
                params: {
                    id: id
                }
            }
        }
    };
}

function fetchAllClients() {
    return {
        [CALL_API]: {
            types: [CLIENT_REQUEST, CLIENT_LIST_SUCCESS, CLIENT_FAILURE],
            payload: {
                url: urls.getClientList,
                method: 'GET'
            }
        }
    };
}

function saveClient(client) {
    return {
        [CALL_API]: {
            types: [CLIENT_REQUEST, CLIENT_SUCCESS, CLIENT_FAILURE],
            payload: {
                url: urls.client,
                method: 'POST',
                data: client
            }
        }
    }
}

function removeClient(id) {
    return {
        [CALL_API]: {
            types: [CLIENT_REQUEST, clientActionTypes.ADD_CLIENT, CLIENT_FAILURE],
            payload: {
                url: urls.client,
                method: 'POST',
                data: {
                    id: id
                }
            }
        }
    };
}

function clearCurrentClient() {
    return {
        type: clientActionTypes.CLEARE_CURRENT_CLIENT
    }
}

export default { fetchClient, fetchAllClients, saveClient, removeClient, clearCurrentClient };
