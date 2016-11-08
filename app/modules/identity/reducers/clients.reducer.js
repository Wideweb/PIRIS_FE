import { CLIENTS } from '../constants/clients';

const initialState = [];

export function ClientsReducer(state = initialState, action) {
    switch(action.type) {
        case CLIENTS.ADD_CLIENT:
            return [...state, action.payload];
        case CLIENTS.REMOVE_CLIENT:
            return [
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
            ];
        default:
            return state;
    }
}
