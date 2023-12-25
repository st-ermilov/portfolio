import React from 'react';
import {ContactsContainer} from "./Contacts.styled";
import {Title} from "../../components/title/Title.styled";


function Contacts() {
    return (
        <ContactsContainer id={'contacts'}>
            <Title textAlign={'center'}>For any questions please mail me:</Title>
            <a href={'mailto:st_erm@gmail.com'}>st_erm@gmail.com</a>
        </ContactsContainer>
    );
}

export default Contacts;