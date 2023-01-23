import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${(props) => props.theme.fontSize};
  }
  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    font-family: ${({ theme }) => theme.fontFamily};
    color: ${({ theme }) => theme.fontColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    hyphens: auto;
  }
`;

export default GlobalStyle;
