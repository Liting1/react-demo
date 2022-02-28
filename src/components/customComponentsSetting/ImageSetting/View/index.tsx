import React from "react";
import SettingTitle from "../../baseComponents/SettingTitle";
import ListItem from "./ListItem";
import { Form, Switch, Select } from 'antd';
import { IF } from '../../../baseComponents';
import { mapAction } from '@/store';
import {ViewType} from "@/components/MVC";
import Model from '../Model'
import '../style/index.sass';

/**
 * 展示层组件为一个纯函数，无状态组件
 * @param props
 * @constructor
 */
const ImageView:ViewType<Model> = ({model}) => {
    const { styleList, showPage, itemId, pagination, showDetail, showPrice, style } = model;
    const setModule = mapAction('setModule').bind(null, itemId);
    return <div className="image-setting">
        <SettingTitle>图片</SettingTitle>
        <div className="image-setting-content">
            <p className="image-setting-style">选择样式</p>
            <ul className="image-setting-box">
                {styleList.map(
                    (item:any, idx:number) => (
                        <ListItem
                        desc={item.desc}
                        pic={item.pic}
                        key={idx}
                        active={item.style === style}
                        onClick={() => {
                            setModule({
                                style: item.style
                            })
                        }}
                    />)
                )}
            </ul>
            <IF>
                <Form.Item label="开启留白：">
                    <Switch />
                </Form.Item>
            </IF>

            <IF>
                <Form.Item label="图片间隙：">
                    <Switch />
                </Form.Item>
            </IF>
            <IF>
                <Form.Item label="首屏大图：">
                    <Switch />
                </Form.Item>
            </IF>
            <IF test={showPage}>
                <Form.Item label="开启页码：">
                    <Switch
                        checked={pagination}
                        onChange={(checked) => setModule({pagination:checked})}
                    />
                </Form.Item>
            </IF>
            <IF test={showPrice}>
                <Form.Item label="展示商品名称和价格">
                    <Switch
                        checked={showDetail}
                        onChange={checked => setModule({showDetail:checked})}
                    />
                </Form.Item>
            </IF>
            <IF>
                <Form.Item label="首屏个数: ">
                    <Select defaultValue="lucy" style={{ width: 120 }}>
                        <Select.Option value="jack">Jack</Select.Option>
                        <Select.Option value="lucy">Lucy</Select.Option>
                        <Select.Option value="disabled" >Disabled</Select.Option>
                        <Select.Option value="Yiminghe">yiminghe</Select.Option>
                    </Select>
                </Form.Item>
            </IF>
            <div>选品组件</div>
        </div>

    </div>
}




// ImageView.defaultProps = {
//     showPrice: false,
//     showDetail: false,
//     showPage: false,
//     styleList: [],
//     itemId: '',
//     showDetailHandle: (val: boolean) => {},
//     pagination: true,
//     style: 'slider1'
// }

export default ImageView;
