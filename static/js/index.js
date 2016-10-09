import React from "react";
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from "react-router"
import Home from './components/main'
import Login from './components/login'
import Test from './components/test'
import Statistic from './components/test'

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/test">test</Link></li>
                    <li><Link to="/statistic">statistic</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

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