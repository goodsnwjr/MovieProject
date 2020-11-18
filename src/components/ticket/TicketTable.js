import React from 'react';
import TicketFooter from './TicketFooter';

const TicketTable = ({ticketPageStatus, setTicketPageStatus}) => {
  return (
    <>
        <div>영화관 테이블모양 틀</div>
        <div>영화관 테이블모양 틀</div>
        <div>영화관 테이블모양 틀</div>
        <div>영화관 테이블모양 틀</div>
        <div>영화관 테이블모양 틀</div>
        <div>영화관 테이블모양 틀</div>
        <div>영화관 테이블모양 틀</div>
        <div>영화관 테이블모양 틀</div>
        <div>영화관 테이블모양 틀</div>
        <TicketFooter ticketPageStatus={ticketPageStatus} setTicketPageStatus={setTicketPageStatus} />
    </>
  ) 
};



export default TicketTable;