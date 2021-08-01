import React, { useCallback, useState } from "react";
import styled from "styled-components";

import { IAccountState } from "models/pages/auth/login";
import Input from "../../component/Input";

const Login = () => {
  const [accountInfo, setAccountInfo] = useState<IAccountState>({
    accountId: "",
    accountPw: "",
    accountEmail: "",
  });

  const changeInput = useCallback((key: string, value: string) => {
    setAccountInfo((accountInfo) => ({ ...accountInfo, [key]: value }));
  }, []);

  return (
    <Container>
      <LoginBox>
        <label>
          이메일
        </label>
        <Input
          type="text"
          value={accountInfo.accountEmail}
          onChange={(e) => changeInput("accountEmail", e.target.value)}
        />
        패스워드
        <Input
          type="password"
          onChange={(e) => changeInput("accountPw", e.target.value)}
        />
        <button>
          로그인
        </button>
      </LoginBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  max-width: 750px;
  height: 100%;
  margin: 0 auto;
  padding: 100px 50px;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background.white};
  border-radius: 50px;
  width: 100%;
  height: 100%;
  padding: 50px 100px;
`;

export default React.memo(Login);