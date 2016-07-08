import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SubComponent extends Component {
    render() {
        let { todos } = this.props;
        return (
            <div>
                <h1>Hello from SubComponent</h1>
                <h2>{todos.map(t => t.text)}</h2>
                <Link to="/">Home</Link>
            </div>
        );
    }
}
