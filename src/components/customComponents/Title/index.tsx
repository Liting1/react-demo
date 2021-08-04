import React from "react";

interface Props {
    title: string
}

// 标题组件
class Title extends React.Component<Props> {
    static defaultProps: {};
    render() {
        return <div>
            <h3>{this.props.title}</h3>
        </div>
    }
}

Title.defaultProps = {
    title: '点击编辑【标题】'
}

export default Title;
