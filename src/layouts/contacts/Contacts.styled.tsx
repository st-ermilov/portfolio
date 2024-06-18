import styled from "styled-components";

export const ContactsContainer = styled.section`
  margin: 180px 0 200px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & a {
    font-family: Roboto, serif;
    font-size: clamp(18px, 5vw, 38px);
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 120.69% */
    letter-spacing: -1px;
    color: #221be4;
  }

  @media (max-width: 425px) {
    margin: 40px 0 60px 0;
  }
`