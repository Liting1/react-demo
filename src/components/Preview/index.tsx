import React from "react";
import { Consumer } from "../../store";
import CustomComponents from '../customComponents';
import Drag from "../Drag";
import './preview.css'
interface Props {
    store?: any
}

interface State {
}

class Preview extends React.PureComponent<Props, State> {

    componentDidMount() {
        console.log('test', this.props)
    }

    renderComponentList(){
        const { modules } = this.props.store;

        return modules.map((component:any, idx: number) => {
            // @ts-ignore
            const Com = CustomComponents[component.type];
            return <Drag.Item
                itemId={component.itemId}
                key={idx}><Com config={component}/></Drag.Item>
        })
    }

    render() {
        return <div className="preview">
            <h2>Preview Component</h2>
           <div>
               <Drag>
                   { this.renderComponentList() }
               </Drag>
           </div>
        </div>;
    }
}

export default Consumer(Preview);