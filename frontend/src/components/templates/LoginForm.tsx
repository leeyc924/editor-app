import React, { useEffect } from 'react';
import { Field, Formik, useFormik } from 'formik';

import { IAccountState } from '../../models/templates';

import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { useLoginMutation } from '../../modules/accountApi';

const LoginForm = () => {
  const [login, { isLoading }] = useLoginMutation();

  const initialValues: IAccountState = { accountEmail: '', accountPw: '' };

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
