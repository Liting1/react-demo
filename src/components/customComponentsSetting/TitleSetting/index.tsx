import React from "react";

interface Props {
}

interface State {
}

class TitleSetting extends React.PureComponent<Props, State> {
    render() {
        return <div>
            <h2>Title setting</h2>
            <input type="text"/>
        </div>;
    }
}

export default TitleSetting
