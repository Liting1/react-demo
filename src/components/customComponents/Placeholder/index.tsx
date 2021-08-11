import React from "react";

interface Props {
    height: number
}

class Placeholder extends React.Component<Props> {
    static defaultProps: {};
    render() {
        const { height } = this.props;
        return <div style={{height: height+ 'px'}}/>
    }
}

Placeholder.defaultProps = {
    height: 30
}

export default Placeholder;
