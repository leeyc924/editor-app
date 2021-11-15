import { useConfirmTokenMutation } from 'modules/accountApi';
import { accountSelector } from 'modules/accountSlice';
import React, { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

interface IConfirmTokenProps {
  children: ReactNode;
}

const ConfirmToken = ({ children }: IConfirmTokenProps) => {
  const isLogin = useSelector(accountSelector.isLogin);
  const [confirmToken, { isLoading }] = useConfirmTokenMutation();

  const { pathname } = useLocation();

  useEffect(() => {
    if (!isLogin && pathname.indexOf('account') < 0) {
      const accessToken = localStorage.getItem('accessToken') || '';
      confirmToken({ accessToken });
    }
  }, [confirmToken, isLogin, pathname]);

  return isLoading ? <div>로딩</div> : isLogin ? <>{children}</> : <div>{children}</div>;
};

export default ConfirmToken;
