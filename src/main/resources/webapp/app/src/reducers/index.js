import {combineReducers} from 'redux';
import movie from './movieReducer';
import genre from './genreReducer';

const rootReducer = combineReducers({
  movie, genre
})

export default rootReducer;