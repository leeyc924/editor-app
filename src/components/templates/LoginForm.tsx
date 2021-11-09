import React, { useEffect } from 'react';
import { Formik } from 'formik';

import { ILoginState } from 'models/account';

import AccounField from '../molecules/AccounField';

import Button from 'components/atoms/Button';
import { useLoginMutation } from 'modules/accountSlice';
import { Link } from 'react-router-dom';

const initialValues: ILoginState = { accountId: '', accountPw: '' };

const LoginForm = () => {
  const [login, { data, error, isSuccess, isError }] = useLoginMutation();


  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem('accessToken', data.accessToken);
    } else if (isError && error) {
      alert('로그인 에러!');
    }
  }, [isSuccess, isError, data, error]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        login({ accountId: values.accountId, accountPw: values.accountPw });
      }}
    >
      {formik => (
        <form className="account-form" onSubmit={e => formik.handleSubmit(e)}>
          <AccounField type="text" id="accountId" label="ID" placeholder="Enter your ID" />
          <AccounField type="password" id="accountPw" label="Password" placeholder="Enter your Password" />
          <Button type="submit">로그인</Button>
          <Link to="/account/signup">회원가입</Link>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
