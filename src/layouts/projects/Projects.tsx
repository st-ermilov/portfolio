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
        title: 'TODO-list',
        text: 'A list of tasks, with the possibility of user authorization, and as a consequence with individual data. Data are stored on the server, interaction with them is performed via custome API.',
        techStack: 'React, TypeScript, Redux Toolkit, HTML5, CSS3, MaterialUI',
        preview: 'https://st-ermilov.github.io/todo_finally/#/login',
        viewCode: 'https://github.com/st-ermilov/todo_finally'
    },
    {
        image: img2,
        title: '3-in-1 app',
        text: 'A more mobile-focused app that combines a todo list, currency converter and weather application',
        techStack: 'React, TypeScript, Redux Toolkit, HTML5, SCSS',
        preview: 'https://3-in-1-react.vercel.app/#/weather',
        viewCode: 'https://github.com/st-ermilov/3-in-1-react'
    },
    {
        image: img3,
        title: 'Pizzeria Website',
        text: 'Sports supplements website layout.',
        techStack: 'React, TypeScript, Redux Toolkit, HTML5, SCSS',
        preview: 'https://pizza-react-daoz2a931-stermilovs-projects.vercel.app/?page=1&limit=4&sortBy=rating&order=asc',
        viewCode: 'https://github.com/st-ermilov/pizza-react'
    },
    {
        image: img4,
        title: 'PrimeLabs - layouts',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        techStack: 'HTML5, CSS3 , JavaScript, JavaScript-libraries',
        preview: 'https://st-ermilov.github.io/prime_labs_layout/',
        viewCode: 'https://github.com/st-ermilov/prime_labs_layout'
    },
    {
        image: img5,
        title: 'Hackathon Maze',
        text: 'A maze game made as part of a charity hackathon. There are levels of difficulty, there is a possibility to include a hint.',
        techStack: 'React, TypeScript, Redux Toolkit, HTML5, CSS3',
        preview: 'https://hackathon-team-10.vercel.app',
        viewCode: 'https://github.com/lgklsv/hackathon-team-10'
    },
    {
        image: img6,
        title: 'My portfolio',
        text: 'A portfolio site with examples of my work - both on source code and live samples',
        techStack: 'React, JavaScript, Styled Components',
        preview: 'https://portfolio-st-ermilov.vercel.app/',
        viewCode: 'https://github.com/st-ermilov/portfolio'
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