// import { CUSTOMIZE_LINK_WEBVIEW_CODE } from '../../utils/const';
import { ComponentConfig } from './commonConfig'

interface Content {
    image: string,
    customType: number,
    mini: boolean,
    miniValue: number,
    miniId: string,
    params: string,
    link: string,
    hots: Array<any>,
    type: string,
    id: string,
    prepayCardProductId: string,
    prepayCardHotelId: string,
    showType: string,
    productType: string
}

interface ImageUserConfig {
    style: string,
    showFooter: number,
    content: Array<Content | object>,
    slider: string,
    blank: string,
    padding: boolean,
    multipleItem: number,
    largePicture: number,
    showDetail: number
}


const userConfig:ImageUserConfig = {
    style: 'sliderBig',
    showFooter: 1,
    content: [],
    slider: '',
    blank: '6',
    padding: false,
    multipleItem: 1,
    largePicture: 0,
    showDetail: 1
}

const imageConfig:ComponentConfig<ImageUserConfig> = {
    type: 'Image',
    name: '图片',
    icon: 'design_icon_image_normal',
    scene: 3,
    userConfig
}

function getImageConfig(theme:string = 'default') {
    return imageConfig
}

export {
    getImageConfig
};

export type { Content };

