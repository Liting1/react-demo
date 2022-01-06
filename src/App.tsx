import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Edit from "./page/Edit";
import Home from "./page/Home";
import Template from "./page/Template";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/Edit">
                    <Edit />
                </Route>
                <Route path="/Template">
                    <Template />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
