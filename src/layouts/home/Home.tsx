import React from 'react';
import {Greetings, HomeContainer, MyPhoto} from "./Home.styled";
import photo from '../../styles/assets/my_photo.webp'
import {Fade} from "react-awesome-reveal";
import {useLanguage} from "../../App";
import {BackgroundAnimated} from "../../../src/components/BackgroundAnimated";


function Home() {
const {language} = useLanguage()
    return (
        <Fade>
            <HomeContainer id={'home'}>
                <BackgroundAnimated/>
                {language === 'en'
                ? <Greetings>
                        Hi 👋,<br/>
                        My name is
                        Stanislav Ermilov <br/>
                        I build things for web
                    </Greetings>
                : <Greetings>
                        Привет 👋,<br/>
                        Меня зовут
                        Станислав Ермилов <br/>
                        Я веб-разработчик
                    </Greetings>}

                <MyPhoto src={photo} alt={'My avatar'}/>
            </HomeContainer>
        </Fade>
    );
}

export default Home;