import styled from "styled-components";
import {Link} from 'react-scroll'

type HeaderStyledPropsType = {
    position?: string
}

type NavBarStyledProps = {
    justifyContent?: false | string
}
type NavLinksBarStyledProps = {
    flexDirection?: false | string
}
export const HeaderStyled = styled.header<HeaderStyledPropsType>`
  height: 60px;
  width: 100%;
  margin-top: 40px;
  position: ${(props) => props.position || ''};
  top: 0;
  z-index: 2;
  background-color: white;
`

export const NavBarStyled = styled.nav<NavBarStyledProps>`
  width: 100%;
  min-height: 60px;
  display: flex;
  justify-content: ${props => props.justifyContent || 'space-between'};
  align-items: center;
`

export const NavLinksBarStyled = styled.div<NavLinksBarStyledProps>`
  display: flex;
  justify-content: space-between;
  max-height: 100%;
  @media (max-width: 690px) {
    flex-direction: ${props => props.flexDirection || 'column'};
    gap: 20px;
    justify-content: start;
  }
`

export const NavLink = styled(Link)`
  margin-right: 20px;
  text-align: center;
  @media (max-width: 690px) {
    margin: 0;
  }
`

export const SocialMediaBarStyled = styled.section`
  display: flex;
  gap: 10px;
  justify-content: center;
`

export const SocialMediaLink = styled.a`

`