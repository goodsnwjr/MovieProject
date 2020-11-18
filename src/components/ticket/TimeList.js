
import React from 'react';
import TicketFooter from './TicketFooter';

const TimeList = ({ticketPageStatus, setTicketPageStatus}) => {
  return (
    <>
        <div>시간리스트</div>
        <div>시간리스트</div>
        <div>시간리스트</div>
        <div>시간리스트</div>
        <div>시간리스트</div>
        <div>시간리스트</div>
        <div>시간리스트</div>
        <div>시간리스트</div>
        <div>시간리스트</div>
        <TicketFooter ticketPageStatus={ticketPageStatus} setTicketPageStatus={setTicketPageStatus} />
    </>
  ) 
};



export default TimeList;