import React from "react";
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from "react-router"

// main app
import App from './components/main_elements/app'

// pages
import Home from './components/pages/home'
import Login from './components/pages/login'
import Test from './components/pages/test'
import Statistic from './components/pages/test'


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="login" component={Login} />
            <Route path="/test" component={Test} />
            <Route path="/statistic/:projectName" component={Statistic} />
        </Route>
    </Router>,
    document.getElementById("body")
);