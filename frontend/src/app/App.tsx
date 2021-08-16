import React from 'react';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../modules/store';

import Routes from './Routes';

import '../assets/styles/index.scss';

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  );
}

export default React.memo(App);
