import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SubComponent extends Component {
    render() {
        return (
            <div>
                <h1>Hello from SubComponent</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>
        );
    }
}
