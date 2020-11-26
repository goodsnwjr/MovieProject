import React from 'react';

//modulse
import { Col, Radio } from 'antd';

const MovieList = ({ MovieAPI, chooseMovie }) => {
  let movieList = MovieAPI && MovieAPI.dailyBoxOfficeList;

  return (
    <Radio.Group defaultValue='a' size='large' name='movie'>
      {MovieAPI &&
        movieList.map((movie, idx) => {
          return (
            <Radio.Button value={movie.movieNm} onClick={(e) => chooseMovie(e)} key={`movie-list-${idx}`}>
              <Col>{movie.age}</Col>
              <Col>{movie.movieNm}</Col>
            </Radio.Button>
          );
        })}
    </Radio.Group>
  );
};

export default MovieList;
