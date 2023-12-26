import React from 'react';
import {
    AboutContainer,
    AboutSection,
    DateInfo,
    Education,
    FirstPartWorkInfo,
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

function About() {
    return (
        <AboutContainer id={'about'}>
            <AboutSection>
                <Title>About Me</Title>
                <p>The Generator App is an online tool that helps you to export ready-made templates ready to work as
                    your future website. It helps you to combine slides, panels and other components and export it as a
                    set of static files: HTML/CSS/JS.</p>
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
                            <p>Sep 2009 - Jun 2015</p>
                        </DateInfo>
                    </SecondPartWorkInfo>
                </WorkPlace>
            </Education>
        </AboutContainer>
    )
}

export default About;