import React from "react";
import Sortablejs from 'sortablejs';
import Item from './Item';
import { mapAction } from '../../store';
import './drap.css';

interface Props {
}

interface State {
}

class Drag extends React.PureComponent<Props, State> {
    static Item: (arg: any) => JSX.Element;
    private dragDom: HTMLElement | null;
    constructor(props: Props | Readonly<Props>) {
        super(props);
        this.dragDom = null;
    }
    componentDidMount() {
        if (this.dragDom) {
            Sortablejs.create(this.dragDom, {
                onStart: (evt) => this.onStart(evt),
                onEnd: (evt) => this.onEnd(evt)
            });
        }
    }

    onStart(evt: Sortablejs.SortableEvent){
        console.log(77777, evt);
    }

    onEnd(evt: Sortablejs.SortableEvent){
        const {oldIndex, newIndex, item} = evt;
        const { dragModule, setActiveModule } = mapAction();
        if(oldIndex === newIndex) return;
        dragModule(newIndex, oldIndex);
        setActiveModule({top: item.offsetTop || 0});
    }

    render() {
        return <div className="component-drag" ref={el => this.dragDom = el}>{this.props.children}</div>
    }
}

Drag.Item = Item;

export default Drag;
