import React from 'react';

//modulse
import { Col, Radio } from 'antd';
import styled from 'styled-components';

export const FilmRating = ({ movie, bgcolor, textcolor }) => {
  return <Col style={{ background: bgcolor, color: textcolor }}>{movie}</Col>;
};

const MovieList = ({ MovieAPI, chooseMovie }) => {
  let movieList = MovieAPI && MovieAPI.dailyBoxOfficeList;

  const MovieListStyle = styled(Radio.Group)`
    .ant-col {
      display: inline-block;
      &:first-child {
        display: inline-block;
        margin-right: 5px;
        border-radius: 50%;
      }
    }
    .ant-radio-button-wrapper {
      display: block;
      border: none;
      font-size: 15px;
    }
  `;

  return (
    <MovieListStyle defaultValue='a' size='large' name='movie'>
      {MovieAPI &&
        movieList.map((movie, idx) => {
          let bgcolor = '';
          let textcolor = '';
          switch (movie.age) {
            case '전체':
              bgcolor = 'blue';
              textcolor = '#fff';
              break;
            case '12':
              bgcolor = 'green';
              textcolor = '#fff';
              break;
            case '15':
              bgcolor = 'yellow';
              textcolor = '#000';
              break;
            case '청불':
              bgcolor = 'red';
              textcolor = '#fff';
              break;
            default:
              bgcolor = 'blue';
              textcolor = '#fff';
          }

          return (
            <Radio.Button value={movie.movieNm} onClick={(e) => chooseMovie(e)} key={`movie-list-${idx}`}>
              <FilmRating movie={movie.age} bgcolor={bgcolor} textcolor={textcolor} />
              <Col>{movie.movieNm}</Col>
            </Radio.Button>
          );
        })}
    </MovieListStyle>
  );
};

export default MovieList;
