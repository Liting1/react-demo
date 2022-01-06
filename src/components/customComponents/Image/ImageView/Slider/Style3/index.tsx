import { Empty } from "antd";
import Swiper from "react-id-swiper";
import React, {useEffect, useState} from "react";
import 'swiper/css/swiper.min.css';
import './index.sass';


interface Props {
    pagination: boolean
}

function Style3(props:Props):JSX.Element{
    let ref:any = React.createRef();
    const [params, setParams] = useState({
        autoplay: true,
        loop: true,
        rebuildOnUpdate: true,
        slidesPerView : 1.4,
        spaceBetween: '6%',
        slidesOffsetBefore: 0
    });


    // 控制是否分页
    useEffect(() => {
        let pagination = {}
        if(props.pagination) {
            pagination = {
                el: '.swiper-pagination',
                type: 'fraction'
            };
        }
        setParams({...params, ...{ pagination }})
    }, [props.pagination])

    // 控制展示样式
    useEffect(()=>{
        const width = ref.offsetWidth;
        setParams({...params, slidesOffsetBefore: width/7})

    }, []);

    return (
        <div className="image-slider-3" ref={el => ref = el}>
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

export default Style3;
