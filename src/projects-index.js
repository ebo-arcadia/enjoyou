import React from 'react';
import ReactDOM from 'react-dom';
import AppProjects from './AppProjects';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import ProjectsReducer from './reducers/ProjectsReducer.js';
import Projects from './containers/Projects.js';

const store = createStore(ProjectsReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider context={Projects} store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


