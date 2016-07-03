import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import * as reducers from './shared/reducers';

const sagaMiddleware = createSagaMiddleware()
const reducer = combineReducers(reducers);

export function configureStore(initialState) {
    const store = createStore(reducer, initialState, compose(
        applyMiddleware(sagaMiddleware),
        typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    ));

    return store;
}
