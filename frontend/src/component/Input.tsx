import React from 'react';
import styled from 'styled-components';

import * as inputTypes from './input.model';

const Input = (props: inputTypes.IInputProps) => {
  return (
    <StyledInput {...props} />
  )
}

const StyledInput = styled.input`
  height: 38px;
  width: 100%;
  background: ${({ theme }) => theme.background.white};
  border: 1px solid ${({ theme }) => theme.blue};
  border-radius: 5px;
  padding: 15px;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.gray333};
  &::placeholder {
    color: ${({ theme }) => theme.grayCCC};
    font-size: 13px;
    font-weight: 500;
  }
  &:hover::placeholder {
    color: ${({ theme }) => theme.gray333};
  }
  &:hover {
    border: 1px solid ${({ theme }) => theme.blue};
  }
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.blue};
  }
`;

export default React.memo(Input);
