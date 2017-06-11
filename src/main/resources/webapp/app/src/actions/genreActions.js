import * as types from "./actionTypes";
import {URL} from "../config/http";

const GENRE_URL = URL + "/genres";

export function loadGenresSuccess(genres) {
	return {type: types.ALL_GENRES, genres};
}

export function loadGenres() {
	return (dispatch) => {
		return fetch(GENRE_URL)
		.then(response => response.json())
		.then(genres => dispatch(loadGenresSuccess(genres)));
	};
}

export function saveGenresSuccess(genres) {
	return {type: types.ALL_GENRES, genres};
}

export function saveGenre(genre) {
	return (dispatch) => {
		return fetch(GENRE_URL, {method:"POST", headers: {"content-type":"application/json"}, body: JSON.stringify(genre), });
	};
}