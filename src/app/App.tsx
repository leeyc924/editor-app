import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import '../assets/styles/index.scss';

import Routes from './Routes';

import ConfirmToken from 'components/pages/ConfirmToken';



const App = () => {
  return (
    <BrowserRouter>
      <ConfirmToken>
        <Routes />
      </ConfirmToken>
    </BrowserRouter>
  );
}

export default React.memo(App);
