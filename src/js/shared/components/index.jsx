import React, { Component } from 'react';
import { Link } from 'react-router';
import Home from './Home';

export default class AppView extends Component {
    render() {
        return (
            <div id="app-view">
                <Home>
                    <ul>
                        <li><Link to="/somewhere">SubComponent</Link></li>
                    </ul>
                    {this.props.children}
                </Home>
            </div>
        );
    }
}
