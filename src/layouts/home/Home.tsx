import React from 'react';
import {Greetings, HomeContainer, MyPhoto} from "./Home.styled";
import photo from '../../styles/assets/my_photo.webp'
import {Fade} from "react-awesome-reveal";


function Home() {

    return (
        <Fade>
            <HomeContainer id={'home'}>
                <Greetings>
                    Hi 👋,<br/>
                    My name is
                    Stanislav Ermilov <br/>
                    I build things for web
                </Greetings>
                <MyPhoto src={photo} alt={'My avatar'}/>
            </HomeContainer>
        </Fade>
    );
}

export default Home;