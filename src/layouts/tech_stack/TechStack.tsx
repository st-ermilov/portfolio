import React from 'react';
import {SkillsContainer, TechStackContainer} from "./TechStack.styled";
import {Title} from "../../components/title/Title.styled";
import SkillIcon from "../../components/icon/SkillIcon";
import {useMediaQuery} from "react-responsive";

const skills = ['HTML_skill', 'CSS_skill', 'JS_skill', 'React_skill',
    'Redux_skill', 'Bootstrap_skill', 'Tailwind_skill', 'SASS_skill', 'Git_skill',
    'Greensock_skill', 'VScode_skill', 'Github_skill',]

function TechStack() {
    const isMobile = useMediaQuery({query: '(max-width: 690px)'})

    return (
        <TechStackContainer id={'tech_stack'}>
            <Title>My Tech Stack</Title>
            <p> Technologies I’ve been working with recently</p>
            <SkillsContainer>
                {isMobile

                    ? skills.map((skill, index) => (
                        <SkillIcon width={'60px'} height={'60px'} key={index} iconId={skill}/>))

                    : skills.map((skill, index) => (
                        <SkillIcon key={index} iconId={skill}/>))
                }
            </SkillsContainer>
        </TechStackContainer>
    );
}

export default TechStack;