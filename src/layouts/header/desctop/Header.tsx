import {
    HeaderStyled, LanguagesButtons,
    NavBarStyled,
    NavLink,
    NavLinksBarStyled,
    SocialMediaBarStyled,
    SocialMediaLink
} from "./Header.styled";
import React from "react";
import Icon from "../../../components/icon/Icon";
import ru from '../../../languages/ru.json'
import en from '../../../languages/en.json'
import {useLanguage} from "../../../App";
import RU from '../../../styles/assets/RU.svg'
import EN from '../../../styles/assets/EN.svg'


export const anchorLinks = ['home', 'about', 'tech_stack', 'projects', 'contacts']

function Header() {
    const {language, setLanguage} = useLanguage()
    return (
        <HeaderStyled position={'sticky'}>
            <NavBarStyled>
                <NavLink
                    to={anchorLinks[0]}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={800}
                ><Icon iconId={"logo"} height={'60px'} width={'100px'}/></NavLink>
                <LanguagesButtons>
                    <button onClick={() => setLanguage("ru")}><img src={RU}/></button>
                    <button onClick={() => setLanguage("en")}><img src={EN}/></button>
                </LanguagesButtons>
                <NavLinksBarStyled>
                    { language === 'en' ? en.menu.map((link, index) => (<NavLink
                            to={anchorLinks[index]}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={800}
                            key={index}>{link}</NavLink>
                    )) : ru.menu.map((link, index) => (<NavLink
                            to={anchorLinks[index]}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={800}
                            key={index}>{link}</NavLink>
                    ))}
                </NavLinksBarStyled>
                <SocialMediaBarStyled>
                    <SocialMediaLink><a href="https://github.com/st-ermilov" target={'_blank'}><Icon
                        iconId={'github_icon'}/></a></SocialMediaLink>
                    <SocialMediaLink><a href="https://t.me/st_erm" target={'_blank'}><Icon
                        iconId={'telegram_icon'}/></a></SocialMediaLink>
                    <SocialMediaLink><a href="https://wa.me/+79188956832" target={'_blank'}><Icon
                        iconId={'whatsapp_icon'}/></a>
                    </SocialMediaLink>
                </SocialMediaBarStyled>
            </NavBarStyled>
        </HeaderStyled>
    )
}

export default Header

