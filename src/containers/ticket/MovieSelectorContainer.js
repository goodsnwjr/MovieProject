import React, {useEffect, useState} from 'react';

//modules 
import axios from 'axios';
import {Row} from 'antd';

//component
import TicketCommonLayout from '../../components/ticket/TicketCommonLayout';
import MovieList from '../../components/ticket/movie/MovieList';
import TheaterList from '../../components/ticket/movie/TheaterList';
import DateList from '../../components/ticket/movie/MovieList';
import TimeList from '../../components/ticket/movie/MovieList';


const MovieSelectorContainer = () => {
  const [movie, setMovie] = useState(null);
  const [theater, setTheater] = useState(null);
  const [loading, serLoading] = useState(null);
  const [error, setError] = useState(null);
  const [date, setsetDate] = useState(new Date());
  const [decide, setDecide] = useState({
    movie: '',
    theater: '',
    date: '',
    time: '',
  });

  useEffect(()=> {
    let MovieAPI ='http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e'; 
    let TheaterAPI ='http://www.kobis.or.kr/kobisopenapi/webservice/rest/code/searchCodeList.json?key=430156241533f1d058c603178cc3ca0e&comCode=0105000000'; 
    let day = date.getDay().toString().length === 1 ? '0' + date.getDay() : date.getDay();
    let today = date.getFullYear().toString()+date.getMonth().toString()+day;
    const fetchMovie = async () => {
      try {
        setError(null);
        serLoading(true);
        const response = await axios.get(`${MovieAPI}&targetDt=${today}`);
        const response2 = await axios.get(`${TheaterAPI}`);
        setMovie(response.data);
        setTheater(response2.data);
      } catch (e) {
        setError(e);
      } 
      serLoading(false);
    }
    fetchMovie();
  }, []);

  const chooseMovie = (e) => {
  }
  const chooseTheater = (e) => {
    // e.target.value
  }
  const chooseDate = (e) => {
    // e.target.value
  }
  const chooseTime = (e) => {
    // e.target.value
  }

  return (
    <Row justify="center" style={{minHeight: '500px'}}>
      <TicketCommonLayout title="영화" width="30%">
        <MovieList movie={movie} chooseMovie={chooseMovie} setDecide={setDecide}/>
      </TicketCommonLayout>
      <TicketCommonLayout title="극장" width="30%" >
        <TheaterList theater={theater} chooseTheater={chooseTheater}/>
      </TicketCommonLayout>
      <TicketCommonLayout title="날짜" width="10%">
        <DateList movie={movie} chooseDate={chooseDate}/>
      </TicketCommonLayout>
      <TicketCommonLayout title="시간" width="30%">
        <TimeList movie={movie} chooseTime={chooseTime}/>
      </TicketCommonLayout>
    </Row>
  )
};

export default MovieSelectorContainer;

