import firebase from '../config/firebase.js';

import { stories as storyTypeResources, generateResourceRef, generateItemRef } from '../config/api';

// Get stories of a specific type
export const getStories = (type) => {
    return firebase.ref(generateResourceRef(storyTypeResources[type]))
                    .once('value')
                    .then((snapshot) => {
                        return snapshot.val();
                    });
};

// Get a single item
export const getItem = (id) => {
    return firebase.ref(generateItemRef(id))
                    .once('value')
                    .then((snapshot) => {
                        return snapshot.val();
                    });
};
