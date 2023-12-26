import styled from "styled-components";

export const ProjectsContainer = styled.section`
  margin-top: 200px;

  & p {
    text-align: center;
    font-family: Poppins, serif;
    font-size: clamp(14px, 5vw, 32px);
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    margin-bottom: 110px;

    @media (max-width: 550px) {
      margin-bottom: 60px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 100px;
  }
`
export const ProjectCardContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 62px 34px;
  @media (max-width: 1240px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
  @media (max-width: 1240px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
  }
`
