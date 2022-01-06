import React from "react";
import SideActionBar from "../../SideActionBar";
import SettingTitle from "../baseComponents/SettingTitle";
import './index.sass';


function InsertModule(){
    return <div className="insert-module-setting">
        <SettingTitle>添加组件</SettingTitle>
        <SideActionBar insert={true}/>
    </div>
}

export default InsertModule;
