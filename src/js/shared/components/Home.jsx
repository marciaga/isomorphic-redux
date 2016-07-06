import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Hello from Home Component</h1>
                {this.props.children}
            </div>
        );
    }
}
