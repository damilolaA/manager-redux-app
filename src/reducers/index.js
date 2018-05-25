import { combineReducers } from 'redux';
import AuthReducer from './index.js';

export default combineReducers({
	auth: AuthReducer;
});