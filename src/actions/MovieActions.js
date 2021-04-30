import { SEARCH_MOVIE, FETCH_MOVIES, LOADING_MOVIES } from './actionTypes';
import axios from 'axios';

export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    });
}

export const fetchMovies = text => dispatch => {
    axios
    .get(`http://www.omdbapi.com/?i=tt3896198&apikey=719c52a0&s=${text}`)
    .then(response => dispatch( { type: FETCH_MOVIES, payload: response.data} ))
    .catch(error => alert(error))
};

export const loadingMovies = () => {
    return {
        type: LOADING_MOVIES
    };
}
