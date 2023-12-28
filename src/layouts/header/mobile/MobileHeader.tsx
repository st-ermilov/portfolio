import React from 'react';
import {
    HeaderStyled,
    NavBarStyled,
    NavLink,
    NavLinksBarStyled,
    SocialMediaBarStyled,
    SocialMediaLink
} from "../desctop/Header.styled";
import Icon from "../../../components/icon/Icon";
import {anchorLinks, navLinks} from "../desctop/Header";
import {MenuStyled} from "./MobileHeaderStyled";
import {MyThemeProvider} from "../../../styles/GlobalStyles";

function MobileHeader() {

    const [isOpen, setIsOpen] = React.useState(true)

    return (
        <MyThemeProvider overFlow={!isOpen ? 'hidden' : ''}>
            <HeaderStyled position={'sticky'}>
                <NavBarStyled>
                    <Icon iconId={"logo"} height={'60px'} width={'100px'}/>
                    <Icon iconId={isOpen ? 'menu' : 'close_icon'} height={'40px'} width={'40px'} onClick={() => {
                        setIsOpen(!isOpen)
                    }}/>
                </NavBarStyled>
                <MenuStyled height={isOpen ? '0px' : '100vh'}>
                    <NavLinksBarStyled flexDirection={'column'}>
                        {navLinks.map((link, index) => (<NavLink
                                to={anchorLinks[index]}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={800}
                                key={index}
                                onClick={() => {
                                    setIsOpen(!isOpen)
                                }}
                            >{link}</NavLink>
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
                </MenuStyled>
            </HeaderStyled>
        </MyThemeProvider>
    );
}

export default MobileHeader;