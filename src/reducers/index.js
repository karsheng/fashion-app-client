import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import clientAuth from './client_auth_reducer';

const rootReducer = combineReducers({
  form,
  clientAuth
});

export default rootReducer;
