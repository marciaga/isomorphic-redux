import React     from 'react';
import { Route } from 'react-router';
import App from './components';
import SubComponent from './components/SubComponent';

export default (
    <Route component={App} path="/">
        <Route component={SubComponent} path="/somewhere" />
    </Route>
);
