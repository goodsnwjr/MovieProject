import React, { useState } from 'react';
import TicketCommonLayout from '../../components/ticket/TicketCommonLayout';
import SeatList from '../../components/ticket/seat/SeatList';
import SelectSeet from '../../components/ticket/seat/SelectSeet';

const SeatSelectorContainer = (props) => {
  const { peoType, preference, peopleType, ticketPageStatus, setTicketPageStatus } = props;

  return (
    <>
      <TicketCommonLayout title="인원 / 좌석" retry >
        <SelectSeet peoType={peoType} preference={preference} peopleType={peopleType} />
      </TicketCommonLayout>
      <SeatList ticketPageStatus={ticketPageStatus} setTicketPageStatus={setTicketPageStatus} />
    </>
  )
};



export default SeatSelectorContainer;