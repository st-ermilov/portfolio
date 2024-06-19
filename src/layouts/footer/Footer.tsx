import React from 'react';
import {DesignBy, FirstLineContacts, FooterContainer, FooterFirstLine, FooterSecondLine} from "./Footer.styled";
import Icon from "../../components/icon/Icon";
import {
    NavBarStyled,
    NavLink,
    NavLinksBarStyled,
    SocialMediaBarStyled,
    SocialMediaLink
} from "../header/desctop/Header.styled";
import {useMediaQuery} from "react-responsive";
import ru from '../../languages/ru.json'
import en from '../../languages/en.json'
import {useLanguage} from "../../App";



const anchorLinks = ['home', 'about', 'tech_stack', 'projects', 'contacts']

function Footer() {
    const isTablet = useMediaQuery({query: '(max-width: 875px)'})
    const isMobile = useMediaQuery({query: '(max-width: 690px)'})
    const {language} = useLanguage()

    return (
        <FooterContainer>
            <FooterFirstLine>
                <Icon iconId={'logo'} height={'60px'} width={'100px'}/>
                <FirstLineContacts>
                    <a href="tel:+79188956832">+79188956832</a>
                    <SocialMediaBarStyled>
                        <SocialMediaLink><a href="https://github.com/st-ermilov" target={'_blank'}><Icon
                            iconId={'github_icon'}/></a></SocialMediaLink>
                        <SocialMediaLink><a href="https://t.me/st_erm" target={'_blank'}><Icon
                            iconId={'telegram_icon'}/></a></SocialMediaLink>
                        <SocialMediaLink><a href="https://wa.me/+79188956832" target={'_blank'}><Icon
                            iconId={'whatsapp_icon'}/></a>
                        </SocialMediaLink>
                    </SocialMediaBarStyled>
                </FirstLineContacts>
            </FooterFirstLine>
            <FooterSecondLine>
                <NavBarStyled justifyContent={isTablet && 'center'}>
                    <NavLinksBarStyled flexDirection={isMobile && 'column'}>
                        {language === 'en'
                            ? en.menu.map((link, index) => (<NavLink
                                    to={anchorLinks[index]}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={800}
                                    key={index}>{link}</NavLink>
                            ))
                            : ru.menu.map((link, index) => (<NavLink
                                    to={anchorLinks[index]}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={800}
                                    key={index}>{link}</NavLink>
                            ))}
                    </NavLinksBarStyled>
                </NavBarStyled>
                <DesignBy>
                    <p>Designed and built by <span>St Erm</span> with <span>Love & Coffee</span></p>
                </DesignBy>
            </FooterSecondLine>
        </FooterContainer>
    );
}

export default Footer;