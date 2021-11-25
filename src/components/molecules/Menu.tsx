import React, { useCallback, useState } from 'react';
import { IoSettingsOutline as SettingIcon } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

import { accountSelector } from 'modules/accountSlice';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const accountInfo = useSelector(accountSelector.accountInfo);

  return (
    <div className="menu">
      <div className="menu-container">
        <button onClick={() => setIsOpen(isOpen => !isOpen)}>
          <SettingIcon size={30} />
        </button>
        <div className="menu-box" style={isOpen ? { display: 'flex' } : { display: 'none' }}>
          <ul>
            <li><Link to="/setting/profile">계정정보</Link></li>
            {/* {accountInfo?.permission === 'ADMIN' && <li><Link to="/setting/group">계정관리</Link></li>} */}
            <li><Link to="/setting/group/list">그룹목록</Link></li>
            {accountInfo?.permission === 'ADMIN' && <li><Link to="/setting/group/manage">그룹관리</Link></li>}
            <LogoutButton />
          </ul>
        </div>
      </div>
    </div>
  );
};

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    localStorage.removeItem('accessToken');
    navigate('/account/login');
  }, [navigate]);

  return (
    <li onClick={() => handleLogout()}>로그아웃</li>
  )
}

export default React.memo(Menu);
