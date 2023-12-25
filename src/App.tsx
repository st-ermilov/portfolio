import React from "react";

import './App.css';
import Header from "./layouts/header/desctop/Header";
import Home from "./layouts/home/Home";
import About from "./layouts/about/About";
import TechStack from "./layouts/tech_stack/TechStack";
import Projects from "./layouts/projects/Projects";
import Contacts from "./layouts/contacts/Contacts";
import Footer from "./layouts/footer/Footer";
import {useMediaQuery} from "react-responsive";
import MobileHeader from "./layouts/header/mobile/MobileHeader";


function App() {

    const isMobile = useMediaQuery({query: '(max-width: 690px)'})

    return (
        <>
            {!isMobile ? <Header/> : <MobileHeader/>}
            <Home/>
            <About/>
            <TechStack/>
            <Projects/>
            <Contacts/>
            <Footer/>

        </>
    );
}


export default App;

