import React, { useEffect, useRef } from 'react';
import { Field, Formik } from 'formik';
import { useNavigate } from 'react-router';

import { ILoginState } from 'models/account';

import Button from 'components/atoms/Button';

import { useLoginMutation } from 'modules/accountApi';

const initialValues: ILoginState = {
  accountId: localStorage.getItem('accountId') || '',
  accountPw: '',
  isSaveAccountId: localStorage.getItem('saveAccountIdYn') === 'Y' ? true : false,
};

const LoginForm = () => {
  const [login, { data, error, isSuccess, isError }] = useLoginMutation();
  const saveAccountIdYn = useRef('N');
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem('saveAccountIdYn', saveAccountIdYn.current);
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('saveAccountId', data.accountInfo.accountId);
      navigate('/main');
    } else if (isError && error) {
      const err: any = error;
      if (err.data.name === 'IdNotExistError') {
        alert('계정이 존재하지 않습니다.');
      } else if (err.data.name === 'PasswordIncorrectError') {
        alert('비밀번호가 틀렸습니다.');
      } else if (err.data.name === 'IdNotUseError') {
        alert('아이디를 사용하고있지 않습니다.');
      } else if (err.data.name === 'IdDeleteError') {
        alert('계정이 존재하지 않습니다');
      }
    }
  }, [navigate, isSuccess, isError, data, error]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        saveAccountIdYn.current = values.isSaveAccountId ? 'Y' : 'N';
        login({ accountId: values.accountId, accountPw: values.accountPw });
      }}
    >
      {formik => (
        <form className="account-form" onSubmit={e => formik.handleSubmit(e)}>
          <Field className="common-input first" type="text" id="accountId" name="accountId" placeholder="아이디" autoComplete="off" />
          <Field className="common-input last" type="password" id="accountPw" name="accountPw" placeholder="비밀번호" autoComplete="off" />
          <Button type="submit">로그인</Button>
          <span className="find">
            <span>
              <Field className="save-id-checkbox" type="checkbox" id="isSaveAccountId" name="isSaveAccountId" />
              <label htmlFor="isSaveAccountId">계정저장</label>
            </span>
            <span onClick={() => navigate('/account/signup')}>회원가입</span>
          </span>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
