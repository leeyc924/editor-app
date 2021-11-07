import Button from 'components/atoms/Button';
import AccountInputLabel from 'components/molecules/AccounField';
import { Formik } from 'formik';
import { IAccountState } from 'models/account';
import React, { useEffect } from 'react';
import AccounField from '../molecules/AccounField';

const Login = () => {
  const initialValues: IAccountState = { userId: '', userPw: '' };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        console.log('aa');
      }}
    >
      {formik => (
        <form className="account-form" onSubmit={e => formik.handleSubmit(e)}>
          <AccounField type="text" id="userId" label="ID" placeholder="Enter your ID" />
          <AccounField type="password" id="userPw" label="Password" placeholder="Enter your Password" />
          <Button type="submit">로그인</Button>
        </form>
      )}
    </Formik>
  );
};

export default React.memo(Login);
