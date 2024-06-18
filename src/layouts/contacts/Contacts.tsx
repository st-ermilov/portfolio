import React from 'react';
import {ContactsContainer} from "./Contacts.styled";
import {Title} from "../../components/title/Title.styled";
import {Fade} from "react-awesome-reveal";
import {useLanguage} from "../../App";


function Contacts() {
    const {language} = useLanguage()
    return (
        <Fade>
            <ContactsContainer id={'contacts'}>
                {language === 'en'
                    ? <Title textAlign={'center'}>For any questions please mail me:</Title>
                    : <Title textAlign={'center'}>По любым вопросам свяжитесь со мной:</Title>}
                <a href={'mailto:stanislav_ermilov@rambler.ru'}>E-mail</a>
            </ContactsContainer>
        </Fade>
    );
}

export default Contacts;