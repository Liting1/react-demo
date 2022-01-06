import React from "react";
import {Consumer, mapAction} from "../../store";
import CustomComponents from '../customComponents';
import initData from '../../main/ComponentDataInit';
import {Uppercase} from '../../utils/common';
import {u} from '../../utils';
import Drag from "../Drag";
import './preview.sass'

interface Props {
    store: any
}

interface State {
}

type ComType = keyof typeof CustomComponents;

class Preview extends React.PureComponent<Props, State> {

    previewEle:HTMLDivElement | null = null;

    /**
     * 渲染组件预览元素
     */
    renderComponentList(){
        const { modules, theme } = this.props.store;
        // 数据初始化处理
        const data = initData.init(theme, modules);
        if(!data.length) return null;
        return data.map((component:any, idx: number) => {
            const type = Uppercase(component.type) as ComType;
            const Com:any = CustomComponents[type];
            return Com ? <Drag.Item
                itemId={component.itemId}
                type={component.type}
                index={idx}
                key={component.itemId}>
                <Com env="eb" theme={theme} {...component}/>
            </Drag.Item> : null;
        });
    }

    /**
     * 点击顶部header 切换到页面配置
     */
    handleClick(e:any){
        const {setActiveModule} = mapAction();
        setActiveModule({
            index: -1,
            itemId: '',
            type: 'Header',
            top: 0
        });
    }

    componentDidMount() {
        const { setStore } = this.props.store;
        setStore({previewEle: this.previewEle});
    }

    render() {
        return <div className="preview">
            <div className="preview-content" ref={el => this.previewEle = el}>
                <header onClick={(e) => this.handleClick(e)} className="preview-header">
                    <img src={u('header.png')} alt="图片"/>
                </header>
                <Drag>
                    { this.renderComponentList() }
                </Drag>
            </div>
        </div>;
    }
}

export default Consumer(Preview);
