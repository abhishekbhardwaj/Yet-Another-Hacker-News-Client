import {
    COMMENT_LISTING_RESET,
    COMMENT_LISTING_LOADING,
    COMMENT_LISTING_FETCH_SUCCESS
} from '../types';

const INITIAL_STATE = {
    // If comments are being loaded
    isFetching: false,

    // Current comment listing
    data: []
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case COMMENT_LISTING_LOADING:
            return { ...state, isFetching: true };

        case COMMENT_LISTING_FETCH_SUCCESS:
            return { ...state, data: action.payload, isFetching: false };

        case COMMENT_LISTING_RESET:
            return INITIAL_STATE;

        default:
            return state;
    }
};
