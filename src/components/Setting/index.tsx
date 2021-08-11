import React from "react";
import componentSetting from '../customComponentsSetting';
import { Consumer } from '../../store'
import './setting.css'

interface Props {
    store: any
}

interface State {
}

class Setting extends React.PureComponent<Props, State> {
    renderSettingComponent(){
        const {activeModule, modules} = this.props.store;
        const module = modules.find((item:any) => item.itemId === activeModule.itemId);
        // @ts-ignore
        const Com = componentSetting[`${activeModule.type}Setting`];
        return <Com {...module}/>
    }

    render() {
        return <div className="setting">
            <h2>setting Component</h2>
            <div>
                {this.renderSettingComponent()}
            </div>
        </div>;
    }
}

export default Consumer(Setting);
