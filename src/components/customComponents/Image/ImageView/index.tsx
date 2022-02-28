import React from "react";
import Slider from "./Slider";
import {ViewType} from "@/components/MVC";
import Model from '../Model'


const ImageView:ViewType<Model> = ({model}) => {
    const { style, pagination } = model;
    const Com:Function = Slider[style as keyof typeof Slider];
    return (
        <div className='component-image'>
            {!!Com && <Com pagination={pagination} />}
        </div>
    )
}

export default ImageView;

