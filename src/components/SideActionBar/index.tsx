import React from "react";
import { Consumer } from '../../store';
import './sideActionBar.css';
import componentConfig from "../../config/componentConfig";
// import { ComponentConfig } from '../../config/componentConfig/commonConfig'
interface Props {
    store: any
}

interface State {
    componentConfig: any
}

class SideActionBar extends React.PureComponent<Props, State> {
    constructor(props: Props | Readonly<Props>) {
        super(props);
        this.state = {
            componentConfig: componentConfig()
        }
    }

    handleClick(item: any){
        const { setStore } = this.props.store
        setStore((store:any) => {
            return store
        })
    }
    render() {
        return <div className="side-action-bar">
            <div>
                {
                    this.state.componentConfig.map((item:any, index: number) => <div key={index}>
                        <h5>{item.name}</h5>
                        {
                            item.components.map((com:any, idx:number) => {
                                return (
                                    <li key={idx}>
                                        <button onClick={() => this.handleClick(com.config)}>{ com.name }</button>
                                    </li>
                                )
                            })
                        }
                    </div>)
                }
            </div>
        </div>
    }
}

export default Consumer(SideActionBar);
