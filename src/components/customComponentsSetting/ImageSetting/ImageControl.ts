import { mapAction } from '@/store'

/**
 * image 组件控制器
 */
class ImageControl {
    private props: any;

    setProps(props:any){
        this.props = props;
    }

    init(props:any) {
        this.setProps(props);
        return this;
    }

    showDetailHandle(val:boolean) {
        const { setModule } = mapAction();
        const {itemId} = this.props;
        setModule(itemId, {
            showDetail: Number(val)
        });
    }
}


export default ImageControl;
