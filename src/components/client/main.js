import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/client-recs';
import _ from 'lodash';

class Main extends Component {
	componentWillMount() {
		this.props.fetchRecommendations();
	}

	renderRecommendations() {
		const recs = _.map(this.props.recs, rec => {
			return(
				<div key={rec._id}>
					{rec.consultant.name}
				</div>
			);
		});

		return _.without(recs, undefined);
	}

	render() {
		const { recs } = this.props;

		if (!recs) return(<p>Loading...</p>);
		return(
			<div>
				{this.renderRecommendations()}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		recs: state.clientRecs
	}
}

export default connect(mapStateToProps, actions)(Main);