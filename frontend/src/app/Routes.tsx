import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import Login from '../pages/auth/Login';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Login />
        </Route>
        <Route render={() => <Redirect to="/" />}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;