import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Test from './components/test';
import Home from './components/home';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';

import ClientRequireAuth from './components/auth/client_require_auth';

export default class App extends Component {
	render() {
		return(
			<div>
				<div className="main-container">
					<Switch>
						<Route path="/signin" component={Signin} />
						<Route path="/signup" component={Signup} />
				    <Route path="/test" component={ClientRequireAuth(Test)} />
						<Route path="/" component={Home} />
					</Switch>				
				</div>
			</div>
		);
	}
}