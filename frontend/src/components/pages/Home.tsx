import React from "react";
import { useDispatch } from "react-redux";
import { push } from 'connected-react-router';

import Button from "components/atoms/Button";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(push('/account'))}>로그인</Button>
  );
};

export default (React.memo(Home));