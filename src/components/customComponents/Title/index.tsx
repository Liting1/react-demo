import React from "react";
import './index.sass'

interface Props {
    text: string
    env: string
}

// 标题组件
class Title extends React.Component<Props> {
    static defaultProps: {};
    render() {
        return <div className="component-title">
            <h3>{this.props.text}</h3>
        </div>
    }
}

Title.defaultProps = {
    text: '点击编辑【标题】'
}

export default Title;
