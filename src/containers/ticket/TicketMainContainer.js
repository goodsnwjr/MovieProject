import React, {useState} from 'react';
import TicketHeader from '../../components/ticket/TicketHeader';
import TicketFooter from '../../components/ticket/TicketFooter';

import MovieSelectorContainer from './MovieSelectorContainer';
import SeatSelectorContainer from './SeatSelectorContainer';

const TicketMainContainer = () => {
  const [ticketPageStatus, setTicketPageStatus] = useState('movieSelector');
  const peopleType = ['adult', 'youth'];
  const [preference, setPreference] = useState(false);
  const peoType ={};
  return (
      <>
        <TicketHeader />
        {
          ticketPageStatus === 'movieSelector'
          ? 
          <MovieSelectorContainer 
            ticketPageStatus={ticketPageStatus} 
            setTicketPageStatus={setTicketPageStatus} 
            setPreference={setPreference} 
          />
          :
          <SeatSelectorContainer 
            peopleType={peopleType} 
            preference={preference} 
            peoType={peoType}
            ticketPageStatus={ticketPageStatus} 
            setTicketPageStatus={setTicketPageStatus} 
          />
        }
        <TicketFooter ticketPageStatus={ticketPageStatus} setTicketPageStatus={setTicketPageStatus} />
      </>
  )
};



export default TicketMainContainer;