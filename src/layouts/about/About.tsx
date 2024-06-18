import React from 'react';
import {
    AboutContainer,
    AboutSection,
    CommonContainer,
    DateInfo,
    Education,
    FirstPartWorkInfo,
    ImageStyled,
    Location,
    Place,
    SecondPartWorkInfo,
    WorkExperience,
    WorkPlace,
    WorkPlaceInfo,
    WorkPlaceTitle
} from "./About.styled";
import Icon from "../../components/icon/Icon";
import {Title} from '../../components/title/Title.styled'
import img from '../../styles/assets/drawing.svg'
import {Fade} from "react-awesome-reveal";
import {useLanguage} from "../../App";
import ru from '../../languages/ru.json'
import en from '../../languages/en.json'

function About() {
    const {language} = useLanguage()

    return (
        <Fade damping={0.1}>
            <CommonContainer>
                <AboutContainer id={'about'}>
                    <AboutSection>
                        {language === 'en'
                            ? <Title>About Me</Title>
                            : <Title>Обо мне</Title>}
                        {language === 'en'
                            ? en.about.map((el, index) => (<p key={index}>{el}</p>))
                            : ru.about.map((el, index) => (<p key={index}>{el}</p>))}
                    </AboutSection>
                    <WorkExperience>
                        {language === 'en'
                            ? <Title>Work Experience</Title>
                            : <Title>Опыт работы</Title>}
                        <WorkPlace>
                            <FirstPartWorkInfo>
                                {language === 'en'
                                    ? <WorkPlaceTitle>Web Development Intern</WorkPlaceTitle>
                                    : <WorkPlaceTitle>Веб-разработчик (стажёр)</WorkPlaceTitle>}
                                <WorkPlaceInfo>
                                    <Place>
                                        <Icon iconId={'office_icon'}/>
                                        <p>Open Source</p>
                                    </Place>
                                    <Location>
                                        <Icon iconId={'location_icon'}/>
                                        {language === 'en'
                                            ? <p>Rostov-on-Don</p>
                                            : <p>Ростов-на-Дону</p>}
                                    </Location>
                                </WorkPlaceInfo>
                            </FirstPartWorkInfo>
                            <SecondPartWorkInfo>
                                {language === 'en'
                                    ? <span>Internship</span>
                                    : <span>Стажировка</span>}
                                <DateInfo>
                                    <Icon iconId={'calendar_icon'}/>
                                    {language === 'en'
                                        ?   <p>Nov 2022 - Dec 2023</p>
                                        :   <p>Нояб 2022 - Дек 2023</p>}

                                </DateInfo>
                            </SecondPartWorkInfo>
                        </WorkPlace>
                    </WorkExperience>
                    <Education>
                        {language === 'en'
                            ?   <Title>Education</Title>
                            :   <Title>Образование</Title>}
                        <WorkPlace>
                            <FirstPartWorkInfo>
                                {language === 'en'
                                    ? <WorkPlaceTitle>Web Development Intern</WorkPlaceTitle>
                                    : <WorkPlaceTitle>Веб-разработчик (стажёр)</WorkPlaceTitle>}
                                <WorkPlaceInfo>
                                    <Place>
                                        <Icon iconId={'office_icon'}/>
                                        <p>IT-Incubator</p>
                                    </Place>
                                    <Location>
                                        <Icon iconId={'location_icon'}/>
                                        {language === 'en'
                                            ? <p>Rostov-on-Don</p>
                                            : <p>Ростов-на-Дону</p>}
                                    </Location>
                                </WorkPlaceInfo>
                            </FirstPartWorkInfo>
                            <SecondPartWorkInfo>
                                {language === 'en'
                                    ? <span>Internship</span>
                                    : <span>Стажировка</span>}
                                <DateInfo>
                                    <Icon iconId={'calendar_icon'}/>
                                    {language === 'en'
                                        ? <p>Dec 2023 - now</p>
                                        : <p>Дек 2023 - н.в.</p>}
                                </DateInfo>
                            </SecondPartWorkInfo>
                        </WorkPlace>
                        <WorkPlace>
                            <FirstPartWorkInfo>
                                {language === 'en'
                                    ? <WorkPlaceTitle>Ph.D. of Medical Sciences</WorkPlaceTitle>
                                    : <WorkPlaceTitle>К.м.н., доцент каф. урологии</WorkPlaceTitle>}
                                <WorkPlaceInfo>
                                    <Place>
                                        <Icon iconId={'office_icon'}/>
                                        {language === 'en'
                                            ? <p>DonGMU named after M.Gorky</p>
                                            : <p>ДонГМУ им. М.Горького</p>}
                                    </Place>
                                    <Location>
                                        <Icon iconId={'location_icon'}/>
                                        {language === 'en'
                                            ? <p>Donetsk</p>
                                            : <p>Донецк</p>}
                                    </Location>
                                </WorkPlaceInfo>
                            </FirstPartWorkInfo>
                            <SecondPartWorkInfo>
                                {language === 'en'
                                    ? <span>FullTime</span>
                                    : <span>Работа</span>}
                                <DateInfo>
                                    <Icon iconId={'calendar_icon'}/>
                                    {language === 'en'
                                        ? <p>Sep 2015 - now</p>
                                        : <p>Сен 2015 - н.в.</p>}
                                </DateInfo>
                            </SecondPartWorkInfo>
                        </WorkPlace>
                    </Education>
                </AboutContainer>
                <ImageStyled src={img}/>
            </CommonContainer>
        </Fade>
    )
}

export default About;