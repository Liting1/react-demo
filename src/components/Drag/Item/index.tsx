import React from "react";
import { Consumer, mapAction} from '../../../store';
import Icon from "../../Icon";
import { Modal } from 'antd';
import './index.sass';

interface Props {
    index: number,
    type: string,
    itemId: string,
    store: any
}

interface State {
    visible: boolean
}

class Item extends React.PureComponent<Props, State> {
    private ele: HTMLDivElement | null;
    constructor(props: Props | Readonly<Props>) {
        super(props);
        this.state = {
            visible: false
        }
        this.ele = null;
    }

    handleClick(e:any){
        const top = e.currentTarget.offsetTop || 0;
        const {setActiveModule} = mapAction();
        const {index, itemId, type} = this.props;
        setActiveModule({index, itemId, type, top});
    }
    getClassName(){
        let className = 'component-item-mask ';
        if(this.props.store.activeModule.itemId === this.props.itemId) {
            className += 'component-item-active';
        }
        return className;
    }
    handleRemove(){
        this.setState({
            visible: true
        });
    }
    handleOk(){
        const { removeModule, setActiveModule } = mapAction();
        removeModule(this.props.itemId);
        setActiveModule({type: 'header', top: 0, index: -1})
        this.setState({
            visible: false
        });
    }
    handleCancel(){
        this.setState({
            visible: false
        });
    }
    insertBefore(e:any){
        e.stopPropagation();
        const top: number = this.ele?.offsetTop || 0;
        const { setStore } = this.props.store;
        const {setActiveModule} = mapAction();
        setStore({ insertIndex: this.props.index });
        setActiveModule({ type: 'InsertModule', top });
    }
    insertAfter(e:any){
        e.stopPropagation();
        const top: number = this.ele?.offsetTop || 0;
        const height:number = this.ele?.offsetHeight || 0;
        const { setStore } = this.props.store;
        const {setActiveModule} = mapAction();
        setStore({ insertIndex: this.props.index + 1 });
        setActiveModule({ type: 'InsertModule', top: top + height});
    }


    render() {
        return <div ref={ele => this.ele = ele} className="component-item" onMouseDown={(e) => this.handleClick(e)}>
            <div className={this.getClassName()}>
                <Icon type="CloseCircleOutlined" className="component-item-remove" onClick={() => this.handleRemove()}/>
                <Icon
                    type="PlusCircleOutlined"
                    className="component-item-insert-before"
                    onMouseDown={e => this.insertBefore(e)}
                />
                <Icon
                    type="PlusCircleOutlined"
                    className="component-item-insert-after"
                    onMouseDown={e => this.insertAfter(e)}
                />
                <Modal
                    title="移除组件"
                    visible={this.state.visible}
                    onOk={() => this.handleOk()}
                    okText="确认"
                    cancelText="取消"
                    onCancel={() => this.handleCancel()}
                >
                    <p>确认是否需要删除该组件</p>
                </Modal>
            </div>
            {this.props.children}
        </div>
    }
}

export default Consumer(Item);
