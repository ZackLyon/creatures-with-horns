import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import Main from './Main.js'
import Splash from './Splash.js'

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Splash {...routerProps} />} 
                        />
                        <Route 
                            path="/main" 
                            exact
                            render={(routerProps) => <Main {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}
