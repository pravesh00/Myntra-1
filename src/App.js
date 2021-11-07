import './App.css';
import Navbar from './components/navbar';
import Titlebar from './components/titlebar';
import Home from './components/home';
import Sizeprofile from './components/sizeprofile';
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <h3 id="h1">Clothes - 50 items</h3>
                    <Titlebar />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/sizeprofile">
                            <Sizeprofile />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
