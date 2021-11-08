import React from 'react';

import LoginForm from 'components/templates/LoginForm';
import { Route, Routes } from 'react-router';
import SignupForm from 'components/templates/SignupForm';

const Account = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </div>
  );
};

export default Account;
