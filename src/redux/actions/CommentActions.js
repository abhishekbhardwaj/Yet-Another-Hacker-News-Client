import {
    COMMENT_LISTING_RESET,
    COMMENT_LISTING_LOADING,
    COMMENT_LISTING_FETCH_SUCCESS
} from '../types';
import { getItem } from '../../network/api';

const dispatchCommentListingFetched = (payload) => {
    return {
        type: COMMENT_LISTING_FETCH_SUCCESS,
        payload: payload
    };
};

const dispatchCommentListingLoading = () => {
    return { type: COMMENT_LISTING_LOADING };
};

/**
 *
 * Get info on a single comment and all its children.
 *
 * NOTES:
 * ==============
 *
 * Return a new promise, as we
 * can't return getItem's promise since it'll
 * trigger return in fetchComments before all recursion is done.
 */
const getComment = (id) => {
    return new Promise((resolve, reject) => {

        getItem(id)
            .then((item) => {
                if(item.kids && item.kids.length > 0) {
                    // child comments, lets fetch them recursively.
                    let results = Promise.all(item.kids.map(getComment));
                    results.then((kids) => {
                        resolve({ ...item, kids: kids });
                    });
                } else {
                    // if no child comments, return as is.
                    resolve(item);
                }
            })
            .catch((error) => {
                reject(error);
            });

    });
};

// Reset comment state
export const resetComments = () => {
    return {
        type: COMMENT_LISTING_RESET
    };
};

// Recursively fetch all comments (hierarchial)
// for a certain item.
export const fetchComments = (item) => {
    return (dispatch) => {
        dispatch(dispatchCommentListingLoading());

        if(item.kids && item.kids.length > 0) {

            let results = Promise.all(item.kids.map(getComment));
            results.then((comments) => {
                dispatch(dispatchCommentListingFetched(comments));
            });

        } else {
            dispatch(dispatchCommentListingFetched([]));
        }
    };
};
