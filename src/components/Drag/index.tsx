import React from "react";
import Sortablejs from 'sortablejs';
import Item from './Item';
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

    }

    onEnd(evt: Sortablejs.SortableEvent){

    }

    render() {
        return <div className="component-drag" ref={el => this.dragDom = el}>{this.props.children}</div>
    }
}

Drag.Item = Item;

export default Drag;
