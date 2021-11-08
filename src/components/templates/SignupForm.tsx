import React, { useEffect } from 'react';
import { Formik } from 'formik';

import { ISignupState } from 'models/account';

import AccounField from '../molecules/AccounField';

import Button from 'components/atoms/Button';
import { useSignupMutation } from 'modules/accountApi';

const SignupForm = () => {
  const initialValues: ISignupState = { accountId: '', accountPw: '', accountNm: '' };
  const [signup, { data, error, isSuccess, isError }] = useSignupMutation();

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
        signup({ accountId: values.accountId, accountPw: values.accountPw, accountNm: values.accountNm });
      }}
    >
      {formik => (
        <form className="account-form" onSubmit={e => formik.handleSubmit(e)}>
          <AccounField type="text" id="accountId" label="ID" placeholder="Enter your ID" />
          <AccounField type="password" id="accountPw" label="Password" placeholder="Enter your Password" />
          <AccounField type="text" id="accountNm" label="Name" placeholder="Enter your Name" />
          <Button type="submit">회원가입</Button>
        </form>
      )}
    </Formik>
  );
};

export default SignupForm;
