import styled from "styled-components";

export const HomeContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 240px 0 200px 0;
  @media (max-width: 1023px) {
    margin: 40px 0 120px 0;
    flex-direction: column-reverse;
    gap: 20px;
  }
`
export const Greetings = styled.h1`
  font-family: Poppins, serif;
  font-size: clamp(30px, 5vw, 52px);
  font-style: normal;
  font-weight: 700;
  line-height: clamp(32px, 5vw, 50px);
  letter-spacing: -1px;
  border: 1px solid #221be4;
  max-width: 500px;

  @media (max-width: 1023px) {
    border: none;
    max-width: 100%;
    text-align: center;
  }

`

export const MyPhoto = styled.img`
  width: 100%;
  height: 100%;
  max-width: 350px;
  max-height: 350px;
  border-radius: 50%;
  border: 5px solid #221be4;

`