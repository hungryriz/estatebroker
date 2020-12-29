import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { userLogout } from '../../redux/actions/authActions.js';

function ComingEvents(props) {
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    useEffect(() => {
        // console.log(user);
    });
    return (
        <>
            <div>
                ComingEvents
            </div>
        </>
    )
}

export default ComingEvents;