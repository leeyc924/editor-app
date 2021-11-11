import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Field, Formik } from 'formik';

import { ISignupState } from 'models/account';

import Button from 'components/atoms/Button';

import { useSignupMutation } from 'modules/accountApi';

const SignupForm = () => {
  const initialValues: ISignupState = { accountId: '', accountPw: '', accountNm: '', isSaveAccountId: true };
  const [signup, { data, error, isSuccess, isError }] = useSignupMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem('saveAccountIdYn', 'Y');
      localStorage.setItem('accessToken', data.accessToken);
      navigate('/main');
    } else if (isError && error) {
      alert('회원가입 에러!');
    }
  }, [isSuccess, isError, data, error, navigate]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        signup({ accountId: values.accountId, accountPw: values.accountPw, accountNm: values.accountNm });
      }}
    >
      {formik => (
        <form className="account-form" onSubmit={e => formik.handleSubmit(e)}>
          <Field className="common-input first" type="text" id="accountId" name="accountId" placeholder="아이디" autoComplete="off" />
          <Field className="common-input" type="password" id="accountPw" name="accountPw" placeholder="비밀번호" autoComplete="off" />
          <Field className="common-input last" type="text" id="accountNm" name="accountNm" placeholder="이름" />
          <Button type="submit">회원가입</Button>
          <span className="find">
            <span onClick={() => navigate('/account/login')}>취소</span>
          </span>
        </form>
      )}
    </Formik>
  );
};

export default SignupForm;
