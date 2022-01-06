

class Transform {
    private theme: any;
    private modules: any;
    constructor(theme: string, modules: any) {
        this.theme = theme;
        this.modules = modules;
    }
    public Title(options:any){
        if(options.content === '') {
            options.content = '点击编辑【标题】';
        }
        return options;
    }
}

export default Transform;
