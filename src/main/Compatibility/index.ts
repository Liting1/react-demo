/**
 * 组件数据的兼容历史数据处理，
 * 例如：新增字段或者字段名字修改字段名删除
 */
import Module from "./Module";
import { setStore } from '../../store'
import {v4 as uuidV4 } from 'uuid'
class Compatibility {
    private readonly data: any;
    constructor(data: any) {
        this.data = data;
    }

    init(){
        const { modules } = this.data;
        const moduleCompatibility = new Module(this.data);
        const newModule = modules.map((module:any) => {
            this.addItemId(module);
            const type:keyof Module = module.type;
            const moduleHandle = moduleCompatibility[type];
            if(moduleHandle){
                const option = moduleHandle(module);
                if(option) return option;
            }
            return module;
        });
        setStore({ modules: newModule });
    }

    addItemId(module: any){
        if(!module.itemId) {
            Object.assign(module, {itemId: uuidV4()})
        }
    }

}

export default Compatibility;
