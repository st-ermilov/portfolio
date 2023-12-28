import React from 'react';
import {ProjectCardContainerStyled, ProjectsContainer} from "./Projects.styled";
import {Title} from "../../components/title/Title.styled";

import img1 from '../../styles/assets/Project_1.png'
import img2 from '../../styles/assets/Project_2.png'
import img3 from '../../styles/assets/Project_3.png'
import img4 from '../../styles/assets/Project_4.png'
import img5 from '../../styles/assets/Project_5.png'
import img6 from '../../styles/assets/Project_6.png'
import ProjectCard from "../../components/project_card/ProjectCard";
import {Fade} from "react-awesome-reveal";


const myProjects = [
    {
        image: img1,
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        techStack: 'HTML , JavaScript, SASS, React',
        preview: 'https://www.w3schools.com/howto/howto_css_sticky_element.asp',
        viewCode: 'https://www.w3schools.com/howto/howto_css_sticky_element.asp'
    },
    {
        image: img2,
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        techStack: 'HTML , JavaScript, SASS, React',
        preview: 'https://www.w3schools.com/howto/howto_css_sticky_element.asp',
        viewCode: 'https://www.w3schools.com/howto/howto_css_sticky_element.asp'
    },
    {
        image: img3,
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        techStack: 'HTML , JavaScript, SASS, React',
        preview: 'https://www.w3schools.com/howto/howto_css_sticky_element.asp',
        viewCode: 'https://www.w3schools.com/howto/howto_css_sticky_element.asp'
    },
    {
        image: img4,
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        techStack: 'HTML , JavaScript, SASS, React',
        preview: 'https://www.w3schools.com/howto/howto_css_sticky_element.asp',
        viewCode: 'https://www.w3schools.com/howto/howto_css_sticky_element.asp'
    },
    {
        image: img5,
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        techStack: 'HTML , JavaScript, SASS, React',
        preview: 'https://www.w3schools.com/howto/howto_css_sticky_element.asp',
        viewCode: 'https://www.w3schools.com/howto/howto_css_sticky_element.asp'
    },
    {
        image: img6,
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        techStack: 'HTML , JavaScript, SASS, React',
        preview: 'https://www.w3schools.com/howto/howto_css_sticky_element.asp',
        viewCode: 'https://www.w3schools.com/howto/howto_css_sticky_element.asp'
    }
]

function Projects() {
    return (
        <ProjectsContainer id={'projects'}>
            <Title textAlign={'center'}>Projects</Title>
            <p>Things I’ve built so far</p>
            <ProjectCardContainerStyled>
                <Fade cascade={true} damping={0.1}>
                    {myProjects.map((project, index) => (
                        <ProjectCard key={index} image={project.image} title={project.title} text={project.text}
                                     techStack={project.techStack} preview={project.preview}
                                     viewCode={project.viewCode}/>))}</Fade>
            </ProjectCardContainerStyled>

        </ProjectsContainer>
    );
}

export default Projects;