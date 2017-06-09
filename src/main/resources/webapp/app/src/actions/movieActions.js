import * as types from "./actionTypes";
import {URL} from "../config/http";

const MOVIE_URL = URL + "/movies";

export function loadMoviesSuccess(movies) {
	return {type: types.ALL_MOVIES, movies};
}

export function saveMovieSuccess(movie) {
	return {type: types.SAVE_MOVIE, movie};
}

export function loadMovies() {
	return (dispatch) => {
		return fetch(MOVIE_URL)
		.then(response => response.json())
		.then(movies => dispatch(loadMoviesSuccess(movies)));
	};
}

export function saveMovie(movie) {
	console.log(movie)
	return (dispatch) => {
		return fetch(MOVIE_URL, {mode: 'cors', method: "POST", headers: {"content-type":"application/json"}, body: JSON.stringify(movie)});
	};
}