import React from 'react'

require('./../../../css/footer/footer.css');

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="twelve columns">
                        Сайт лицензирован так-то
                    </div>
                </div>
            </footer>
        )
    }
}