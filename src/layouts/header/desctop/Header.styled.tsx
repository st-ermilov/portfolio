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
  position: ${(props) => props.position || ''};
  top: 0;
  z-index: 2;
  background-color: white;
  padding: 0 10px;
  box-shadow: 0 4px 4px #0000000d;
  @media (min-width: 1024px) {
    padding: 0 40px;
  }
}
`

export const NavBarStyled = styled.nav<NavBarStyledProps>`
  width: 100%;
  min-height: 60px;
  display: flex;
  justify-content: ${props => props.justifyContent || 'space-between'};
  align-items: center;


  & button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
  }
  
  & img {
    transition: all 400ms ease-in-out;
    width: 30px;
  }

  @media (max-width: 1024px) {
    & img {
      width: 20px;
      cursor: pointer;
    }
  
  
  @media (min-width: 1024px) {
  & img:hover {
    transform: scale(1.3);
  }
}
`

export const LanguagesButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 1024px) {
    gap: 10px;
  }
`

export const NavLinksBarStyled = styled.div<NavLinksBarStyledProps>`
  display: flex;
  justify-content: space-between;
  max-height: 100%;
  @media (max-width: 690px) {
    flex-direction: ${props => props.flexDirection || 'column'};
    gap: 20px;
    justify-content: start;
    padding-top: 70px;
  }
`

export const NavLink = styled(Link)`
  margin-right: 20px;
  text-align: center;
  transition: all 400ms ease-in-out;
  cursor: pointer;

  @media (min-width: 1024px) {
    &:hover {
      transform: scale(1.2);
    }
  }

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
  transition: all 400ms ease-in-out;
  @media (min-width: 1024px) {
    &:hover {
      transform: scale(1.3);
    }
  }
`