import React from 'react';
import {ContactsContainer} from "./Contacts.styled";
import {Title} from "../../components/title/Title.styled";
import {Fade} from "react-awesome-reveal";


function Contacts() {
    return (
        <Fade>
            <ContactsContainer id={'contacts'}>
                <Title textAlign={'center'}>For any questions please mail me:</Title>
                <a href={'mailto:st_erm@gmail.com'}>st_erm@gmail.com</a>
            </ContactsContainer>
        </Fade>
    );
}

export default Contacts;