import React from "react";
import { useFormik } from "formik";

import { IAccountState } from "./auth.model";

import Input from "../../component/atoms/Input";
import Button from "../../component/atoms/Button";

const LoginBox = () => {
  const formik = useFormik<IAccountState>({
    initialValues: {
      accountEmail:'',
      accountPw:'',
    },
    onSubmit: () =>{console.log('submit')},
  });

  return (
    <>
      <form className="auth-form" onSubmit={formik.handleSubmit}>
        <div>
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
      </div>
      <div>
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
            formik.errors.accountPw && formik.touched.accountPw
              ? "text-input error"
              : "text-input"
          }
        />
      {formik.errors.accountPw && formik.touched.accountPw && (
        <div className="input-feedback">{formik.errors.accountPw}</div>
      )}
      </div>
      <Button type="submit" disabled={formik.isSubmitting}>
        Submit
      </Button>
      </form>
      <div className="footer">
        <span>계정 저장</span>
        <span>회원 가입</span>
      </div>
    </>
  );
};

export default React.memo(LoginBox);