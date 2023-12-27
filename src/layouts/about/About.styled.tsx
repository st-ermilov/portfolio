import styled from "styled-components";


export const CommonContainer = styled.section`
  display: flex;
`
export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
`

export const AboutSection = styled.section`
  max-width: 710px;

  & p {
    font-family: Poppins, serif;
    font-size: clamp(12px, 5vw, 18px);
    font-style: normal;
    font-weight: 400;
    line-height: clamp(16px, 5vw, 26px);
  }
`
export const WorkExperience = styled.section`
  max-width: 710px;
  display: flex;
  flex-direction: column;
`

export const WorkPlace = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 26px;
  margin-bottom: 30px;
  border-bottom: 2px solid #EBEAED;

  @media (max-width: 690px) {
    flex-direction: column;
    gap: 20px;
    align-items: start;
  }
`
export const WorkPlaceTitle = styled.h4`
  font-size: clamp(14px, 5vw, 20px);
  font-style: normal;
  font-weight: 400;
  line-height: clamp(18px, 5vw, 28px);
  letter-spacing: 1px;
`

export const WorkPlaceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Poppins, serif;
  font-size: clamp(10px, 5vw, 12px);
  font-style: normal;
  font-weight: 500;
  line-height: clamp(14px, 5vw, 28px);
  letter-spacing: 1px;
  gap: 30px;

  & img {
    margin-right: 5px;
  }

  @media (max-width: 580px) {
    flex-direction: column;
    margin-bottom: 5px;
  }
`

export const FirstPartWorkInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  & h4 {
    margin-bottom: 11px;
  }
`
export const Place = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  & p {
    font-family: Poppins, serif;
    font-size: clamp(10px, 5vw, 12px);
    font-style: normal;
    font-weight: 500;
    line-height: clamp(14px, 5vw, 28px);
  }
`
export const Location = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`

export const SecondPartWorkInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;

  & span {
    width: 90px;
    padding: 5px 20px;
    background: #D7FFE0;
    color: #018C0F;
    border-radius: 20px;
    font-family: Poppins, serif;
    font-size: 9px;
    font-style: normal;
    font-weight: 600;
    line-height: clamp(14px, 5vw, 26px);
    text-align: center;
  }

  @media (max-width: 690px) {
    width: 100%;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
`
export const Education = styled(WorkExperience)`

`
export const DateInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  & p {
    font-family: Poppins, serif;
    font-size: clamp(10px, 5vw, 12px);
    line-height: clamp(14px, 5vw, 28px);
    font-style: normal;
    font-weight: 500;
    letter-spacing: 1px;
  }

  @media (max-width: 580px) {
    padding-left: 2px;
  }

`
export const ImageStyled = styled.img`
  width: 834.658px;
  height: 834.655px;
  margin-top: -10%;
  margin-right: -5%;

  @media (max-width: 768px) {
    width: 500px;
    height: 500px;
  }
  @media (max-width: 550px) {
    display: none;
  }
`
