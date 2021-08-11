interface Data {
    theme: string,
    activeModule: {
        type: string,
        itemId: string,
        name: string,
        index: number
    },
    modules: Array<any>
}

const data:Data = {
    theme: 'red',
    activeModule: {
        type: 'Title',
        itemId: '123456',
        name: '标题组件',
        index: 0
    },
    modules: []
}


export default data;
