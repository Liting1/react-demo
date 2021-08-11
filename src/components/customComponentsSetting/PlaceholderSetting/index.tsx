import React from "react";
import { Consumer, mapAction} from '../../../store';
interface State {
    height: number
}

interface Props {
    itemId: string,
    height: number,
    store: any,
}

class PlaceholderSetting extends React.PureComponent<Props, State> {
    static defaultProps: {};
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { setModule } = mapAction();
        const { itemId } = this.props;
        setModule(itemId, {
            height: Number(e.target.value)
        })
    }
    render() {
        const { height } = this.props
        return <div>
            <h3>placeholder setting</h3>
            <input onChange={(e) => this.handleChange(e)} type="range" value={height}/>
        </div>;
    }

}

PlaceholderSetting.defaultProps = {
    height: 30
}

export default Consumer(PlaceholderSetting);
