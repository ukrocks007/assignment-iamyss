import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/home';


function App(props) {
    return (
        <React.StrictMode>
            <Router>
                <Switch>
                    <Route exact path="/" component={ HomePage } />
                </Switch>
            </Router>
        </React.StrictMode>
    );
}

export default App;
