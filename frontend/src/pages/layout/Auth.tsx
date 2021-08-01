import React from 'react';
import styled from 'styled-components';

import * as authTypes from './auth.model';

const Auth = (props: authTypes.IAuthProps) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.background.gray};
`;

export default React.memo(Auth);