import {
    HeaderStyled,
    NavBarStyled,
    NavLink,
    NavLinksBarStyled,
    SocialMediaBarStyled,
    SocialMediaLink
} from "./Header.styled";
import React from "react";
import Icon from "../../../components/icon/Icon";


export const navLinks = ['Home', 'About', 'Tech Stack', 'Projects', 'Contacts']
export const anchorLinks = ['home', 'about', 'tech_stack', 'projects', 'contacts']


function Header() {
    return (
        <HeaderStyled position={'sticky'}>
            <NavBarStyled>
                <Icon iconId={"logo"} height={'60px'} width={'100px'}/>
                <NavLinksBarStyled>
                    {navLinks.map((link, index) => (<NavLink
                            to={anchorLinks[index]}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={800}
                            key={index}>{link}</NavLink>
                    ))}
                </NavLinksBarStyled>
                <SocialMediaBarStyled>
                    <SocialMediaLink><Icon iconId={'github_icon'}/></SocialMediaLink>
                    <SocialMediaLink><Icon iconId={'telegram_icon'}/></SocialMediaLink>
                    <SocialMediaLink> <Icon iconId={'whatsapp_icon'}/></SocialMediaLink>
                </SocialMediaBarStyled>
            </NavBarStyled>
        </HeaderStyled>
    )
}

export default Header

