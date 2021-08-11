import React from 'react';
import { Consumer } from './store'
import SideActionBar from "./components/SideActionBar";
import Preview from "./components/Preview";
import Setting from "./components/Setting";
import Main from "./main";
import './App.sass';
import { getCustomizeSnapshot } from './api/customPageApi';
import { getQuery } from './utils'

interface Props {
    store: any
}
interface State {

}

class App extends React.PureComponent<Props, State> {

    componentDidMount() {
        const query = getQuery();

        if(query.type === 'custom') {
            if(query.id) { // 自定义页面

            } else if(query.template_id) { // 使用模板创建新的页面

            } else { // 直接创建新的页面

            }
        }

        const options: any = {};
        getCustomizeSnapshot(15558).then(res => {
            const mainHandle = new Main(res);
            mainHandle.init(options);
        });
    }

    customize(){

    }

    render() {
        // 暂时测试写法
        return (
            <div className="app">
                <SideActionBar />
                <Preview />
                <Setting />
            </div>
        );
    }
}

export default Consumer(App);
