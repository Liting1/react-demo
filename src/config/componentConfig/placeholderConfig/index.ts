import { ComponentConfig } from '../commonType';

interface PlaceholderUserConfig {
    height: number
}

const placeholderConfig:ComponentConfig<PlaceholderUserConfig> = {
    type: 'Placeholder',
    name: '空白占位',
    icon: 'BorderOutlined',
    scene: 3,
    userConfig: {
        height: 15
    }
}

function getPlaceholderConfig(theme:string = 'light') {
    return placeholderConfig
}

export default getPlaceholderConfig;
