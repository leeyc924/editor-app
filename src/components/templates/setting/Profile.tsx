import dayjs from 'dayjs';
import { accountSelector } from 'modules/accountSlice';
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const accountInfo = useSelector(accountSelector.accountInfo);

  return (
    <div className="profile-box">
      <ul>
        <li>
          <span className="title">이름</span>
          <span className="desc">{accountInfo?.accountNm}</span>
        </li>
        <li>
          <span className="title">소속그룹</span>
          <span className="desc">{accountInfo?.accountNm}</span>
        </li>
        <li>
          <span className="title">가입일</span>
          <span className="desc">{dayjs(accountInfo?.regDt).format('YYYY.MM.DD')}</span>
        </li>
        <li>
          <span className="title">권한</span>
          <span className="desc">{accountInfo?.permission}</span>
        </li>
        <li>
          <span className="title">개인전 승률</span>
          <span className="desc"></span>
        </li>
        <li>
          <span className="title">팀전 승률</span>
          <span className="desc"></span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
