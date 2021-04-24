import React from 'react';
import ReactDOM from 'react-dom';
import AppProjects from './AppProjects';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import ProjectsReducer from './reducers/ProjectsReducer.js';


const store = createStore(ProjectsReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


