import React from "react";
import store from './data/store';
import actions from './action';
const StoreContext = React.createContext(null);

interface Props {
}

interface State {
}

class Provider extends React.Component<Props, State> {
    static action:object = {};
    static setStore: any;
    constructor(props: Props | Readonly<Props>) {
        super(props);
        const setStore = this.setState.bind(this);
        Provider.setStore = setStore;
        this.state = Object.assign(store, { setStore });

        for(let key in actions) {
            // @ts-ignore
            Provider.action[key] = actions[key].bind(this, setStore);
        }
    }

    render() {
        return (
            // @ts-ignore
            <StoreContext.Provider value={this.state}>
                {this.props.children}
            </StoreContext.Provider>
        )
    }
}

const Consumer = (Component:any) => {
    return (arg:any) => <StoreContext.Consumer>
        {
            props => <Component {...arg} store={props} />
        }
    </StoreContext.Consumer>
}


// @ts-ignore
const mapAction = (key: string) => Provider.action[key];
const setStore = (val: object) => Provider.setStore(val);

export { Provider, Consumer, mapAction, setStore }
