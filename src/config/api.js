// All API resources as listed at: https://github.com/HackerNews/API

export const hnWebUrl = "https://news.ycombinator.com/";
export const baseUrl = "https://hacker-news.firebaseio.com/";

export const version = "v0/";

export const stories = {
    new: "newstories",
    top: "topstories",
    show: "showstories",
    ask: "askstories",
    job: "jobstories",
    best: "beststories"
};

export const item = "item/";

/**
 * Generates a firebase path by prepending
 * the api version to the resource passed in.
 */
export const generateResourceRef = (resource) => {
    return version + resource;
};

/**
 * Generates a reference URL for
 * the resource to get a single item.
 */
export const generateItemRef = (id) => {
    return generateResourceRef(item) + id;
};


/**
 * Generate url for HN Web, based on the story ID.
 */
export const generateWebItemUrl = (id) => {
    return hnWebUrl + "item?id=" + id;
};
