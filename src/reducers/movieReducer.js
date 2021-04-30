import { SEARCH_MOVIE, FETCH_MOVIES, LOADING_MOVIES } from '../actions/actionTypes'

const initialState = {
    text: '', 
    movies: [],
    loading: false,
}

const MovieReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_MOVIE:
            return {...state, text: action.payload};
        case FETCH_MOVIES:
            return {...state, movies: action.payload}
        case LOADING_MOVIES:
            return {...state, loading: true}
        default: 
            return state;
    }
}

export default MovieReducer
