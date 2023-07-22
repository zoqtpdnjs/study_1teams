import { combineReducers } from 'redux';
import authenticateReducer from './authenticateReducer';

export default combineReducers({
    auth : authenticateReducer,
});