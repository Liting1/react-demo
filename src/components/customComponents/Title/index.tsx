import React from "react";
import { mapGetter } from "@/store";
import './index.sass'

interface Props {
    env: string
    theme: string
    content: string
    color: string
    position: 'center' | 'left' | 'right'
    fontSize: number | string
}

// 标题组件
class Title extends React.PureComponent<Props> {
    static defaultProps: {};
    render() {
        const { fontSize, color, position } = this.props;
        const style = {
            fontSize: fontSize + 'px',
            color: color,
            textAlign: position
        }
        return <div className="component-title">
            <h3 style={style}>{this.props.content}</h3>
        </div>
    }
}

Title.defaultProps = {
    content: '',
    fontSize: 18,
    color: '#000000',
    position: 'center'
}

export default Title;
