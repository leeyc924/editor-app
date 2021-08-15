import React from 'react';
import { Reset } from 'styled-reset';

import Routes from './Routes';

import '../assets/styles/index.scss';

const App = () => {
  return (
    <>
      <Reset />
      <Routes />
    </>
  );
}

export default React.memo(App);
