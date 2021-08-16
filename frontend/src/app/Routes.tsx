import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

const Home = React.lazy(() => import('../components/pages/Home'));
const Auth = React.lazy(() => import('../components/pages/Auth'));


// const Layout = React.memo(({ pathname, isLogin }) => {
//   if (pathname.indexOf('/account') === 0) {
//     return <AuthLayout />;
//   } else if (props.isLogin) {
//     return <HorizontalLayout />;
//   } else {
//     return <HomeLayout />;
//   }
// });

const Routes = () => {
  return (
    // <Layout>
    <Suspense fallback={() => <div>isloading</div>}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/account" component={Auth} />
        <Route path="*" render={() => <Redirect to="/" />}></Route>
      </Switch>
    </Suspense>
    // </Layout>
  )
}

const mapStateToProps = (state: any) => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash,
});

export default connect(mapStateToProps, null)(React.memo(Routes));