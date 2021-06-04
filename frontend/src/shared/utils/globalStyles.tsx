import { createGlobalStyle } from "styled-components";

interface GlobalStylesProps {
  theme: {
    fonts: {
      primary: string;
    };
    colors: {
      primary: {
        normal: string;
        dark: string;
      };
    };
  };
}

const GlobalStyle = createGlobalStyle<GlobalStylesProps>`
  body, ul, li, h1, h2, h3, h4, h5, h6, p, hr {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Nunito Sans, sans-serif";
    color: ${({ theme }) => theme.colors.primary.normal};
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex-grow: 1;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.normal};
    text-decoration: none;
    cursor: pointer;
    &:hover {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary.normal};
    }
  }

  li {
    list-style: none;
  }

`;

export default GlobalStyle;
