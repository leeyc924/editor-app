import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

import { IButtonProps, IButtonSize } from './atoms.model';

const Button = (props: IButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <StyledButton {...props} />
};

const buttonSizes: IButtonSize = {
  large: {
    height: '3rem',
    fontSize: '1.25rem'
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem'
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem'
  }
};

const buttonStyles = css<IButtonProps>`
  /* 공통 스타일 */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 18px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  font-family: 'Roboto', 'Noto Sans KR', sans-serif !important;

  /* 색상 */
  ${({ theme, color, outline }) => {
    const buttonColor = theme[color];
      return css`
        background: ${buttonColor};
        &:hover {
          background: ${lighten(0.1, buttonColor)};
        }
        &:active {
          background: ${darken(0.1, buttonColor)};
        }
        ${outline &&
          css<IButtonProps>`
            color: ${buttonColor};
            background: none;
            border: 1px solid ${buttonColor};
            &:hover {
              background: ${buttonColor};
              color: white;
            }
            &:active {
              background: ${darken(0.1, buttonColor)};
              color: white;
            }
          `}
      `;
  }}
  /* 크기 */
  ${({ size }) => css<IButtonProps>`
    height: ${buttonSizes[size].height};
    font-size: ${buttonSizes[size].fontSize};
  `}
`;

const StyledButton = styled.button`
  ${buttonStyles}
`;

Button.defaultProps = {
  color: 'blue',
  size: 'medium'
};

export default Button;