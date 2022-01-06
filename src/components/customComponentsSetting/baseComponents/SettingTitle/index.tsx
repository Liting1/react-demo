import React from "react";
import './index.sass';

interface Props {
    children: JSX.Element | string
}

const SettingTitle = (props:Props) => {
    return <h3 className="setting-title">{props.children}</h3>
}

export default SettingTitle;
