import React from "react";
import { mapAction } from '../../../store'

interface Props {
    itemId: string,
    text: string
}

interface State {
}

class TitleSetting extends React.Component<Props, State> {
    handleChange(val:string){
        const { setModule } = mapAction()
        setModule(this.props.itemId, {
            text: val
        })
    }
    render() {
        const { text } = this.props;
        return <div>
            <h2>Title setting</h2>
            <input type="text" value={text} onChange={e => this.handleChange(e.target.value)}/>
        </div>;
    }
}

export default TitleSetting
