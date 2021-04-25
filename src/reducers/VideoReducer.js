const VideoReducer = (state = { cats: [], video: [], loading: false}, action) => {
    switch(action.type) {
        case 'LOADING_CATS':
            return {
                ...state,
                cats: [...state.cats],
                loading: true
            }
        case 'ADD_CATS':
            return {
                ...state,
                cats: action.cats,
                loading: false
            }
        case 'ADD_VIDEO':
            return {
                ...state,
                videoItems: action.videoItems,
                loading: false
            }
        default: 
            return state;
    }
}

export default VideoReducer