import {createGlobalStyle, ThemeProvider} from "styled-components";
import {ReactNode} from "react";

type GlobalStylesPropsType = {
    overFlow?: string
}
export const GlobalStyles = createGlobalStyle<GlobalStylesPropsType>`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    max-width: 1170px;
    margin: 0 auto;
    overflow: ${props => props.overFlow || ''};
    @media (max-width: 1170px) {
      padding: 0 40px;
    }
  }
`

type ThemeProviderProps = {
    children: ReactNode;
    overFlow?: string;
};

export const MyThemeProvider = ({children, overFlow}: ThemeProviderProps) => (
    <ThemeProvider theme={{overFlow}}>
        <>
            <GlobalStyles overFlow={overFlow}/>
            {children}
        </>
    </ThemeProvider>
);