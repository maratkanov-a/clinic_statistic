import React from "react";

require('./../../../css/content/__home/home.css');

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="content__home">
                        <div className="hello twelve columns">
                            <h3>
                                Привет, странник, ты зашел на сайт такой-то, здесь очень круто, ты можешь пройти тест,
                                посмотреть статистику по различным проектам
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Home;