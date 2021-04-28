import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './reducers';

const initialState = {};

const store = createStore(rootReducers, initialState, composeWithDevTools(
    applyMiddleware(thunk)
  ));

export default store;