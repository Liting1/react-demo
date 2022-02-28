import { Empty } from "antd";
import Swiper from "react-id-swiper";
import React from "react";
import 'swiper/css/swiper.min.css';
import './index.sass';


interface Props {
    pagination: boolean
}

function Style1(props:Props):JSX.Element{

    const params = {
        autoplay: true,
        loop: true,
        rebuildOnUpdate: true,
    }

    if(props.pagination) {
        Object.assign(params, {
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction'
            }
        })
    }

    return (
        <div className="image-slider-1">
            <Swiper {...params}>
                <div className="image-swiper-item">
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}>请添加商品</Empty>
                </div>
                <div className="image-swiper-item">Slide 2</div>
                <div className="image-swiper-item">Slide 3</div>
                <div className="image-swiper-item">Slide 4</div>
                <div className="image-swiper-item">Slide 5</div>
            </Swiper>
        </div>
    )
}

export default Style1;
