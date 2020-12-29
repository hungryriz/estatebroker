import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import Home from '../Home';
import Contact from '../Contact';
import Login from '../Login';
import Registration from '../Registration';
import { userLogout } from '../../redux/actions/authActions.js';

function Parties(props) {
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    useEffect(() => {
        // console.log(user);
    });
    return (
        <>
            <div>
                Parties
            </div>
        </>
    )
}

export default Parties;