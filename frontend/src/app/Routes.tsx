import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Auth from '../pages/auth/Auth';
import AuthLayout from '../pages/layout/Auth';
import Default from '../pages/layout/Default';

import { history } from '../module/store';

import { ILayoutProps } from './route.model';

const Layout = (props: ILayoutProps) => {
  if (props.type === 'auth') {
    return <AuthLayout>{props.children}</AuthLayout>
  } else {
    return <Default>{props.children}</Default>
  }
}

const Routes = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Layout type="auth">
          <Route path="/login">
            <Auth />
          </Route>
        </Layout>
        <Route render={() => <Redirect to="/login" />}></Route>
      </Switch>
    </ConnectedRouter>
  )
}

export default React.memo(Routes);