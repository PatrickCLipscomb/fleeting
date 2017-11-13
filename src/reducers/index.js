import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { data, providers, dataIsLoading, dataHasErrored } from './data';

export default combineReducers({
    routing: routerReducer,
    data,
    providers,
    dataIsLoading,
    dataHasErrored
});
