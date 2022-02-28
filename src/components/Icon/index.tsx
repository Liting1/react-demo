import React from "react";
import {
    PictureOutlined,
    LoadingOutlined,
    FontSizeOutlined,
    BorderOutlined,
    CloseCircleOutlined,
    PlusCircleOutlined,
    FormOutlined,
    BgColorsOutlined
} from '@ant-design/icons';

interface Props {
    type: string;
    style: object;
    className: string;
    onClick: (e:any) => void;
    onMouseDown: (e:any) => void
}

const Icon = (props:Props) => {
    const { type, style, className, onClick, onMouseDown } = props;
    const iconProps = {style, className, onClick, onMouseDown}
    switch (type) {
        case 'PictureOutlined':
            return <PictureOutlined {...iconProps} />
        case 'FontSizeOutlined':
            return <FontSizeOutlined {...iconProps} />
        case 'BorderOutlined':
            return <BorderOutlined {...iconProps} />
        case 'CloseCircleOutlined':
            return <CloseCircleOutlined {...iconProps} />
        case 'PlusCircleOutlined':
            return <PlusCircleOutlined {...iconProps} />
        case 'FormOutlined':
            return <FormOutlined {...iconProps} />
        case 'BgColorsOutlined':
            return <BgColorsOutlined {...iconProps} />
        default:
            return <LoadingOutlined {...iconProps} />
    }
}

Icon.defaultProps = {
    style: {
        fontSize: '20px'
    },
    className: '',
    onClick: () => {},
    onMouseDown: () => {}
}

export default Icon;
