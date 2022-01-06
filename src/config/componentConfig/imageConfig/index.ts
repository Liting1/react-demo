import { ComponentConfig } from '../commonType'
import {ImageUserConfig, Content} from './imageType'
import { CUSTOMIZE_LINK_WEBVIEW_CODE } from '../../../utils/const'

const content:Array<Content> = [{
    image: '',
    customType: CUSTOMIZE_LINK_WEBVIEW_CODE,
    mini: false,
    miniValue: 0,
    miniId: '',
    params: '',
    link: '',
    hots: [],
    type: '',
    id: '',
    prepayCardHotelId: '',
    prepayCardProductId: '',
    showType: '2',
    productType: ''
}]


const userConfig:ImageUserConfig = {
    style: 'slider1',      // 样式
    pagination: true,       // 是否显示页码
    content,                // 商品配置
    // slider: '',
    blank: '6',             // 图片间隙
    padding: false,         // 是否显示边距
    showDetail: false,       // 显示标题和价格
    multipleItem: 1,        // 可展示图片数量
    largePicture: false,        // 是否开启首屏大图
}

const imageConfig:ComponentConfig<ImageUserConfig> = {
    type: 'Image',
    name: '图片',
    icon: 'PictureOutlined',
    scene: 3, // 支持的环境
    userConfig
}

function getImageConfig(theme:string = 'light') {
    return imageConfig
}

export default getImageConfig;

