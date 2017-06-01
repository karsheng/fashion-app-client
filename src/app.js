import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Test from './components/test';
import Signup from './components/auth/signup';

export default class App extends Component {
	render() {
		return(
			<div>
				<div className="inner-container">
					<Switch>
						<Route path="/signup" component={Signup} />
				    <Route path="/test" component={Test} />					
					</Switch>				
				</div>
			</div>
		);
	}
}