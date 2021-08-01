import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import Login from '../pages/auth/Login';
import Auth from '../pages/layout/Auth';
import Default from 'pages/layout/Default';
import { ILayoutProps } from './route.model';

const Layout = (props: ILayoutProps) => {
  if (props.type === 'auth') {
    return <Auth>{props.children}</Auth>
  } else {
    return <Default>{props.children}</Default>
  }
}

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout type="auth">
          <Route path="/">
           <Login />
          </Route>
        </Layout>
        <Route render={() => <Redirect to="/" />}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default React.memo(Routes);