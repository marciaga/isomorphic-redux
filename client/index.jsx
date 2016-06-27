import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from 'reducers';
import routes from 'routes';

let initialState = window.__INITIAL_STATE__;
const reducer = combineReducers(reducers);
const store = createStore(reducer, initialState);

render (
    <Provider store={store}>
        <Router children={routes} history={browserHistory} />
    </Provider>,
    document.getElementById('react-view')
);
