import React from 'react';
import { Outlet } from 'react-router';

import Menu from 'components/molecules/Menu';

const Setting = () => {
  return (
    <div className="setting-container">
      <Menu />
      <Outlet />
    </div>
  );
};

export default Setting;
