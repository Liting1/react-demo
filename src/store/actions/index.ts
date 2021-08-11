
export default {
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

    setModule(setStore: any, id:string, newModule: object){
        setStore((store: { modules: any[] })=>{
            const module = store.modules.find((item:any) => item.itemId === id);
            Object.assign(module, newModule)
            return {
                modules: store.modules
            }
        })


    },

    setModuleContent(setStore: any, newContent: object){

    }
}
