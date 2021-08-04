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
    modules: [{
        type: 'Title',
        content: [],
        itemId: '123456'
    }, {
        type: 'Placeholder',
        height: 40,
        itemId: '456789'
    }, {
        type: 'Image',
        content: [],
        itemId: "999999"
    }]
}

export default data;
