import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  width: 100%;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.20);

  & img {
    width: 100%;
    height: 260px;
  }

  & p {
    font-family: Poppins, serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 26px;
    margin: 17px 0 12px 0;
    text-align: start;
  }

  & h3 {
    text-align: center;
    font-family: Poppins, serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    margin-top: 27px;
  }

  & span {
    font-family: Poppins, serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    margin-bottom: 21px;
  }

  & i {
    font-family: Poppins, serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 26px;
    margin-bottom: 21px;
  }
`

export const TextContent = styled.div`
  padding: 0 30px 25px 30px;

`
export const ProjectLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LinkStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;

  & a {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
`