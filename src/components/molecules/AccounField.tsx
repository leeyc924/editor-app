import React from 'react';
import { Field } from 'formik';

interface AccounFieldProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
}

const AccounField = ({ label, id, type, placeholder }: AccounFieldProps) => {
  return (
    <div className="account-field">
      <label htmlFor={id}>{label}</label>
      <Field className="common-input" placeholder={placeholder} id={id} name={id} type={type} autoComplete={type === 'password' ? "on" : "off"} />
    </div>
  );
};

export default React.memo(AccounField);
