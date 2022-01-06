import React from "react";
import { Consumer, mapAction } from '../../store';
import './sideActionBar.sass';
import componentConfig from "../../config/componentConfig";
import {CaretDownOutlined} from '@ant-design/icons';
import SideItem from "./SideItem";
import { v4 as uuidV4 } from 'uuid';

interface Props {
    store: any
    insert: boolean
}

interface State {
    componentConfig: any,
    activeIdx: number,
    rotate: number
}

class SideActionBar extends React.PureComponent<Props, State> {

    static defaultProps = {
        insert: false
    }

    constructor(props: Props | Readonly<Props>) {
        super(props);
        const { theme } = this.props.store
        this.state = {
            componentConfig: componentConfig(theme),
            activeIdx: -1,
            rotate: 0
        }
    }

    /**
     * 点击添加新的组件
     * @param item 当前点击项
     * @param activeIdx 点击高亮元素
     */
    handleClick(item: any, activeIdx: number):void{
        // 点击高亮
        this.setState({ activeIdx });
        const { addModule, setActiveModule, insertModule} = mapAction();
        const { modules, previewEle, insertIndex } = this.props.store;
        const { userConfig, type } = item;
        const itemId = uuidV4();
        const index = (modules.length + 1);
        // 设置选中元素
        setActiveModule({index, itemId, type, top: previewEle.offsetHeight || 0});
        // 添加组件数据
        if(this.props.insert) {
            insertModule(insertIndex, {...userConfig, itemId, type});
        } else {
            addModule({...userConfig, itemId, type});
        }
    }

    handleHidden({ currentTarget }: any){
        let rotate = 0;
        if(currentTarget.className.indexOf('side-hidden') < 0) {
            currentTarget.classList.add('side-hidden');
            rotate = -90;
        } else {
            currentTarget.classList.remove('side-hidden');
            rotate = 0;
        }
        this.setState({rotate});
    }

    render() {
        const { activeIdx, rotate } = this.state;
        return <div className="side-action-bar">
            {
                this.state.componentConfig.map((item:any, index: number) => <div key={index}>
                    <h5 className="side-action-title" onClick={(e) => this.handleHidden(e)}>
                        <CaretDownOutlined rotate={rotate} />
                        <span>{item.name}</span>
                    </h5>
                    <ul>
                        {
                            item.components.map((com:any, idx:number) => {
                                return <SideItem
                                    onClick={this.handleClick.bind(this, com, idx)}
                                    key={idx}
                                    activity={activeIdx === idx}
                                    icon={com.icon}
                                    name={com.name}
                                />
                            })
                        }
                    </ul>
                </div>)
            }
        </div>
    }
}


export default Consumer(SideActionBar);
