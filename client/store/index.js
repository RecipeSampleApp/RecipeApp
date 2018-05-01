import axios from 'axios';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { recipesReducer } from './recipesReducer'
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({ collapsed: true })));

const allReducers = combineReducers({ recipes: recipesReducer });
const store = createStore(allReducers, middleware);

export default store;