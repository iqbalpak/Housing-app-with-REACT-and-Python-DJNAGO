import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import Dashboard from './houses/Dashboard';
import Header from './layout/Header';

import { Provider } from 'react-redux';
import store from '../store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <div className="container">
                        <Dashboard />
                    </div>
                </Fragment>
            </Provider>
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'));