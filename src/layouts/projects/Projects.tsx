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
import {useLanguage} from "../../App";


const myProjects = [
    {
        image: img1,
        titleEN: 'TODO-list',
        titleRU: 'Список задач',
        textEN: 'A list of tasks, with the possibility of user authorization, and as a consequence with individual data. Data are stored on the server, interaction with them is performed via custom API.',
        textRU: 'Список заданий, с возможностью авторизации пользователя, и как следствие с индивидуальными данными. Данные хранятся на сервере, взаимодействие с ними осуществляется через пользовательский API.',
        techStack: 'React, TypeScript, Redux Toolkit, HTML5, CSS3, MaterialUI',
        preview: 'https://st-ermilov.github.io/todo_finally/#/login',
        viewCode: 'https://github.com/st-ermilov/todo_finally'
    },
    {
        image: img2,
        titleEN: '3-in-1 app',
        titleRU: 'Приложение 3-в-1',
        textEN: 'A more mobile-focused app that combines a todo list, currency converter and weather application',
        textRU: 'Приложение, ориентированное на мобильные устройства и сочетающее в себе список дел, конвертер валют и погодное приложение.',
        techStack: 'React, TypeScript, Redux Toolkit, HTML5, SCSS',
        preview: 'https://3-in-1-react.vercel.app/#/weather',
        viewCode: 'https://github.com/st-ermilov/3-in-1-react'
    },
    {
        image: img3,
        titleEN: 'Pizzeria Website',
        titleRU: 'Сайт доставки пиццы',
        textEN: 'Pizza ordering site with basic necessary functionality (filtering, search, selection of pizza parameters, shopping cart).',
        textRU: 'Сайт доставки пиццы с базовым функционалом (фильтрация, поиск, выбор параметров пиццы, корзина).',
        techStack: 'React, TypeScript, Redux Toolkit, HTML5, SCSS',
        preview: 'https://pizza-react-daoz2a931-stermilovs-projects.vercel.app/?page=1&limit=4&sortBy=rating&order=asc',
        viewCode: 'https://github.com/st-ermilov/pizza-react'
    },
    {
        image: img4,
        titleEN: 'PrimeLabs - layouts',
        titleRU: 'PrimeLabs - вёрстка',
        textEN: 'Sports supplements website layout.',
        textRU: 'Макет сайта спортивных добавов.',
        techStack: 'HTML5, CSS3 , JavaScript, JavaScript-libraries',
        preview: 'https://st-ermilov.github.io/prime_labs_layout/',
        viewCode: 'https://github.com/st-ermilov/prime_labs_layout'
    },
    {
        image: img5,
        titleEN: 'Hackathon Maze',
        titleRU: 'Лабиринт с хакатона',
        textEN: 'A maze game made as part of a charity hackathon. There are levels of difficulty, a possibility to include a hint.',
        textRU: 'Игра-лабиринт, созданная в рамках благотворительного хакатона. Есть уровни сложности, возможность включить подсказку.',
        techStack: 'React, TypeScript, Redux Toolkit, HTML5, CSS3',
        preview: 'https://hackathon-team-10.vercel.app',
        viewCode: 'https://github.com/lgklsv/hackathon-team-10'
    },
    {
        image: img6,
        titleEN: 'My portfolio',
        titleRU: 'Моё портфолио',
        textEN: 'A portfolio site with examples of my work - both on source code and live samples',
        textRU: 'Сайт-портфолио с примерами моих работ - представлены как образцы, так и исходный код',
        techStack: 'React, JavaScript, Styled Components',
        preview: 'https://portfolio-st-ermilov.vercel.app/',
        viewCode: 'https://github.com/st-ermilov/portfolio'
    }
]

function Projects() {
    const {language} = useLanguage()
    return (
        <ProjectsContainer id={'projects'}>
            {language === 'en'
                ? <Title textAlign={'center'}>Projects</Title>
                : <Title textAlign={'center'}>Проекты</Title>}
            {language === 'en'
                ? <p>Things I’ve built so far</p>
                : <p>Созданное на данный момент</p>}
            <ProjectCardContainerStyled>
                <Fade cascade={true} damping={0.1}>
                    {
                        language === 'en'
                            ?
                            myProjects.map((project, index) => (
                                <ProjectCard key={index} image={project.image} title={project.titleEN} text={project.textEN}
                                             techStack={project.techStack} preview={project.preview}
                                             viewCode={project.viewCode}/>))

                            :
                            myProjects.map((project, index) => (
                                <ProjectCard key={index} image={project.image} title={project.titleRU} text={project.textRU}
                                             techStack={project.techStack} preview={project.preview}
                                             viewCode={project.viewCode}/>))
                    }
                </Fade>
            </ProjectCardContainerStyled>
        </ProjectsContainer>
    );
}

export default Projects;