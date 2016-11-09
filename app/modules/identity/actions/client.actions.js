import { CLIENTS } from '../constants/clients';
import { CALL_API } from '../../common/middleware/http/http-middleware';

export const CLIENT_REQUEST = '@@reduxNgHttpMiddleware/clientRequest';
export const CLIENT_SUCCESS = '@@reduxNgHttpMiddleware/clientSuccess';
export const CLIENT_FAILURE = '@@reduxNgHttpMiddleware/clientFailure';

export function getClient() {
  return {
    [CALL_API]: {
      types: [CLIENT_REQUEST, CLIENT_SUCCESS, CLIENT_FAILURE],
      endpoint: `/src/data/stats-playoffs.json`
    }
  };
}

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
