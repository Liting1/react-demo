import { ComponentConfig } from '../commonType';


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
    icon: 'FontSizeOutlined',
    scene: 3,
    userConfig
}

function getTitleConfig (them:string = 'light') {
    if(them === 'dark') {
        Object.assign(titleConfig, {
            color: '#ffffff'
        });
    }
    return titleConfig
}

export default getTitleConfig;
