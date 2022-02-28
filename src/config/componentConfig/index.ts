import getImageConfig from "./imageConfig";
import getTitleConfig from "./titleConfig";
import getPlaceholderConfig from "./placeholderConfig";
import getTextConfig from "./textConfig";
import getBackgroundConfig from "./backgroundConfig";

/**
 * 按分类返回组件配置数据
 * @param theme 主题
 */
const componentConfig = ({theme='light'}):Array<any> => {
    return [{
        type: 'basisComponent',
        name: '基础组件',
        show: true,
        components: [
            getImageConfig(theme),
            getTitleConfig(theme),
            getPlaceholderConfig(theme),
            getTextConfig(theme),
            getBackgroundConfig(theme)
        ]
    }, /*{
        type: 'businessComponent',
        name: '业务组件',
        components: [{
            type: 'Grouping',
            name: '分组'
        }]
    }, {
        type: 'marketingComponent',
        name: '营销组件',
        components: [{
            type: 'redEnvelope',
            name: '红包'
        }]
    }*/]
}

/**
 * 返回组件类型与组件数据的映射关系
 * @param options
 */
export const componentMap = (options:any): Map<any,any> => (
    componentConfig(options)
        .reduce(
            (a, b) => b.components.reduce(
                (c: any, d: any) => c.set(d.type, d), a),
            new Map()
        )
);


export default componentConfig;
