/**
 * 处理组件初始展示状态数据格式
 * 主要用于在添加组件时，组件初始数据和展示效果不一致的处理
 * 例如：分组组件，商品组件等在添加组件，未填写数据时的展示状态
 */

import {deepCopy} from "../../utils/common";
import Transform from "./Transform";

class ComponentInit {
    private theme: string | undefined;
    private modules: any;

    init(theme:string, modules: any){
        this.theme = theme;
        this.modules = deepCopy(modules);
        const transform = new Transform(theme, modules);
        this.modules.map((module: any) => {
            const type: keyof Transform = module.type;
            if(transform[type]) return transform[type](module);
            return module;
        });
        return this.modules;
    }
}

export default new ComponentInit();
