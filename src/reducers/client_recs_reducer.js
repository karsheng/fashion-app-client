import _ from 'lodash';
import {
	FETCH_RECOMMENDATIONS
} from '../actions/types';

export default function(state = {}, action) {
	switch(action.type) {
		case FETCH_RECOMMENDATIONS:
			return _.mapKeys(action.payload, '_id');
	}

	return state;
}