import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';

import { IAccountState } from '../../models/templates';

import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { useLoginMutation } from 'modules/api';

const SignupForm = () => {

const [value, setValue] = useState('');
  return (
    <form className="auth-form" onSubmit={e => {}}>
      <div>
        <label htmlFor="accountEmail">Email</label>
        <Input
          placeholder="Enter your email"
          id="accountEmail"
          name="accountEmail"
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="accountPw">Password</label>
        <Input
          placeholder="Enter your password"
          id="accountPw"
          name="accountPw"
          type="password"
        />
      </div>
      <Button type="submit" >
        로그인
      </Button>
    </form>
  );
};

export default React.memo(SignupForm);
