import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Home from './Home';

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};
class AppView extends Component {
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

export const connectedComponent = connect(mapStateToProps)(AppView);
