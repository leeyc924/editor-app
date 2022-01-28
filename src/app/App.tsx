import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { persistor, store } from '../modules/store';

import { CssBaseline } from '@mui/material';

import Token from './Token';
import FullscreenProgress from '../components/FullscreenProgress';

import Routes from './Routes';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<FullscreenProgress />} persistor={persistor}>
        <BrowserRouter>
          <CssBaseline />
          <Token>
            <Routes />
          </Token>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default React.memo(App);
