import { combineReducers } from 'redux';
import CommentReducer from './CommentReducer';
import StoryListReducer from './StoryListReducer';

export default combineReducers({
    stories: StoryListReducer,
    comments: CommentReducer
});
