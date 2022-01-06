import React from "react";
import Slider from "./Slider";


interface Props {
    style: keyof typeof Slider,
    pagination: boolean
}

function ImageView({ style, pagination }:Props):JSX.Element {
    const Com:Function = Slider[style];
    return (
        <div className='image'>
            {!!Com && <Com pagination={pagination} />}
        </div>
    )
}

ImageView.defaultProps = {
    style: 'Slider1',
    pagination: true
}

export default ImageView;
