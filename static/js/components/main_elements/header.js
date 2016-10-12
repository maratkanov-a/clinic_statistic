import React from 'react'
import { Link } from 'react-router'

require('./../../../css/header/header.css');

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="logo three columns">
                        <Link to="/">НИИ статистика</Link>
                    </div>
                    <div className="elements seven columns">
                        элементы
                    </div>
                    <div className="login two columns">
                        <Link className="button" to="/login">Войти</Link>
                    </div>
                </div>
            </header>
        )
    }
}