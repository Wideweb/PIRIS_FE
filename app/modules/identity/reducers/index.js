import { combineReducers } from 'redux';
import { ClientsReducer }  from './clients.reducer';

export const RootReducer = combineReducers({
    clients: ClientsReducer
});
