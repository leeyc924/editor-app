import React from 'react';
import classNames from 'classnames';

interface InputProps {
  value: string | number | readonly string[];
  placeholder: string | undefined;
  className: string | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ value, placeholder, className, onChange }: InputProps) => {
  return (
    <input
      className={classNames('common-input', className)}
      value={value}
      onChange={e => onChange(e)}
      placeholder={placeholder}
    />
  );
};

export default React.memo(Input);
