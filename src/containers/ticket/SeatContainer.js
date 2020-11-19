import React from 'react';
import SeatList from '../../components/ticket/seat/SeatList';

const SeatContainer = ({ticketPageStatus, setTicketPageStatus}) => {
  return (
      <>
        <SeatList ticketPageStatus={ticketPageStatus} setTicketPageStatus={setTicketPageStatus}/>
      </>
  )
};



export default SeatContainer;