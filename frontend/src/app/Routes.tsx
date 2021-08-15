import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../modules/store';

const Routes = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/"  />
        <Route render={() => <Redirect to="/" />}></Route>
      </Switch>
    </ConnectedRouter>
  )
}

export default React.memo(Routes);