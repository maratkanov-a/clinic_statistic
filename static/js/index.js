import React from "react";
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from "react-router"

// custom modules
import Home from './components/home'
import Login from './components/login'
import Test from './components/test'
import Statistic from './components/test'

// main styles
require('./../css/lib/normalize.css');
require('./../css/lib/skeleton.css');

// bam styles
require('./../css/header/header.css');
require('./../css/content/content.css');
require('./../css/footer/footer.css');


class App extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="container">
                        <div className="logo three columns">
                            НИИ статистика
                        </div>
                        <div className="elements seven columns">
                            элементы
                        </div>
                        <div className="login two columns">
                            <button className="button">
                                <Link to="/login">Войти</Link>
                            </button>
                        </div>
                    </div>
                </div>
                {/*<ul>*/}
                    {/*<li><Link to="/">Home</Link></li>*/}
                    {/*<li><Link to="/login">login</Link></li>*/}
                    {/*<li><Link to="/test">test</Link></li>*/}
                    {/*<li><Link to="/statistic">statistic</Link></li>*/}
                {/*</ul>*/}
                <div className="content">
                    {this.props.children}
                </div>
                <div className="footer">

                </div>
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