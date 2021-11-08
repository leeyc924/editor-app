import { Navigate } from 'react-router-dom';
import { useRoutes } from 'react-router';

import Account from 'components/pages/Account';

const routeList = () => [
  {
    path: '/',
    element: <Navigate to="/account/login" />,
  },
  {
    path: '/account/*',
    element: <Account />,
  }
];
const Routes = () => {
  const element = useRoutes(routeList());
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
