import React from "react";
import {u} from "../../../../utils";

interface ListProps {
    pic: string
    desc: string
    onClick: Function
    active: boolean
}

function ListItem(props:ListProps){
    return <li className={getClassName(props.active)} onClick={() => props.onClick()}>
        <div className="image-setting-img"><img src={u(props.pic)} alt=""/></div>
        <p>{props.desc}</p>
    </li>
}

function getClassName(active:boolean):string {
    let className = 'image-setting-item';
    if(active) className += ' active-border';
    return className;
}

ListItem.defaultProps = {
    onClick: () => {}
}

export default ListItem;
