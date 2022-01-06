import React from "react";
import ImageModule from "./ImageModule";
import ImageControl from "./ImageControl";
import ImageView from "./ImageView";
import { Consumer } from "../../../store";

interface Props {
    store: any
}

const imageModule = new ImageModule();
const imageControl = new ImageControl();

function ImageSetting(props:Props){
    
    const {
        showPrice,
        showDetail,
        showPage,
        styleList,
        itemId,
        pagination,
        style,
    } = imageModule.init(props);
    const control = imageControl.init(props);
    return <ImageView
        styleList={styleList}
        showPrice={showPrice}
        showDetail={showDetail}
        showPage={showPage}
        itemId={itemId}
        pagination={pagination}
        style={style}
        showDetailHandle={(bool) => control.showDetailHandle(bool)}
    />
}

export default Consumer(ImageSetting);
