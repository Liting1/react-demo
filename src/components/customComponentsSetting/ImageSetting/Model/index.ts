import {Model} from "@/components/MVC"
import type {ImageUserConfig as Props} from '@/config/componentConfig/imageConfig/imageType';

interface State {
    styleList:Array<{
        pic:string;
        desc:string;
        style:string
    }>
}

class ImageSettingModel extends Model<Props, State> {
    state = {
        styleList: [{
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
        }, {
            pic: 'img_com_setting_05.png',
            desc: '每行1列',
            style: 'slider5'
        }]
    }

    get styleList(): any[] {
        return this.state.styleList
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
    get showPrice() {
        const {style} = this.props;
        return style === 'slider2' || style === 'slider3';
    }

    get showDetail() {
        return this.props.showDetail;
    }

    get itemId(){
        return this.props.itemId;
    }

    get pagination(){
        return this.props.pagination;
    }

    get style(){
        return this.props.style;
    }
}

export type {
    Props,
    State
}

export default ImageSettingModel;


