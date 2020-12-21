/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Menu from './components/Menu';


function App() {
    return (
        <Provider store={store}>
            <Menu />
        </Provider>
    );
}


ReactDOM.render(<App />, document.getElementById('app'));
