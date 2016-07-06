import React     from 'react';
import { Route } from 'react-router';
import { connectedComponent } from './components';
import SubComponent from './components/SubComponent';

export default (
    <Route component={connectedComponent} path="/">
        <Route component={SubComponent} path="/somewhere" />
    </Route>
);
