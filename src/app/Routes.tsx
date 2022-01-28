import { Navigate } from 'react-router-dom';
import { RouteObject, useRoutes } from 'react-router';

import Login from '../page/Login'

const rootRoute: RouteObject = {
  path: '/',
  element: <Navigate to="/account/login" />,
  children: [
    {
      index: true,
      element: <Navigate to="/account/login" />,
    },
  ],
};

const accountRoute: RouteObject = {
  path: 'account/*',
  element: <Login />,
  children: [
    {
      path: 'login',
      element: <Login />,
    },
    // {
    //   path: 'signup',
      // element: <SignupForm />,
    // },
  ],
};

const noMatchRoutes: RouteObject = {
  path: '*',
  element: <Navigate to="/" />,
};

const routeList: RouteObject[] = [noMatchRoutes, rootRoute, accountRoute];

const Routes = () => {
  const element = useRoutes(routeList);

  return element;
};

export default Routes;
