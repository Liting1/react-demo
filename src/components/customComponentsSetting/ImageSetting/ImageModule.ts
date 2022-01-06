/**
 * image 组件的数据模型
 */

class ImageModule {
    private props: any;

    setProps(props: any){
        this.props = props;
    }

    init(props:any) {
        this.setProps(props);
        return this;
    }

    get styleList(): any[] {
        return [{
            pic: 'img_com_setting_01.png',
            desc: '轮播图（大）',
            style: 'slider1',
        }, {
            pic: 'img_com_setting_02.png',
            desc: '轮播图（小）',
            style: 'slider2',
        }, {
            pic: 'img_com_setting_03.png',
            desc: '卡片-横向滑动1',
            style: 'slider3',
        }, {
            pic: 'img_com_setting_04.png',
            desc: '卡片-横向滑动2',
            style: 'slider4',
        }];
    }

    // 是否展示页码开关
    get showPage():boolean {
        const { style } = this.props;
        return (
            style === 'slider1' ||
            style === 'slider2' ||
            style === 'slider3' ||
            style === 'slider4' ||
            style === 'slider5'
        );
    }

    // 是否显示展示价格开关
    get showPrice():boolean {
        const {style} = this.props;
        return style === 'slider2' || style === 'slider3';
    }



    get showDetail(): boolean {
        const { showDetail } = this.props;
        return showDetail;
    }

    get itemId(){
        return this.props.itemId;
    }

    get pagination():boolean{
        return this.props.pagination;
    }

    get style(){
        return this.props.style;
    }

    get test(): Promise<any>{
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(1);
            },100)
        });
    }

}

export default ImageModule;
