import React from 'react';
import {SkillsContainer, TechStackContainer} from "./TechStack.styled";
import {Title} from "../../components/title/Title.styled";
import SkillIcon from "../../components/icon/SkillIcon";
import {useMediaQuery} from "react-responsive";
import {Fade} from "react-awesome-reveal";
import {useLanguage} from '../../App';
import {BackgroundAnimated} from "../../../src/components/BackgroundAnimated";

const skills = ['HTML_skill', 'CSS_skill', 'JS_skill', 'TS_skill', 'React_skill',
    'Redux_skill', 'Bootstrap_skill', 'Tailwind_skill', 'SASS_skill', 'Git_skill',
    'VScode_skill', 'Github_skill',]

function TechStack() {
    const isMobile = useMediaQuery({query: '(max-width: 690px)'})
    const {language} = useLanguage()

    return (
        <TechStackContainer id={'tech_stack'}>
            <BackgroundAnimated/>
            {language === 'en'
            ? <Title>My Tech Stack</Title>
            : <Title>Мой технологический стек</Title>}
            {language === 'en'
                ? <p>Technologies I’ve been working with recently</p>
                : <p>Технологии, с которыми я работал в последнее время</p>}
            <SkillsContainer>
                <Fade cascade={true} damping={0.1}>
                    {isMobile
                        ? skills.map((skill, index) => (
                            <SkillIcon width={'80px'} height={'80px'} key={index} iconId={skill}/>))
                        : skills.map((skill, index) => (
                            <SkillIcon key={index} iconId={skill}/>))
                    }
                </Fade>
            </SkillsContainer>
        </TechStackContainer>
    );
}

export default TechStack;