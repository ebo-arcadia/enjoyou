import { SEARCH_MOVIE, FETCH_MOVIES } from './actionTypes';
import axios from 'axios';

export const searchMoive = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    });
}

export const fetchMovies = text => dispatch => {
    axios
    .get(`https://www.omdbapi.com/?apikey=719c52a0&s=${text}`)
    .then(response => dispatch( { type: FETCH_MOVIES, payload: response.data} ))
    .catch(error => alert(error))
};
