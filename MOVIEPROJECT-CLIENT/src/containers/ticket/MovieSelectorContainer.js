import React, { useEffect, useState } from 'react';

//modules
import { movieList, theaterList } from 'lib/ticket/movieList.js';
import { Row } from 'antd';
import { format } from 'date-fns';

//component
import TicketCommonLayout from '../../components/ticket/TicketCommonLayout';
import MovieList from '../../components/ticket/movie/MovieList';
import TheaterList from '../../components/ticket/movie/TheaterList';
import DateList from '../../components/ticket/movie/DateList';
import TimeList from '../../components/ticket/movie/TimeList';

const MovieSelectorContainer = () => {
  const [decide, setDecide] = useState({});
  const [selectLocal, setSelectLocal] = useState(false);
  const [selectedTheater, setSelectedTheater] = useState(['서울']);

  let MovieAPI = movieList;
  let TheaterAPI = theaterList;

  const chooseMovie = (e) => {
    console.log(e);
    setDecide({
      movie: e.target.value,
    });
  };

  const chooseCity = (e) => {
    setSelectLocal(true);
    setSelectedTheater([e.target.value]);
  };

  const chooseTheater = (e) => {
    setDecide({
      ...decide,
      theater: e.target.value,
    });
  };
  const chooseDate = (value) => {
    let result = format(new Date(value), 'yyyyMMdd');
    setDecide({
      ...decide,
      date: result,
    });
  };
  const chooseTime = (e) => {
    console.log(e);
    setDecide({
      ...decide,
      time: e.target.value,
    });
  };
  useEffect(() => {
    console.log(decide);
  }, [decide]);

  return (
    <Row justify='center' style={{ minHeight: '600px', maxHeight: '600px', overflow: 'hidden' }}>
      <TicketCommonLayout title='영화' width='35%'>
        <MovieList MovieAPI={MovieAPI} chooseMovie={chooseMovie} />
      </TicketCommonLayout>
      <TicketCommonLayout title='극장' width='26.5%'>
        <TheaterList
          TheaterAPI={TheaterAPI}
          selectLocal={selectLocal}
          chooseCity={chooseCity}
          selectedTheater={selectedTheater}
          setSelectedTheater={setSelectedTheater}
          chooseTheater={chooseTheater}
        />
      </TicketCommonLayout>
      <TicketCommonLayout title='날짜' width='10%' style={{ overflow: 'scroll', height: '600px' }}>
        <DateList setDecide={setDecide} chooseDate={chooseDate} />
      </TicketCommonLayout>
      <TicketCommonLayout title='시간' width='26.5%'>
        <TimeList MovieAPI={MovieAPI} decide={decide} chooseTime={chooseTime} />
      </TicketCommonLayout>
    </Row>
  );
};

export default MovieSelectorContainer;
