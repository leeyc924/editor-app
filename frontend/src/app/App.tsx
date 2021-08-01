import React from 'react';
import { Reset } from 'styled-reset';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { theme } from '../models/styled/theme';

import Routes from './Routes';

const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
  }
  body {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', 'Noto Sans KR', sans-serif !important;
    font-size: 0.8rem;
    box-sizing: border-box;

    #root {
      width: 100%;
      height: 100%;
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    &:focus {
      outline: none;
    }
  }

  * {
    box-sizing: inherit;
    /* 드래그 방지 css */
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select:none;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default React.memo(App);
