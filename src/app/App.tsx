import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

import '../assets/styles/index.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default React.memo(App);
