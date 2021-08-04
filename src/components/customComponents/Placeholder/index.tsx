import React from "react";

interface Props {
    config: any
}

class Placeholder extends React.Component<Props> {
    static defaultProps: {};
    render() {
        const { height } = this.props.config;
        return <div style={{height: height+ 'px'}}/>
    }
}

Placeholder.defaultProps = {
    config: {
        height: 30
    }
}

export default Placeholder;
