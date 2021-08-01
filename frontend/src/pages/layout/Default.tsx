import React from 'react';
import styled from 'styled-components';

import * as defaultTypes from './default.models';

const Default = (props: defaultTypes.IDefaultProps) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

const Container = styled.div``;

export default React.memo(Default);