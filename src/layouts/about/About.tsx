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

function About() {
    return (
        <Fade damping={0.1}>
            <CommonContainer>
                <AboutContainer id={'about'}>
                    <AboutSection>
                        <Title>About Me</Title>
                        <p>Until recently, my whole life was connected with medicine - I graduated from medical
                            university, got a PhD in medicine, I teach students my subject - “Urology”. At the same
                            time, I work as an operating urologist. </p>
                        <p>About 2 years ago I became interested in web
                            development, I started to study this direction from YouTube videos. Gradually I was
                            fascinated by it, in addition to HTML and CSS I learned JavaScript, mastered React, Git and
                            many other technologies. And I was so fascinated by web development that I wanted to change
                            my profession and become a Frontend developer. Let's get started...)</p>
                    </AboutSection>
                    <WorkExperience>
                        <Title>Work Experience</Title>
                        <WorkPlace>
                            <FirstPartWorkInfo>
                                <WorkPlaceTitle>Web Development Intern</WorkPlaceTitle>
                                <WorkPlaceInfo>
                                    <Place>
                                        <Icon iconId={'office_icon'}/>
                                        <p>Open Source</p>
                                    </Place>
                                    <Location>
                                        <Icon iconId={'location_icon'}/>
                                        <p>Rostov-on-Don</p>
                                    </Location>
                                </WorkPlaceInfo>
                            </FirstPartWorkInfo>
                            <SecondPartWorkInfo>
                                <span>Internship</span>
                                <DateInfo>
                                    <Icon iconId={'calendar_icon'}/>
                                    <p>Nov 2022 - Dec 2023</p>
                                </DateInfo>
                            </SecondPartWorkInfo>
                        </WorkPlace>
                    </WorkExperience>
                    <Education>
                        <Title>Education</Title>
                        <WorkPlace>
                            <FirstPartWorkInfo>
                                <WorkPlaceTitle>Web Development Intern</WorkPlaceTitle>
                                <WorkPlaceInfo>
                                    <Place>
                                        <Icon iconId={'office_icon'}/>
                                        <p>IT-Incubator</p>
                                    </Place>
                                    <Location>
                                        <Icon iconId={'location_icon'}/>
                                        <p>Rostov-on-Don</p>
                                    </Location>
                                </WorkPlaceInfo>
                            </FirstPartWorkInfo>
                            <SecondPartWorkInfo>
                                <span>Internship</span>
                                <DateInfo>
                                    <Icon iconId={'calendar_icon'}/>
                                    <p>Dec 2023 - now</p>
                                </DateInfo>
                            </SecondPartWorkInfo>
                        </WorkPlace>
                        <WorkPlace>
                            <FirstPartWorkInfo>
                                <WorkPlaceTitle>Ph.D. of Medical Sciences</WorkPlaceTitle>
                                <WorkPlaceInfo>
                                    <Place>
                                        <Icon iconId={'office_icon'}/>
                                        <p>DonNMU named after M.Gorky</p>
                                    </Place>
                                    <Location>
                                        <Icon iconId={'location_icon'}/>
                                        <p>Donetsk</p>
                                    </Location>
                                </WorkPlaceInfo>
                            </FirstPartWorkInfo>
                            <SecondPartWorkInfo>
                                <span>FullTime</span>
                                <DateInfo>
                                    <Icon iconId={'calendar_icon'}/>
                                    <p>Sep 2015 - now</p>
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