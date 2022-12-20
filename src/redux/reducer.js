import { combineReducers } from 'redux';
import authReducer from '~/pages/publicPages/Login/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
