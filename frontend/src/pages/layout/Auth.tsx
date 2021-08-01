import React from 'react';
import styled from 'styled-components';

interface IAuthProps {
  children: React.ReactNode,
}

const Auth = (props: IAuthProps) => {
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