import { ComponentConfig } from '../commonType';

interface BackgroundUserConfigType {
    color: string
}




const backgroundConfig:ComponentConfig<BackgroundUserConfigType> = {
    type: 'Background',
    name: '背景',
    icon: 'BgColorsOutlined',
    scene: 3,
    userConfig: {
        color: 'red'
    }
}


function getBackgroundConfig(theme:string = 'light'){
    return backgroundConfig;
}

export default getBackgroundConfig;
