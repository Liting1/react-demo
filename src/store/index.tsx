import React from "react";
import store from './data/store';
import actions from './actions';
import getters, {Getters, FetFun} from './getters';


const StoreContext = React.createContext({});

interface Props {}

interface State {}

class Provider extends React.Component<Props, State> {
    static setStore: any;
    static getters:Getters = getters;
    static actions:object = {};
    constructor(props: Props | Readonly<Props>) {
        super(props);
        const setStore = this.setState.bind(this);
        Provider.setStore = setStore;
        this.state = Object.assign(store, { setStore });
        for(let key in actions) {
            // @ts-ignore
            Provider.actions[key] = actions[key].bind(this, setStore);
        }

        let key: keyof Getters;
        for(key in getters) {
            if(getters.hasOwnProperty(key)){
                Provider.getters[key] = getters[key].bind(null, this);
            }
        }
    }

    render() {
        return (
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


const mapAction = (key?: string):any => {
    if(key) { // @ts-ignore
        return Provider.actions[key];
    }
    return Provider.actions;
};

const mapGetter = (key?:keyof Getters):Getters|FetFun => {
    if(key) {
        return Provider.getters[key];
    }
    return Provider.getters;
}

const setStore = (val: object) => Provider.setStore(val);

export { Provider, Consumer, mapAction, setStore, mapGetter }
