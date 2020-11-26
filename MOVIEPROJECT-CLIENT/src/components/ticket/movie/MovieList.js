import React from 'react';

//modulse
import { Col, Radio } from 'antd';
import styled from 'styled-components';

const MovieList = ({ MovieAPI, chooseMovie }) => {
  let movieList = MovieAPI && MovieAPI.dailyBoxOfficeList;

  const MovieListStyle = styled(Radio.Group)((props) => {
    console.log(props);
    return `
    .ant-col {
          display: inline-block;
          &:first-child {
            margin-right: 5px;
            border-radius: 50%;
            background: ${props ? props.bgcolor : 'transparent'};
            color: ${props ? props.textcolor : '#000'};
        }
    `;
  });

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
              <MovieListStyle bgcolor={bgcolor} textcolor={textcolor}>
                {movie.age}
              </MovieListStyle>
              <Col>{movie.movieNm}</Col>
            </Radio.Button>
          );
        })}
    </MovieListStyle>
  );
};

export default MovieList;
