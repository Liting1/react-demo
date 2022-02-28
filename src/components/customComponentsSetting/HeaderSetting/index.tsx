import React from "react";
import SettingTitle from "../baseComponents/SettingTitle";
import ChooseProducts from "@/components/ChooseProducts";
import './index.sass';

interface props {
}

interface state {
}

class HeaderSetting extends React.PureComponent<state, props> {
    componentDidMount() {
        console.log('header', this.props)
    }

    render() {
        return <div className="header-setting">
            <SettingTitle>基本信息</SettingTitle>
            <div className="header-setting-content">
                <ChooseProducts />
            </div>
        </div>
    }
}

export default HeaderSetting;
