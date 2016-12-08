import { Map, fromJS } from 'immutable';
import _ from 'lodash';

import { clientActionTypes, CLIENT_REQUEST, CLIENT_FAILURE, CLIENT_SUCCESS, CLIENT_LIST_SUCCESS } from '../actions/client-action-types';
import EventEmitter from './events.js';

const initialState = Map({
    client: {},
    clients: [],
    errors: []
});

export function ClientsReducer(state = initialState, action) {
    switch (action.type) {
        case clientActionTypes.ADD_CLIENT:
            return Map({
                clients: [...state, action.payload],
                client: action.payload
            });
        case clientActionTypes.REMOVE_CLIENT:
            return Map({
                clients: [
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
                ]
            });
        case clientActionTypes.CLEARE_CURRENT_CLIENT:
            return state.set('client', {});
        case CLIENT_SUCCESS:
            return state.set('client', action.payload);
        case CLIENT_LIST_SUCCESS:
            return state.set('clients', action.payload);
        case CLIENT_FAILURE:
            return state.set('errors', _.flatten(_.values(action.payload)));
        default:
            return state;
    }
}
