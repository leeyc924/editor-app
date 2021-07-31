import { IAccount } from 'models/auth/login';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';


const Login = () => {
  const [accountInfo, setAccountInfo] = useState<IAccount>({
    accountId: '',
    accountPw: '',
    accountEmail: '',
  });

  const changeInput = useCallback((key: string, value: string) => {
    setAccountInfo(accountInfo => ({ ...accountInfo, [key]: value }));
  }, []);

  return (
    <Container>
      이메일
      <input type="text" value={accountInfo.accountEmail} onChange={e => changeInput('accountEmail', e.target.value)} />
      패스워드
      <input type="text" value={accountInfo.accountPw} onChange={e => changeInput('accountPw', e.target.value)} />
    </Container>
  )
}

const Container = styled.div``;

export default Login;