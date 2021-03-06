import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts'
import {  reducer as fromReducer } from 'redux-form'

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: fromReducer
});

export default rootReducer;
