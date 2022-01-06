
const actions = {
    /**
     * 修改主题
     * @param setStore
     * @param theme
     */
    setTheme(setStore: any, theme: string):void {
        setStore({theme})
    },
    /**
     * 修改当前选中的组件
     * @param setStore
     * @param data
     */
    setActiveModule(setStore: any, data: object): void{
        setStore((store: any) => ({
            activeModule: {
                ...store.activeModule,
                ...data
                }
            })
        )
    },

    /**
     * 修改组件内容
     * @param setStore
     * @param id
     * @param newModule
     */
    setModule(setStore: any, id:string, newModule: object){
        setStore((store: { modules: any[] })=>{
            const module = store.modules.find((item:any) => item.itemId === id);
            Object.assign(module, newModule);
            return {
                modules: store.modules
            }
        })
    },

    /**
     * 尾部追加组件
     * @param setStore
     * @param module
     */
    addModule(setStore:any, module:object){
        setStore((store: { modules: object[] }) =>{
            return {
                modules: [...store.modules, module]
            }
        });
    },

    /**
     * 删除组件
     * @param setStore
     * @param itemId
     */
    removeModule(setStore:any, itemId:string){
        setStore((store:any)=>{
            const modules = store.modules.filter((item:any) => item.itemId !== itemId)
            return {modules}
        })
    },

    /**
     * 插入组件
     */
    insertModule(setStore:any, idx:number, module:any){
        setStore((store: any)=>{
            const modules = [...store.modules];
            modules.splice(idx, 0, module);
            return { modules }
        })
    },

    /**
     * 组件拖拽修改顺序
     * @param setStore
     * @param newIndex
     * @param oldIndex
     */
    dragModule(setStore:any, newIndex:number, oldIndex:number){
        setStore((store:any) => {
            const modules = [...store.modules];
            const newModule = modules[newIndex];
            modules[newIndex] = modules[oldIndex];
            modules[oldIndex] = newModule;
            return { modules };
        })
    },

    /**
     * 修改某个组件的 content 属性
     * @param setStore
     * @param newContent
     */
    setModuleContent(setStore: any, newContent: object){

    }
}

export default actions;
