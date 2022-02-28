import React from "react";
import {ViewType} from "@/components/MVC";
import Model from "../Model";
import Icon from "@/components/Icon";
import "../css/index.sass";


const SideItemView:ViewType<Model> = ({model}) => {
    const { className, onClick, icon, name } = model;
    return (<li className="side-bar-item">
        <div className={className} onClick={onClick}>
            <Icon type={icon} className="side-bar-item-icon" />
            <p className="side-bar-item-name">{name}</p>
        </div>
    </li>);
}


export default SideItemView;
