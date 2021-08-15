import React from 'react';
import classNames from 'classnames';

import { IButtonProps } from '../../models/atoms';

const Button = (props: IButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props} className={classNames("common-button", props.size, props.color, props.outline, props.className)} />
};

Button.defaultProps = {
  color: 'blue',
  size: 'medium'
};

export default React.memo(Button);