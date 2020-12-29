import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import { userLogout } from '../redux/actions/authActions.js';
import Dashboard from '../pages/Dashboard';

function Menu(props) {
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    useEffect(() => {
        // console.log(user);
        // console.log('menu');
    });
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contactus">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                        {
                            !user.loggedin ? 
                            (
                                <>
                                    <li>
                                        <Link to="/login">Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/registration">Registration</Link>
                                    </li>
                                </>
                            )
                            :
                            (
                                <li>
                                    <Link onClick={(e) => { e.preventDefault(); dispatch(userLogout()) } } to="/">Logout</Link>
                                </li>
                            )
                        }
                </ul>
            </nav>

            <Switch>
                <Route path="/contactus">
                    <Contact />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/registration">
                    <Registration />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>            
        </Router>
    );
}

export default Menu;