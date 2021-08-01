import React from 'react';
import styled from 'styled-components';

interface IDefaultProps {
  children: React.ReactNode,
}

const Default = (props: IDefaultProps) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

const Container = styled.div``;

export default React.memo(Default);