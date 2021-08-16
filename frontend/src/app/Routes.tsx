import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Auth from 'components/pages/Auth';

const Routes = () => {
  return (
      <Switch>
        <Route path="/" component={Auth} />
        <Route render={() => <Redirect to="/" />}></Route>
      </Switch>
  )
}

export default React.memo(Routes);