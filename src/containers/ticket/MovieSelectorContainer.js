import React, {useState} from 'react';
import MovieList from '../../components/ticket/movie/MovieList';

const MovieSelectorContainer = () => {
  const [ticketPageStatus, setTicketPageStatus] = useState();
  return (
      <>
        <MovieList ticketPageStatus={ticketPageStatus} setTicketPageStatus={setTicketPageStatus} />
      </>
  )
};



export default MovieSelectorContainer;

