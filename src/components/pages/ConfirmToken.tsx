import React, { ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useConfirmTokenMutation } from 'modules/accountApi';

interface IConfirmTokenProps {
  children: ReactNode;
  isLogin: boolean;
}

const ConfirmToken = ({ children, isLogin }: IConfirmTokenProps) => {
  const [confirmToken, { isLoading, isError }] = useConfirmTokenMutation();
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    if (!isLogin) {
      const accessToken = localStorage.getItem('accessToken') || '';
      if (accessToken) {
        confirmToken({ accessToken });
      } else {
        navigate('/account/login');
      }
    }
  }, [confirmToken, navigate, isLogin, pathname]);

  useEffect(() => {
    if (isError) {
      navigate('/account/login');
    }
  }, [navigate, isError]);

  return (
    <>
      {isLoading ? <div>로딩</div> : children}
    </>
  );
};

export default ConfirmToken;
