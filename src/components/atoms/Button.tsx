import React from 'react';
import classNames from 'classnames';
import { IPalette } from 'models/palette';

interface ButtonProps {
  className?: string | undefined;
  type?: 'button' | 'submit' | 'reset' | undefined;
  children?: React.ReactNode;
  color: IPalette;
  outline?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSubmit?: React.FormEventHandler<HTMLButtonElement>;
}

const Button = ({ className, type, color, outline, children, onClick, onSubmit }: ButtonProps) => {
  return (
    <button type={type} className={classNames('common-button', color, outline, className)} onClick={onClick} onSubmit={onSubmit}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: 'blue100',
};

export default React.memo(Button);
