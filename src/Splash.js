import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Splash.css'

export default class Splash extends Component {
    render() {
        return (
            <div className="splash-body">
                    <Link to="/main" >
                        <div className="splash-link">
                            <h1>Creatures</h1>
                            <h1>With</h1>
                            <h1>Horns</h1>
                        </div>
                    </Link>
            </div>
        )
    }
}
