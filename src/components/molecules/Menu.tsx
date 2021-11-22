import React, { useState } from 'react';
import { IoSettingsOutline as SettingIcon } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu">
      <div className="menu-container">
        <button onClick={() => setIsOpen(isOpen => !isOpen)}>
          <SettingIcon size={30} />
        </button>
        <div className="menu-box" style={isOpen ? { display: 'flex' } : { display: 'none' }}>
          <ul>
            <li><Link to="/setting/profile">유저</Link></li>
            <li>그룹</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Menu);
