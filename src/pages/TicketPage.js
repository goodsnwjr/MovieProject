import React, { useState } from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import MovieSelectorContainer from '../containers/ticket/MovieSelectorContainer';
import SeatContainer from '../containers/ticket/SeatContainer';


const TicketPage = () => {
    const [ticketPageStatus, setTicketPageStatus] = useState('movieSelector');
  return (
    <>
      <HeaderContainer />
      {
        ticketPageStatus === 'movieSelector'
        ? 
        <MovieSelectorContainer ticketPageStatus={ticketPageStatus} setTicketPageStatus={setTicketPageStatus} />
        :
        <SeatContainer ticketPageStatus={ticketPageStatus} setTicketPageStatus={setTicketPageStatus} />
      }
    </>
  )
};



export default TicketPage;