

class ImageControl {
    private props: any;
    private store: any;
    constructor(props:any, store?:any) {
        this.props = props;
        this.store = store;
    }
    // @emit()
    onClick(){
        console.log('点击了');

    }
}

export default ImageControl;
