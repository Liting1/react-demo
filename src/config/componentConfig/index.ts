import { getImageConfig } from "./imageConfig";
import { getTitleConfig } from "./titleConfig";
import { getPlaceholderConfig } from "./placeholderConfig";


const componentConfig = (theme: string='default') => {
    return [{
        type: 'basisComponent',
        name: '基础组件',
        components: [{
            name: 'Image',
            config: getImageConfig(theme)
        },{
            name: 'Title',
            config: getTitleConfig(theme)
        }, {
            name: 'Placeholder',
            config: getPlaceholderConfig(theme)
        }]
    }, {
        type: 'businessComponent',
        name: '业务组件',
        components: []
    }, {
        type: 'marketingComponent',
        name: '营销组件',
        components: []
    }]
}




export default componentConfig;
