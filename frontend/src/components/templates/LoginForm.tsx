import React, { useEffect } from 'react';
import { Field, Formik } from 'formik';

import { IAccountState } from '../../models/templates';

import Button from '../atoms/Button';
import { useLoginMutation } from 'modules/accountApi';

const initialValues: IAccountState = { accountEmail: '', accountPw: '' };
const LoginForm = () => {
  const [login, { data, error, isSuccess, isError }] = useLoginMutation();

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem('accessToken', data.accessToken);
    } else if (isError && error) {
      alert('로그인 에러!');
    }
  }, [isSuccess, isError, data, error])


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        login({ accountEmail: values.accountEmail, accountPw: values.accountPw });
      }}
    >
      {formik => (
        <form className="auth-form" onSubmit={e => formik.handleSubmit(e)}>
          <div>
            <label htmlFor="accountEmail">Email</label>
            <Field
              className="common-input"
              placeholder="Enter your email"
              id="accountEmail"
              name="accountEmail"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="accountPw">Password</label>
            <Field
              className="common-input"
              placeholder="Enter your password"
              id="accountPw"
              name="accountPw"
              type="password"
            />
          </div>
          <Button type="submit">로그인</Button>
        </form>
      )}
    </Formik>
  );
};

export default React.memo(LoginForm);
