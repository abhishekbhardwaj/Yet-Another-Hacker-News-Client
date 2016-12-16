import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import {
    STORY_LISTING_TYPE_CHANGED,
    STORY_LISTING_FETCH_SUCCESS,
    STORY_LISTING_LOADING,
    SINGLE_ITEM_FETCH_SUCCESS
} from '../types';

import { stories as storyTypeResources } from '../../config/api';
import { getItem, getStories } from '../../network/api.js';

export const changeStoryType = (text) => {
    return {
        type: STORY_LISTING_TYPE_CHANGED,
        payload: text
    };
};

export const getStoryTypeForModalSelection = () => {
    let types = [];

    _.forEach(storyTypeResources, (val, key) => {
        types.push({
            key: key,
            label: _.capitalize(key)
        });
    });

    return types;
};

export const fetchItem = (id) => {
    return (dispatch) => {
        getItem(id).then((item) => {
            dispatch({
                type: SINGLE_ITEM_FETCH_SUCCESS,
                payload: item
            });
        });
    };
};

export const fetchStories = (type) => {
    return (dispatch) => {
        dispatch({ type: STORY_LISTING_LOADING });

        getStories(type).then((itemIds) => {
            // using Promise.all() - http://stackoverflow.com/a/31414472
            let results = Promise.all(itemIds.map(getItem));
            results.then((items) => {
                dispatch({
                    type: STORY_LISTING_FETCH_SUCCESS,
                    payload: items
                });
            });
        });

    };
};
