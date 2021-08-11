import getImageConfig from "./imageConfig";
import getTitleConfig from "./titleConfig";
import getPlaceholderConfig from "./placeholderConfig";

/**
 * 按分类返回组件配置数据
 * @param theme 主题
 */
const componentConfig = (theme: string='default'):Array<any> => {
    return [{
        type: 'basisComponent',
        name: '基础组件',
        components: [{
            type: 'Image',
            name: '图片',
            config: getImageConfig(theme)
        },{
            type: 'Title',
            name: '标题',
            config: getTitleConfig(theme)
        }, {
            type: 'Placeholder',
            name: '空白占位',
            config: getPlaceholderConfig(theme)
        }]
    }, {
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
    }]
}

/**
 * 返回组件类型与组件数据的映射关系
 * @param theme
 */
export const componentMap = (theme: string): Map<any,any> => (
    componentConfig(theme)
        .reduce(
            (a, b) => b.components.reduce(
                (c: any, d: any) => c.set(d.type, d), a),
            new Map()
        )
);


export default componentConfig;
