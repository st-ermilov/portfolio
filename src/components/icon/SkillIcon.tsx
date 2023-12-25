import React from 'react';

import SkillSprite from '../../styles/assets/sprite_skills.svg'
import {SkillIconStyled} from "./SkillIcon.styled";

type SkillIconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

function SkillIcon(props: SkillIconPropsType) {
    return (
        <SkillIconStyled>
            <svg x="0px" y="0px" width={props.width || "120"} height={props.height || "120"}
                 viewBox={props.viewBox || "0,0,256,256"}>
                <use xlinkHref={`${SkillSprite}#${props.iconId}`}/>
            </svg>
        </SkillIconStyled>
    );
}


export default SkillIcon;