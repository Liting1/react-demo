import React from "react";
import { Consumer } from '../../store';
import './item.less';

interface Props {
    index: number,
    type: string,
    itemId: string,
    store: any
}

interface State {
}

class Item extends React.PureComponent<Props, State> {
    render() {
        return <div className="component-item">
            <div className="component-item-mask"/>
            {this.props.children}
        </div>
    }
}

export default Consumer(Item);
