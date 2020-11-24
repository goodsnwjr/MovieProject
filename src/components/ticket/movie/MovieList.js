import React, { useEffect, useState } from 'react';

//modulse
import { Row, Col, Radio } from 'antd';
import axios from 'axios';

const MovieList = (props) => {
  const { MovieAPI, movie, setMovie, today, chooseMovie, setDecide, setError, setLoading } = props;

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setError(null);
        setLoading(true);
        setMovie(MovieAPI.dailyBoxOfficeList);
      } catch (e) {
        // setError(e);
      }
      // setLoading(false);
    };
    fetchMovie();
  }, []);

  let movieList = MovieAPI && MovieAPI.dailyBoxOfficeList;

  return (
    <Radio.Group defaultValue="a" size="large">
      {MovieAPI &&
        movieList.map((ele, idx) => {
          return (
            <Radio.Button value={ele.movieNm} onChange={(e) => chooseMovie(e)} key={`movie-list-${idx}`} name="movie">
              <Col>{ele.age}</Col>
              <Col>{ele.movieNm}</Col>
            </Radio.Button>
          );
        })}
    </Radio.Group>
  );
};

export default MovieList;
