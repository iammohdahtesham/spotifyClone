import thunk from 'redux-thunk';
import {AuthReducer} from './Reducer';
import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  fetchAuth: AuthReducer,
});

export default configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
