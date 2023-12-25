import React from 'react';

import iconSprite from '../../styles/assets/sprite_icons.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    onClick?: () => void
}

function Icon(props: IconPropsType) {
    return (
        <svg x="0px" y="0px" width={props.width || "30"} height={props.height || "30"}
             viewBox={props.viewBox || "0,0,256,256"}
             onClick={props.onClick}>
            <use xlinkHref={`${iconSprite}#${props.iconId}`}/>
        </svg>
    );
}

export default Icon;