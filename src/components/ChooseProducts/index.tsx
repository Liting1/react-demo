import React from "react";
import {Button} from 'antd';
import './style/index.sass';
interface State {
}

interface Props {
}

class ChooseProducts extends React.PureComponent<State, Props>{
    render() {
        return <div className="choose-products">
            <div className="choose-products-upload">
                <div className="choose-products-top">
                    <Button block>选择图片</Button>
                </div>
                <div className="choose-products-bottom">
                    <Button block>上传图片</Button>
                </div>
            </div>
            <div className="choose-products-select">

            </div>
        </div>
    }
}

export default ChooseProducts;
