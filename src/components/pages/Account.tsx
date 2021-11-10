import React from 'react';

import { Outlet } from 'react-router';

const Account = () => {
  return (
    <div className="account-container">
      <Outlet />
    </div>
  );
};

export default Account;
