import React from "react";
import { mapAction } from '../../../store';
import SettingTitle from "../baseComponents/SettingTitle";
import { Form, Input, Select, Radio } from 'antd';

import './index.sass';

interface Props {
    itemId: string
    content: string
    fontSize: string
    color: string
    position: string
}

interface State {
}

class TitleSetting extends React.PureComponent<Props, State> {
    static defaultProps: {};
    el:any = null;

    handleChange(options:object){
        const { setModule } = mapAction();
        setModule(this.props.itemId, options);
    }
    render() {
        const { content, fontSize, color, position } = this.props;
        return <div className="title-setting">
            <SettingTitle>标题</SettingTitle>
            <div className="title-setting-content">
                <Form labelCol={{span: 5}}>
                    <Form.Item label="显示位置：">
                        <Radio.Group value={position} onChange={(e)=>this.handleChange({position: e.target.value})}>
                            <Radio value="left">居左</Radio>
                            <Radio value="center">居中</Radio>
                            <Radio value="right">居右</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item initialValue={content} name='title' label="标题名称：" rules={[{required: true, message: '请输入标题名称'}]} >
                        <Input
                            placeholder="最多可输入10个字符"
                            maxLength={10}
                            value={content}
                            onChange={e => this.handleChange({content: e.target.value})}
                        />
                    </Form.Item>
                    <Form.Item initialValue={fontSize} name="fontSize" label="字体大小：" rules={[{required: true}]}>
                        <Select value={fontSize} onChange={value => this.handleChange({fontSize: value})}>
                            <Select.Option value="20">20px</Select.Option>
                            <Select.Option value="18">18px</Select.Option>
                            <Select.Option value="16">16px</Select.Option>
                            <Select.Option value="14">14px</Select.Option>
                            <Select.Option value="12">12px</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item initialValue={color} name='color' label="文字颜色：" wrapperCol={{span: 8}} help="点击可修改文字颜色">
                        <Input
                            type="color"
                            value={color}
                            onChange={e => this.handleChange({color: e.target.value})}
                        />
                    </Form.Item>
                </Form>
            </div>
        </div>;
    }
}

TitleSetting.defaultProps = {
    content: ''
}

export default TitleSetting
