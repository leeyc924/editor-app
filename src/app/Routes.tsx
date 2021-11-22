import { Navigate } from 'react-router-dom';
import { RouteObject, useRoutes } from 'react-router';

import Account from 'components/pages/Account';
import LoginForm from 'components/templates/LoginForm';
import SignupForm from 'components/templates/SignupForm';

import Setting from 'components/pages/Setting';
import Profile from 'components/templates/Profile';

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
  path: 'account',
  element: <Account />,
  children: [
    {
      path: 'login',
      element: <LoginForm />,
    },
    {
      path: 'signup',
      element: <SignupForm />,
    },
  ],
};

const settingRouute: RouteObject = {
  path: 'setting',
  element: <Setting />,
  children: [
    {
      path: 'profile',
      element: <Profile />,
    },
  ],
};

const noMatchRoutes: RouteObject = {
  path: '*',
  element: <Navigate to="/" />,
};

const routeList: RouteObject[] = [noMatchRoutes, rootRoute, accountRoute, settingRouute];

const Routes = () => {
  const element = useRoutes(routeList);

  return element;
};

export default Routes;
