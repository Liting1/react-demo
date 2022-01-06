
class ImageModule {
    private props: any;
    init(props:any){
        this.props = props;
        return this;
    }

    get style(){
        return this.props.style;
    }

    get pagination():boolean{
        return this.props.pagination;
    }
}

export default ImageModule;
