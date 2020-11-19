import React from 'react';
import MovieList from '../../components/ticket/movie/MovieList';

const MovieSelectorContainer = ({ticketPageStatus, setTicketPageStatus}) => {
  return (
      <>
        <MovieList ticketPageStatus={ticketPageStatus} setTicketPageStatus={setTicketPageStatus} />
      </>
  )
};



export default MovieSelectorContainer;

