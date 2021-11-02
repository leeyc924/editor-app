import React from 'react';
import className from 'classnames';

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input {...props} className={className("common-input", props.className)} />
  )
}

export default React.memo(Input);
