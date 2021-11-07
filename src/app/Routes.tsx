import Account from 'components/pages/Account';
import React from 'react';
import { connect } from 'react-redux';
import { Switch, Redirect, Route } from 'react-router-dom';

import Home from '../components/pages/Home';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={() => <Redirect to="/account" />} exact />
      <Route path="/account" component={Account} exact />
      <Route render={() => <Redirect to="/" />}></Route>
    </Switch>
  )
}

const mapStateToProps = (state: any) => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash,
});

export default connect(mapStateToProps, null)(React.memo(Routes));
