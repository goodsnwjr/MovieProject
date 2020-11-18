import React from 'react';
import TicketFooter from './TicketFooter';

const TheaterList = ({ticketPageStatus, setTicketPageStatus}) => {
  return (
    <>
        <div>극장리스트</div>
        <div>극장리스트</div>
        <div>극장리스트</div>
        <div>극장리스트</div>
        <div>극장리스트</div>
        <div>극장리스트</div>
        <div>극장리스트</div>
        <div>극장리스트</div>
        <div>극장리스트</div>
        <TicketFooter ticketPageStatus={ticketPageStatus} setTicketPageStatus={setTicketPageStatus} />
    </>
  ) 
};



export default TheaterList;