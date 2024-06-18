import styled from "styled-components";

type MenuStyledPropsType = {
    height: string
}
export const MenuStyled = styled.div<MenuStyledPropsType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 50px;
  background-color: white;
  width: 100%;
  height: ${props => props.height || '0'};
  transition: all 400ms ease-in-out;
  overflow: hidden;
   & img {
     width: 20px;
   }
  & button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
  }
`