import React from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { withRouter } from 'react-router-dom';

const RegisterForm = () => {
  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    // 하나라도 비어 있다면

    // 비밀번호가 일치하지 않는다면
  };

  return <AuthForm type='register' onChange={onChange} onSubmit={onSubmit} />;
};

export default withRouter(RegisterForm);
