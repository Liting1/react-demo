
class Module {
    private data: any;
    private modules: any;
    constructor(data: any) {
        this.data = data;
        this.modules = data.modules;
    }

    Title(module: any){
        return module;
    }

}
export  default Module;
