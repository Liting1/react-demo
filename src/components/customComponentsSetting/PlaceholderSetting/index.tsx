import React from "react";
import {Consumer} from '../../../store';
interface State {
    height: number
}

interface Props {
    config: any,
    store: any,
}

class PlaceholderSetting extends React.PureComponent<Props, State> {
    static defaultProps: {};
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        this.props.store.setStore((store:any) => {
            const module = store.modules.find((item:any) => item.itemId === this.props.config.itemId);
            module.height = Number(e.target.value);
            console.log(store.modules)
            return {
                modules: store.modules
            }

        })

    }
    render() {
        const { height } = this.props.config
        return <div>
            <h3>placeholder setting</h3>
            <input onChange={(e) => this.handleChange(e)} type="range" value={height}/>
        </div>;
    }

}

PlaceholderSetting.defaultProps = {
    config: {
        height: 30
    }
}

export default Consumer(PlaceholderSetting);
