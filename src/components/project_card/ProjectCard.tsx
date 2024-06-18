import React from 'react';
import {
    LinkStyled,
    ProjectCardContainer,
    ProjectCardImageContainer,
    ProjectLinkContainer,
    TextContent
} from "./ProjectCard.styled";
import Icon from "../icon/Icon";
import {useLanguage} from "../../App";

type ProjectCardPropsType = {
    image: string
    title: string
    text: string
    techStack: string
    preview: string
    viewCode: string
}

function ProjectCard(props: ProjectCardPropsType) {
    const {language} = useLanguage()
    return (
        <ProjectCardContainer>
            <ProjectCardImageContainer>
                <img src={props.image} alt="project photo"/>
            </ProjectCardImageContainer>
            <TextContent>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <span>Tech Stack: </span><i>{props.techStack}</i>
                <ProjectLinkContainer>
                    <LinkStyled>
                        <Icon iconId={'link_icon'}/>
                        {language === 'en'
                                ? <a href={props.preview} target={'_blank'}>Live Preview</a>
                                : <a href={props.preview} target={'_blank'}>Пример</a>}
                    </LinkStyled>
                    <LinkStyled>
                        <Icon iconId={'link_github_icon'}/>
                        {language === 'en'
                            ?  <a href={props.viewCode} target={'_blank'}>View Code</a>
                            :  <a href={props.viewCode} target={'_blank'}>Исходный код</a>}
                    </LinkStyled>
                </ProjectLinkContainer>
            </TextContent>
        </ProjectCardContainer>
    );
}

export default ProjectCard;