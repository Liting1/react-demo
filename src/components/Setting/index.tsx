import React from "react";
import componentSetting from '../customComponentsSetting';
import { Consumer } from '@/store'
import { Data } from '@/store/data/store';
import './setting.sass'

interface Props {
    store: Data
}

interface State {
}

class Setting extends React.PureComponent<Props, State> {
    renderSettingComponent(){
        const { activeModule, modules, baseConfig} = this.props.store;
        let module = {};
        // 统一使用大写字母开头
        const type= `${activeModule.type}Setting`.replace(/^[a-z]/, val => val.toUpperCase())
        // @ts-ignore
        const Com = componentSetting[type];
        if(activeModule.type === 'Header') {
            module = baseConfig;
        } else {
            module = modules.find((item:any) => item.itemId === activeModule.itemId);
        }
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
