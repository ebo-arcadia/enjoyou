import { combineReducers } from 'redux';
import MovieReducer from './movieReducer';

export default combineReducers({
    movies: MovieReducer
});