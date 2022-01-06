import React from "react";
import componentSetting from '../customComponentsSetting';
import { Consumer } from '../../store'
import './setting.sass'

interface Props {
    store: any
}

interface State {
}

class Setting extends React.PureComponent<Props, State> {
    renderSettingComponent(){
        const {activeModule, modules} = this.props.store;
        const module = modules.find((item:any) => item.itemId === activeModule.itemId);
        // 统一使用大写字母开头
        const type= `${activeModule.type}Setting`.replace(/^[a-z]/, val => val.toUpperCase())
        // @ts-ignore
        const Com = componentSetting[type];
        return Com ? <Com {...module}/> : null;
    }

    render() {
        const { activeModule } = this.props.store;
        return <div className="setting" style={{top: activeModule.top}}>
            <div>
                {this.renderSettingComponent()}
            </div>
        </div>;
    }
}

export default Consumer(Setting);
