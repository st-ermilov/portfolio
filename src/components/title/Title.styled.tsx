import styled from "styled-components";


type TitlePropsType = {
    textAlign?: string
}
export const Title = styled.h3<TitlePropsType>`
  font-family: Roboto, serif;
  font-size: clamp(20px, 5vw, 42px);
  font-style: normal;
  font-weight: 700;
  line-height: clamp(30px, 5vw, 52px);
  letter-spacing: -0.4px;
  margin-bottom: 38px;
  text-align: ${(props) => props.textAlign || 'start'};
`