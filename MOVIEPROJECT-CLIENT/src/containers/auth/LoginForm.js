import React, { useState, useSelector } from 'react';
import { withRouter } from 'react-router-dom';
import AuthForm from '../../components/auth/AuthForm';

const LoginForm = ({ history }) => {
  const [getName, setName] = useState('');
  const [getPassword, setPassword] = useState('');

  const name = 'test';
  const password = '1234';

  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(name);
    if (name === 'username') {
      setName(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // 폼 등록 이벤트 핸들러
  const onClick = (e) => {
    e.preventDefault();
    console.log(getName);
    console.log(name);
    if (getName === name && getPassword === password) {
      localStorage.setItem('user', getName + '_' + getPassword);
      history.push('/');
    } else {
      alert('없는 정보입니다.');
    }
  };

  return <AuthForm type='login' onChange={onChange} onClick={onClick} />;
};

export default withRouter(LoginForm);
