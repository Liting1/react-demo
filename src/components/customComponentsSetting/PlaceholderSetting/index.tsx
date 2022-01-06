import React from "react";
import { Consumer, mapAction} from '../../../store';
import SettingTitle from "../baseComponents/SettingTitle";
import { Slider, Form } from 'antd';

import './index.sass';

interface State {
    height: number
}

interface Props {
    itemId: string,
    height: number,
    store: any,
}

class PlaceholderSetting extends React.PureComponent<Props, State> {
    static defaultProps: {};
    handleChange = (val:number) => {
        const { setModule } = mapAction();
        const { itemId } = this.props;
        setModule(itemId, {
            height: Number(val)
        })
    }
    render() {
        const { height } = this.props
        return <div className="placeholder-setting">
            <SettingTitle>空白站位</SettingTitle>
            <div className="placeholder-setting-content">
                <Form.Item label="空白高度：">
                    <Slider value={height} onChange={(val) => this.handleChange(val)} />
                </Form.Item>
            </div>

        </div>;
    }

}

PlaceholderSetting.defaultProps = {
    height: 30
}

export default Consumer(PlaceholderSetting);
