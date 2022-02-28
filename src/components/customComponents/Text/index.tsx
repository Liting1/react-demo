import React from "react";

import './index.sass';
interface Props {
    context: string
}

const Text = (props:Props) => {

    return <div className="component-text ql-snow">
        <div className="ql-editor" dangerouslySetInnerHTML={{__html: props.context}} />
    </div>
}

export default Text;
