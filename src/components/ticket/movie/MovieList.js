import React from 'react';
import TicketFooter from './TicketFooter';

const MovieList = ({ticketPageStatus, setTicketPageStatus}) => {
  return (
    <>
        <div>영화리스트</div>
        <div>영화리스트</div>
        <div>영화리스트</div>
        <div>영화리스트</div>
        <div>영화리스트</div>
        <div>영화리스트</div>
        <div>영화리스트</div>
        <div>영화리스트</div>
        <div>영화리스트</div>
        <TicketFooter ticketPageStatus={ticketPageStatus} setTicketPageStatus={setTicketPageStatus} />
    </>
  ) 
};



export default MovieList;