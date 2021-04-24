import React from 'react';
import ReactDOM from 'react-dom';
import Projects from './containers/Projects';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import ProjectsReducer from './reducers/ProjectsReducer.js';

const store = createStore(ProjectsReducer, applyMiddleware(thunk))

function AppProjects() {
    <Provider store={store}>
        <App-Projects />
    </Provider>
}

