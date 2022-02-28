import React from "react";
import {Button} from "antd";
import {ViewType} from "@/components/MVC";
import Model from '../Model';
import Controller from '../Controller';
import './index.sass';


const BottomBatView:ViewType<Model,Controller> = ({controller}) => {
    return <div className="bottom-bar">
        <div className="bottom-bar-container">
            <Button type="primary" onClick={() => controller.okHandle()}>确定</Button>
            <Button onClick={() => controller.cancelHandle()}>取消</Button>
        </div>
    </div>
}

export default BottomBatView
