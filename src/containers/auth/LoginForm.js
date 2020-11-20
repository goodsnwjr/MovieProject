import React from 'react';
import { withRouter } from 'react-router-dom';
import AuthForm from '../../components/auth/AuthForm';

const LoginForm = () => {
  // 인풋 변경 이벤트 핸들러
  const onChange = e => {
    const { value, name } = e.target;
    console.log("value : " + value);
    console.log("name : " + name);
  };



  // 폼 등록 이벤트 핸들러
  const onSubmit = e => {
    e.preventDefault();

  };


  return (
    <AuthForm
      type="login"
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};



export default withRouter(LoginForm);

