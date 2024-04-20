import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
  }

  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  body {
    padding: 1.25rem 2rem;
    background-color: #f7f7f7f7;
  }

  ::-webkit-scrollbar {
    width: 0.625rem;
  }

  ::-webkit-scrollbar-track {
  background: transparent;
}
`;

export default GlobalStyle;
