import React from 'react';
import { MainLayout } from '../modules/styled';
import HeaderContainer from '../containers/common/HeaderContainer';
import TicketMainContainer from '../containers/ticket/TicketMainContainer';

const TicketPage = () => {
  return (
    <>
      <HeaderContainer />
      <MainLayout>
        <TicketMainContainer />
      </MainLayout>
    </>
  )
};

// 그런데, 다 페이지로 제작되어있으면 state 로 보여지게 하지말고 Link로 이동해야하는걸까?


export default TicketPage;