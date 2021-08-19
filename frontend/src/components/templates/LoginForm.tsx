import React, { useEffect } from 'react';
import { useFormik } from 'formik';

import { IAccountState } from '../../models/templates';

import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { api } from 'modules/rtkTestApi';
import { useDispatch } from 'react-redux';

const LoginBox = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(api.endpoints.getPost.initiate({}));
  // }, [dispatch]);

  const formik = useFormik<IAccountState>({
    initialValues: {
      accountEmail: '',
      accountPw: '',
    },
    onSubmit: (value, event) => {
    }
  });

  return (
    <form className="auth-form" onSubmit={e => {formik.handleSubmit(e)}}>
      <div>
        <label htmlFor="accountEmail">Email</label>
        <Input
          placeholder="Enter your email"
          id="accountEmail"
          name="accountEmail"
          type="text"
          value={formik.values.accountEmail}
          onChange={formik.handleChange}
          className={
            formik.errors.accountEmail && formik.touched.accountEmail
              ? 'text-input error'
              : 'text-input'
          }
        />
        {formik.errors.accountEmail && formik.touched.accountEmail && (
          <div className="input-feedback">{formik.errors.accountEmail}</div>
        )}
      </div>
      <div>
        <label htmlFor="accountPw">Password</label>
        <Input
          placeholder="Enter your password"
          id="accountPw"
          name="accountPw"
          type="password"
          onChange={formik.handleChange}
          className={
            formik.errors.accountPw && formik.touched.accountPw
              ? 'text-input error'
              : 'text-input'
          }
        />
        {formik.errors.accountPw && formik.touched.accountPw && (
          <div className="input-feedback">{formik.errors.accountPw}</div>
        )}
      </div>
      <Button type="submit" disabled={formik.isSubmitting}>
        로그인
      </Button>
    </form>
  );
};

export default React.memo(LoginBox);
