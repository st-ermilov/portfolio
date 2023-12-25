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


const navLinks = ['Home', 'About', 'Tech Stack', 'Projects', 'Contacts']
const anchorLinks = ['home', 'about', 'tech_stack', 'projects', 'contacts']

function Footer() {
    const isTablet = useMediaQuery({query: '(max-width: 875px)'})
    const isMobile = useMediaQuery({query: '(max-width: 690px)'})

    return (
        <FooterContainer>
            <FooterFirstLine>
                <Icon iconId={'logo'} height={'60px'} width={'100px'}/>
                <FirstLineContacts>
                    <p>+91 12345 09876</p>
                    <p>info@example.com</p>
                    <SocialMediaBarStyled>
                        <SocialMediaLink><Icon iconId={'github_icon'}/></SocialMediaLink>
                        <SocialMediaLink><Icon iconId={'telegram_icon'}/></SocialMediaLink>
                        <SocialMediaLink> <Icon iconId={'whatsapp_icon'}/></SocialMediaLink>
                    </SocialMediaBarStyled>
                </FirstLineContacts>
            </FooterFirstLine>
            <FooterSecondLine>
                <NavBarStyled justifyContent={isTablet && 'center'}>
                    <NavLinksBarStyled flexDirection={isMobile && 'column'}>
                        {navLinks.map((link, index) => (<NavLink
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