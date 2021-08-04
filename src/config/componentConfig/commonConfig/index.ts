
// 组件通用配置
export interface ComponentConfig<T> {
    type: string,   // 组件类型
    name: string,   // 组件名称
    icon: string,   // icon 图标
    scene: number,  // 可使用环境
    limit?: number, // 可使用次数
    userConfig: T   // 组件配置
}

export interface Hot {

}
