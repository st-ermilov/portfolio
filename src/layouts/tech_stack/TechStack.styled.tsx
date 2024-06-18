import styled from "styled-components";

export const TechStackContainer = styled.section`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & p {
    text-align: center;
    font-family: Roboto, serif;
    font-size: clamp(14px, 5vw, 32px);
    font-style: normal;
    font-weight: 400;
    line-height: 26px;

  }

  @media (max-width: 1024px) {
    margin-top: 100px;
  }
`
export const SkillsContainer = styled.div`
  margin-top: 125px;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 80px 50px;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(auto, 1fr);
  }
  @media (max-width: 850px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 60px;
  }
`