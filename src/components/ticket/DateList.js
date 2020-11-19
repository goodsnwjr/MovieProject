import React from 'react';
import TicketFooter from './TicketFooter';

const DateList = ({ticketPageStatus, setTicketPageStatus}) => {
  return (
    <>
        <div>날짜리스트</div>
        <div>날짜리스트</div>
        <div>날짜리스트</div>
        <div>날짜리스트</div>
        <div>날짜리스트</div>
        <div>날짜리스트</div>
        <div>날짜리스트</div>
        <div>날짜리스트</div>
        <div>날짜리스트</div>
        <TicketFooter ticketPageStatus={ticketPageStatus} setTicketPageStatus={setTicketPageStatus} />
    </>
  ) 
};



export default DateList;