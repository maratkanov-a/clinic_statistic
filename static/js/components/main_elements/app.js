import React from "react";

//main components
import Header from './header'
import Footer from './footer'

// main styles
require('./../../../css/lib/normalize.css');
require('./../../../css/lib/skeleton.css');

// bam styles
require('./../../../css/content/content.css');
require('./../../../css/footer/footer.css');

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                {/*<ul>*/}
                {/*<li><Link to="/">Home</Link></li>*/}
                {/*<li><Link to="/login">login</Link></li>*/}
                {/*<li><Link to="/test">test</Link></li>*/}
                {/*<li><Link to="/statistic">statistic</Link></li>*/}
                {/*</ul>*/}
                <div className="content">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
}