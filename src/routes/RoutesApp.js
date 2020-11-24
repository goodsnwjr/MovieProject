import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainPage from 'pages/MainPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import TicketPage from 'pages/TicketMainPage';

// routes 폴더에 constants.js 이런 거 하나 만들어서 거기에 라우터 상수들 모아두는게 좋을듯 하네요
// 나중에 라우터들 많아지면 이 페이지 너무 복잡해질 듯
export const ROUTE_HOME = '/';
export const ROUTE_LOGIN = '/login';
export const ROUTE_REGISTER = '/register';
export const ROUTE_TICKET = '/ticket';

export const AppRouter = () => {
  return (
    <>
      <Helmet>
        <title>MOVIE</title>
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route component={TicketPage} path={ROUTE_TICKET} exact />
          <Route component={LoginPage} path={ROUTE_LOGIN} exact />
          <Route component={RegisterPage} path={ROUTE_REGISTER} exact />
          <Route component={MainPage} path={ROUTE_HOME} />
          <Redirect path='*' to='/' />
        </Switch>
      </BrowserRouter>
    </>
  );
};
