import React from "react";
import ImageView from "./ImageView";
// import ImageControl from "./ImageControl";
import ImageModule from "./ImageModule";

interface Props {
}

interface State {

}
const imageModule = new ImageModule();



class Image extends React.Component<Props, State> {
    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
        return Object.keys(nextProps).some((item:string) => {
            // @ts-ignore
            const p = nextProps[item], q = this.props[item];
            if(typeof p === 'object') {
                return JSON.stringify(p) !== JSON.stringify(q);
            } else {
                return p !== q;
            }
        });
    }

    render() {
        const { style, pagination } = imageModule.init(this.props);
        return <ImageView
            style={style}
            pagination={pagination}
        />
    }
}

export default Image;
