export interface Data {
    theme: string       // 主题配置
    activeModule: {     // 当前选中组件配置
        type: string        // 组件类型
        itemId: string      // 组件id
        index: number       // 组件索引
        top: number         // 距离顶部的距离
    },
    modules: Array<any>         // 所有组件数据
    previewEle: Element | null  // preview 元素,用于获取页面高度
    insertIndex: number;    // 插入组件的索引
}

const data:Data = {
    theme: 'light',
    activeModule: {
        type: 'Header',
        itemId: '123456',
        index: 0,
        top: 0,
    },
    modules: [],
    previewEle: null,
    insertIndex: 0,
}

export default data;
