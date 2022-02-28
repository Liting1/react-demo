import {ComponentConfig} from '../commonType';

interface TextUserConfig {
    context: string
}

const userConfig = {
    context: '默认文字!'
}



const textConfig:ComponentConfig<TextUserConfig> = {
    type: 'Text',
    name: '文本',
    icon: 'FormOutlined',
    scene: 3,
    userConfig
}

function getTextConfig(theme:string = 'light'){
    return textConfig;
}


export default getTextConfig;
