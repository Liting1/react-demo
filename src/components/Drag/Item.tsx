import React from "react";
import { Consumer, mapAction} from '../../store';
import './item.sass';

interface Props {
    index: number,
    type: string,
    itemId: string,
    store: any
}

interface State {
}

class Item extends React.PureComponent<Props, State> {
    handleClick(){
      const {setActiveModule} = mapAction();
      const {index, itemId, type} = this.props;
      setActiveModule({index, itemId, type});
    }
    getClassName(){
        let className = 'component-item-mask ';
        if(this.props.store.activeModule.itemId === this.props.itemId) {
            className += 'component-item-active';
        }
        return className;
    }
    render() {
        return <div className="component-item" onClick={() => this.handleClick()}>
            <div className={this.getClassName()}/>
            {this.props.children}
        </div>
    }
}

export default Consumer(Item);
