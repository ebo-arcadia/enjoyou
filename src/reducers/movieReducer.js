import { SEARCH_MOVIE } from '../actions/actionTypes'

const initialState = {
    text: '', 
    movies: [] 
}

const MovieReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_MOVIE:
            return {...state, text: action.payload};
        default: 
            return state;
    }
}

export default MovieReducer
