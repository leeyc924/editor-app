import React from 'react';
import { Reset } from 'styled-reset';

import '../assets/styles/init.scss';
import Routes from './Routes';

const App = () => {
  return (
    <>
      <Reset />
      <Routes />
    </>
  );
}

export default React.memo(App);
