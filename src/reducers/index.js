import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import clientAuth from './client_auth_reducer';
import clientRecs from './client_recs_reducer';

const rootReducer = combineReducers({
  form,
  clientAuth,
  clientRecs
});

export default rootReducer;
