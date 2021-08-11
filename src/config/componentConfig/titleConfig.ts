import { ComponentConfig } from './commonType';


interface TitleUserConfig {
    position: string,
    color: string,
    content: string,
    fontSize: number,
}

const userConfig:TitleUserConfig = {
    position: 'center',
    color: '#000000',
    content: '',
    fontSize: 18
}

const titleConfig:ComponentConfig<TitleUserConfig> = {
    type: 'Title',
    name: '标题',
    icon: 'design_icon_title_normal',
    scene: 3,
    userConfig
}

function getTitleConfig (them:string = 'default'){
    return titleConfig
}

export default getTitleConfig;
