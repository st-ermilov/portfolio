import React from 'react';
import {
    LinkStyled,
    ProjectCardContainer,
    ProjectCardImageContainer,
    ProjectLinkContainer,
    TextContent
} from "./ProjectCard.styled";
import Icon from "../icon/Icon";

type ProjectCardPropsType = {
    image: string
    title: string
    text: string
    techStack: string
    preview: string
    viewCode: string
}

function ProjectCard(props: ProjectCardPropsType) {
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
                        <a href={props.preview} target={'_blank'}>Live Preview</a>
                    </LinkStyled>
                    <LinkStyled>
                        <Icon iconId={'link_github_icon'}/>
                        <a href={props.viewCode} target={'_blank'}>View Code</a>
                    </LinkStyled>
                </ProjectLinkContainer>
            </TextContent>
        </ProjectCardContainer>
    );
}

export default ProjectCard;