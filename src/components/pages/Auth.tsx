import React, { useEffect } from "react";
import { connect } from "react-redux";
import { push } from 'connected-react-router';

import LoginForm from "../templates/LoginForm";
import { useLoginMutation } from "modules/accountApi";

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="header">
        <span>
          Welcome To Editor !!
        </span>
      </div>
      <div className="body">
        <LoginForm />
      </div>
      <div className="footer">
        <span>계정 저장</span>
        <span>회원 가입</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash,
});

export default connect(mapStateToProps, { push })(React.memo(Auth));