import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Edit from "./page/Edit";
import Home from "./page/Home";
import Template from "./page/Template";
import Test from "./page/Test";
import Guard from "@/components/HOC/Guard";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/Test">
                    <Test />
                </Route>
                <Route path="/Edit">
                    <Edit />
                </Route>
                <Route path="/Template">
                    <Guard>
                        <Template />
                    </Guard>
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
