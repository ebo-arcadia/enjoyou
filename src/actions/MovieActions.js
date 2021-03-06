import { SEARCH_MOVIE, FETCH_MOVIES, LOADING_MOVIES } from './actionTypes';
import axios from 'axios';

export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    });
}

export const loadAndFetchMovies = (text) => {
    return (dispatch) => {
        dispatch( { type: LOADING_MOVIES });
    return axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=719c52a0&s=${text}`)
    .then(response => dispatch( { type: FETCH_MOVIES, payload: response.data} )
    ).catch(error => alert(error)
    )}
};

