import React from 'react';
import MovieList from '../../components/ticket/MovieList.js';

const MovieSelectorContainer = ({ticketPageStatus, setTicketPageStatus}) => {
  return (
      <>
        <MovieList ticketPageStatus={ticketPageStatus} setTicketPageStatus={setTicketPageStatus} />
      </>
  )
};



export default MovieSelectorContainer;

