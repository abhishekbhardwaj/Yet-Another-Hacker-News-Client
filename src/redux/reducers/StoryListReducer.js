import {
    STORY_LISTING_TYPE_CHANGED,
    STORY_LISTING_FETCH_SUCCESS,
    STORY_LISTING_LOADING
} from '../types';

const INITIAL_STATE = {
    // Type of story listing: new, top, job, ask, show, best
    type: '',

    // If data is currently being fetched
    isFetching: false,

    // Current story listing
    data: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STORY_LISTING_TYPE_CHANGED:
            return { ...state, type: action.payload };

        case STORY_LISTING_FETCH_SUCCESS:
            return { ...state, data: action.payload, isFetching: false };

        case STORY_LISTING_LOADING:
            return { ...state, isFetching: true };

        default:
            return state;
    }
};
