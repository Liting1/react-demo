import { ComponentConfig } from './commonType';

interface PlaceholderUserConfig {
    height: number
}

const placeholderUserConfig:PlaceholderUserConfig = {
    height: 15
}

const placeholderConfig:ComponentConfig<PlaceholderUserConfig> = {
    type: 'Placeholder',
    name: '空白占位',
    icon: 'design_icon_whitespace_normal',
    scene: 3,
    userConfig: placeholderUserConfig
}

function getPlaceholderConfig(theme:string = 'default') {
    return placeholderConfig
}

export default getPlaceholderConfig;
