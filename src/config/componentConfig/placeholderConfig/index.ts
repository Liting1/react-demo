import { ComponentConfig } from '../commonType';

interface PlaceholderUserConfig {
    height: number
}

const placeholderUserConfig:PlaceholderUserConfig = {
    height: 15
}

const placeholderConfig:ComponentConfig<PlaceholderUserConfig> = {
    type: 'Placeholder',
    name: '空白占位',
    icon: 'BorderOutlined',
    scene: 3,
    userConfig: placeholderUserConfig
}

function getPlaceholderConfig(theme:string = 'light') {
    return placeholderConfig
}

export default getPlaceholderConfig;
