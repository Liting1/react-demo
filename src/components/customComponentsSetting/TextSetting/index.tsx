import React, {useState} from "react";
import SettingTitle from "../baseComponents/SettingTitle";
import ReactQuill, {Quill} from "react-quill";

import {mapAction} from '@/store';
import 'react-quill/dist/quill.snow.css';
import "quill-emoji/dist/quill-emoji.css";
import './index.sass';

interface Props {
    context: string;
    itemId: string;
    type: string;
}

const color = ['rgb(0, 0, 0)', 'rgb(230, 0, 0)', 'rgb(255, 153, 0)',
    'rgb(255, 255, 0)', 'rgb(0, 138, 0)', 'rgb(0, 102, 204)',
    'rgb(153, 51, 255)', 'rgb(255, 255, 255)', 'rgb(250, 204, 204)',
    'rgb(255, 235, 204)', 'rgb(255, 255, 204)', 'rgb(204, 232, 204)',
    'rgb(204, 224, 245)', 'rgb(235, 214, 255)', 'rgb(187, 187, 187)',
    'rgb(240, 102, 102)', 'rgb(255, 194, 102)', 'rgb(255, 255, 102)',
    'rgb(102, 185, 102)', 'rgb(102, 163, 224)', 'rgb(194, 133, 255)',
    'rgb(136, 136, 136)', 'rgb(161, 0, 0)', 'rgb(178, 107, 0)',
    'rgb(178, 178, 0)', 'rgb(0, 97, 0)', 'rgb(0, 71, 178)',
    'rgb(107,  36, 178)', 'rgb( 68,  68,  68)', 'rgb(92, 0, 0)',
    'rgb(102, 61, 0)', 'rgb(102, 102, 0)', 'rgb(0, 55, 0)',
    'rgb(0, 41, 102)', 'rgb(61, 20, 10)', 'transparent']


const TextSetting = (props: Props) => {
    console.log(props);
    const {setModule} = mapAction();
    const [modules] = useState({
        toolbar: [
            [{'header': [1, 2, 3, 4, 5, 6, false]}], // 标题 h1 - h6
            ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'], // 加粗, 倾斜, 下划线, 中划线, 引用, 插入代码
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}], // 有序列表, 无需列表, 缩进-1,, 缩进+1
            [{'script': 'sub'}, {'script': 'super'}], // 上标, 下标
            [{'color': color}, {'background': color}],
            ['link', 'image'], // 链接, 图片
            [{'align': []},'clean'] // 对齐方式
        ]
    });

    const changeHandle = (val: string) => {
        console.log(7777, val)
        setModule(props.itemId, {
            context: val
        })
    }

    return <div className="text-setting">
        <SettingTitle>文本组件</SettingTitle>
        <div className="text-setting-container">
            <ReactQuill
                value={props.context}
                modules={modules}
                onChange={changeHandle}
            />
        </div>
    </div>
}

TextSetting.defaultProps = {
    context: ''
}

export default TextSetting;
