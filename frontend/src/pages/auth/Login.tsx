import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";

import * as loginType from "./login.model";

import Input from "../../component/Input";

const Login = () => {
  const formik = useFormik<loginType.IAccountState>({
    initialValues: {
      accountEmail:'',
      accountPw:'',
    },
    onSubmit: () =>{console.log('submit')},
  });
  return (
    <Container>
      <LoginBox>
        <Header>
          <span>
            Welcome To Editor !!
          </span>
        </Header>
        <LoginForm onSubmit={formik.handleSubmit}>
          <InputArea>
            <label htmlFor="accountEmail">
              Email
            </label>
            <Input
              placeholder="Enter your email"
              id="accountEmail"
              name="accountEmail"
              type="text"
              value={formik.values.accountEmail}
              onChange={formik.handleChange}
              className={
                formik.errors.accountEmail && formik.touched.accountEmail
                  ? "text-input error"
                  : "text-input"
              }
            />
            {formik.errors.accountEmail && formik.touched.accountEmail && (
             <div className="input-feedback">{formik.errors.accountEmail}</div>
            )}
          </InputArea>
          <InputArea>
            <label htmlFor="accountPw">
              Password
            </label>
            <Input
              placeholder="Enter your password"
              id="accountPw"
              name="accountPw"
              type="password"
              onChange={formik.handleChange}
              className={
                formik.errors.accountEmail && formik.touched.accountEmail
                  ? "text-input error"
                  : "text-input"
              }
            />
            {formik.errors.accountPw && formik.touched.accountPw && (
             <div className="input-feedback">{formik.errors.accountPw}</div>
            )}
          </InputArea>
          <button type="submit" disabled={formik.isSubmitting}>
            Submit
         </button>
        </LoginForm>
        <Footer>
          <span>계정 저장</span>
        </Footer>
      </LoginBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  max-width: 650px;
  height: 100%;
  margin: 0 auto;
  padding: 100px 50px;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background.white};
  border-radius: 50px;
  width: 100%;
  height: 100%;
  padding: 50px 70px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  color: ${({ theme }) => theme.gray333};
  font-size: 30px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
`;

const InputArea = styled.div`

`;

const Footer = styled.div`
  height: 50px;
`;

export default React.memo(Login);