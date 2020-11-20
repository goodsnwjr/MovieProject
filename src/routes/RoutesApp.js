import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainPage from 'pages/MainPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import TicketPage from 'pages/TicketMainPage';

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
          <Redirect path="*" to="/" />
        </Switch>
      </BrowserRouter>
    </>
  )
};