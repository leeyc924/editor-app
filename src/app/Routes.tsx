import { Navigate } from 'react-router-dom';
import { RouteObject, useRoutes } from 'react-router';

import Account from 'components/pages/Account';
import LoginForm from 'components/templates/LoginForm';
import SignupForm from 'components/templates/SignupForm';
import Main from 'components/pages/Main';

const routeList: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/account/login" />,
  },
  {
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
  },
  {
    path: 'main/*',
    element: <Main />
  }
];

const Routes = () => {
  const element = useRoutes(routeList);

  return element;
};

export default Routes;

// const routes = (isLoggedIn) => [
//   {
//     path: '/app',
//     element: isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />,
//     children: [
//       { path: '/dashboard', element: <Dashboard /> },
//       { path: '/account', element: <Account /> },
//       { path: '/', element: <Navigate to="/app/dashboard" /> },
//       {
//         path: 'member',
//         element: <Outlet />,
//         children: [
//           { path: '/', element: <MemberGrid /> },
//           { path: '/add', element: <AddMember /> },
//         ],
//       },
//     ],
//   },
//   {
//     path: '/',
//     element: !isLoggedIn ? <MainLayout /> : <Navigate to="/app/dashboard" />,
//     children: [
//       { path: 'login', element: <Login /> },
//       { path: '/', element: <Navigate to="/login" /> },
//     ],
//   },
// ];

// export default routes;
