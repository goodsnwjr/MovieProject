import React, {useState} from 'react';
import SeatList from '../../components/ticket/SeatList';
import SelectSeet from '../../components/ticket/SelectSeet';
import BookingSubNai from '../../components/ticket/BookingSubNai';

const SeatContainer = ({ticketPageStatus, setTicketPageStatus}) => {
  const peopleType = ['adult', 'youth'];
  const [preference, setreference] = useState(false);
  const [peoType, setpeoType] = useState(Object());

  return (
      <>
        <BookingSubNai />
        <SelectSeet peoType={peoType} preference={preference} peopleType={peopleType} />
        <SeatList ticketPageStatus={ticketPageStatus} setTicketPageStatus={setTicketPageStatus}/>
      </>
  )
};



export default SeatContainer;

