import * as types from '../actions/actionTypes.js'

export default function movieReducer(action) {
	if(action) {
		switch(action.type) {
			case types.ALL_MOVIES:
				return action.movies;
			default:
				return {};
		}
	}
	return {};
}