import React from 'react';
import { Consumer } from '@/store'
import SideActionBar from "@/components/SideActionBar";
import Preview from "@/components/Preview";
import Setting from "../../components/Setting";
// import Main from "./main";
import './index.sass';
import { getCustomizeSnapshot } from '../../api/customPageApi';
import { getQuery } from '../../utils'

interface Props {
    store: any
}
interface State {

}

class Edit extends React.PureComponent<Props, State> {

    componentDidMount() {
        const query = getQuery();
        if(query.type === 'custom') {
            if(query.id) { // 自定义页面
                this.customize(query.id);
            } else if(query.template_id) { // 使用模板创建新的页面
                this.getTemplate(query.template_id);
            } else { // 直接创建新的页面
                this.createCustomize()
            }
        } else { // template 创建一个新的模板

        }

        // const options: any = {};
        // getCustomizeSnapshot(15558).then(res => {
        //     const mainHandle = new Main(res);
        //     mainHandle.init(options);
        //     console.log('res:', res)    ;
        // });
    }

    private customize(id:number){

    }

    private getTemplate(template_id: any) {

    }

    private createCustomize() {

    }

    render() {
        // 暂时测试写法
        return (
            <div className="edit">
                <SideActionBar />
                <Preview />
                <Setting />
            </div>
        );
    }
}

export default Consumer(Edit);
