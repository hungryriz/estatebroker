import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Activities from './Activities';
import Parties from './Parties';
import Listings from './Listings';
import ComingEvents from './ComingEvents';
import Opportunities from './Opportunities';
import PreviousDeals from './PreviousDeals';
import Notifications from './Notifications';

function Dashboard(props) {
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    let { path, url } = useRouteMatch();
    useEffect(() => {
        // console.log(user);
    });
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to={`${url}/parties`}>Parties</Link>
                    </li>
                    <li>
                        <Link to={`${url}/activities`}>Activities</Link>
                    </li>
                    <li>
                        <Link to={`${url}/listings`}>Listings</Link>
                    </li>
                    <li>
                        <Link to={`${url}/coming_events`}>Coming Events</Link>
                    </li>
                    <li>
                        <Link to={`${url}/notifications`}>Notifications</Link>
                    </li>
                    <li>
                        <Link to={`${url}/opportunities`}>Opportunities</Link>
                    </li>
                    <li>
                        <Link to={`${url}/previous_deals`}>Previous Deals</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path={`${url}/parties`}>
                    <Parties />
                </Route>
                <Route path={`${url}/activities`}>
                    <Activities />
                </Route>
                <Route path={`${url}/listings/:page?`}>
                    <Listings />
                </Route>
                <Route path={`${url}/coming_events`}>
                    <ComingEvents />
                </Route>
                <Route path={`${url}/notifications`}>
                    <Notifications />
                </Route>
                <Route path={`${url}/opportunities`}>
                    <Opportunities />
                </Route>
                <Route path={`${url}/previous_deals`}>
                    <PreviousDeals />
                </Route>
            </Switch>            
        </Router>
    );
}

export default Dashboard;