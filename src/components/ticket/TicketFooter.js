import React from 'react';
import { Button } from 'antd';

const TicketFooter = ({ ticketPageStatus, setTicketPageStatus}) => {
    const seatSelectorButtonClick = (e) => {
        setTicketPageStatus("seatSelector")
    }
  return (
    <>
        <Button onClick={seatSelectorButtonClick}>좌석선택</Button>
    </>
  ) 
};



export default TicketFooter;