import React, {createContext, Dispatch, SetStateAction} from "react";

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

interface LanguageContextType {
    language: string;
    setLanguage: Dispatch<SetStateAction<string>>;
}

// Создаем контекст с начальным значением
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Пользовательский хук для использования контекста языка
export const useLanguage = () => {
    const context = React.useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
function App() {
    const [language, setLanguage] = React.useState('en');
    const isMobile = useMediaQuery({query: '(max-width: 690px)'})

    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            <>
                {!isMobile ? <Header/> : <MobileHeader/>}
                <Home/>
                <About/>
                <TechStack/>
                <Projects/>
                <Contacts/>
                <Footer/>
            </>
        </LanguageContext.Provider>

    );
}


export default App;

