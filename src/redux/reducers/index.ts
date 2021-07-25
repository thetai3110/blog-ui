import { combineReducers } from 'redux';
import blogReducer from './blog_reducer';
import { authReducer } from './auth_reducer';

export default combineReducers({
    ...blogReducer,
    authReducer
})