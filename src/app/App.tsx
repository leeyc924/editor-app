import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../assets/styles/index.scss';

import Routes from './Routes';

import ConfirmToken from 'components/pages/ConfirmToken';

import { accountSelector } from 'modules/accountSlice';

const App = () => {
  const isLogin = useSelector(accountSelector.isLogin);

  return (
    <BrowserRouter>
      <ConfirmToken isLogin={isLogin}>
        <Routes />
      </ConfirmToken>
    </BrowserRouter>
  );
}

export default React.memo(App);
