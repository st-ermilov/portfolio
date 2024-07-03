import styled from "styled-components";

export const FooterContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const FooterFirstLine = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 40px;
  border-bottom: 2px solid #666;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 875px) {
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 20px;
  }
`

export const FirstLineContacts = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;


  & a {
    font-family: Roboto, serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    text-decoration: none;
    color: #221be4;
  }

  & div {
    border: 2px solid #221be4;
    padding: 2px 7px;
    border-radius: 20px;
    transition: all 400ms ease-in-out;
  }

  & div:hover {
    transform: scale(1.1);
  }
  @media (max-width: 700px) {
    flex-direction: column;
    text-align: center;
  }
`

export const FooterSecondLine = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;


  & p {
    font-family: Roboto, serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    white-space: nowrap;

    & span {
      color: #221be4
    }

    @media (max-width: 690px) {
      white-space: normal;
      text-align: center;
    }

  }

  @media (max-width: 875px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
`
export const DesignBy = styled.div`
  @media (max-width: 690px) {
    margin-top: 30px;
    max-width: 100vw;
  }
`