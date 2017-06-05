import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import App from './app';
import reducers from './reducers';
import { AUTH_CLIENT } from './actions/types';
import { CLIENT_TOKEN_NAME } from './constants';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem(CLIENT_TOKEN_NAME);

// if we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_CLIENT });
}


ReactDOM.render(
  <Provider store={store}>
  	<BrowserRouter>
      <MuiThemeProvider>
  		  <App />
      </MuiThemeProvider>
  	</BrowserRouter>
  </Provider>
  , document.querySelector('.container'));