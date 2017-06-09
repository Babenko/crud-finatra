import * as types from '../actions/actionTypes.js'

export default function genreReducer(action) {	
	if(action) {
		switch(action.type) {
			case types.ALL_GENRES:
				return action.genres;
			default:
				return {};
		}
	}
	return {};
}