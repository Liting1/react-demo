import React from 'react';
import { Consumer } from './store'
import SideActionBar from "./components/SideActionBar";
import Preview from "./components/Preview";
import Setting from "./components/Setting";
import './App.css';
// import config from './config';

interface Props {
    store: object
}
interface State {

}

class App extends React.PureComponent<Props, State> {

    componentDidMount() {
    }

    render() {
        return (
            <div className="app">
                <SideActionBar />
                <Preview />
                <Setting />
            </div>
        );
    }
}

export default Consumer(App);
