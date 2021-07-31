import React from 'react';
import { Reset } from 'styled-reset';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Routes from './Routes';

const theme = {

}

const GlobalStyle = createGlobalStyle`

`;

const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
