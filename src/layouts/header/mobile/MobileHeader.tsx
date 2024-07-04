import React from 'react';
import {
    HeaderStyled, LanguagesButtons,
    NavBarStyled,
    NavLink,
    NavLinksBarStyled,
    SocialMediaBarStyled,
    SocialMediaLink
} from "../desctop/Header.styled";
import Icon from "../../../components/icon/Icon";
import {anchorLinks} from "../desctop/Header";
import {MenuStyled, MenuWrapper} from "./MobileHeaderStyled";
import {MyThemeProvider} from "../../../styles/GlobalStyles";
import ru from '../../../languages/ru.json'
import en from '../../../languages/en.json'
import {useLanguage} from "../../../App";
import RU from "../../../styles/assets/RU.svg";
import EN from "../../../styles/assets/EN.svg";
import {MenuButton} from "../../../../src/components/mobile_menu/MenuButton";

function MobileHeader() {

    const [isOpen, setIsOpen] = React.useState(true)
    const {language, setLanguage} = useLanguage()
    return (
        <MyThemeProvider overFlow={!isOpen ? 'hidden' : ''}>
            <HeaderStyled position={'sticky'}>
                <NavBarStyled>
                    <Icon iconId={"logo"} height={'60px'} width={'100px'}/>
                    <MenuButton isActive={isOpen} onClick={() => setIsOpen(!isOpen)}/>
                </NavBarStyled>
                <MenuWrapper height={isOpen ? '0px' : '100dvh'}>
                <MenuStyled height={isOpen ? '0px' : '70dvh'}>
                    <NavLinksBarStyled flexDirection={'column'}>
                        {language === 'en' ? en.menu.map((link, index) => (<NavLink
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
                        )) : ru.menu.map((link, index) => (<NavLink
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
                        ))
                        }
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
                    <LanguagesButtons>
                        <button onClick={() => {
                            setLanguage("ru")
                            setIsOpen(!isOpen)
                        }}><img src={RU}/></button>
                        <button onClick={() => {
                            setLanguage("en")
                            setIsOpen(!isOpen)
                        }}><img src={EN}/></button>
                    </LanguagesButtons>
                </MenuStyled>
                </MenuWrapper>
            </HeaderStyled>
        </MyThemeProvider>
    );
}

export default MobileHeader;