import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Test from './components/test';

export default class App extends Component {
	render() {
		return(
			<div>
				<div className="inner-container">
					<Switch>
				    <Route path="/test" component={Test} />					
					</Switch>				
				</div>
			</div>
		);
	}
}