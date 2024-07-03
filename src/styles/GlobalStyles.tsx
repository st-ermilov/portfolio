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
    margin: 0 auto;
    position: relative;
    width: 100%;
    overflow: ${props => props.overFlow || ''};
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