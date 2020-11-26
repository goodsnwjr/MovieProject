import React, { useState } from 'react';

//modulse
import { Col, Radio } from 'antd';
import styled from 'styled-components';
import './MovieList.css';

const MovieList = ({ MovieAPI, chooseMovie }) => {
  const movieList = MovieAPI && MovieAPI.dailyBoxOfficeList;

  const filmRatingColor = (age) => {
    if (age === '12') {
      return { bg: 'green', text: '#fff' };
    } else if (age === '15') {
      return { bg: 'yellow', text: '#000' };
    } else if (age === '청불') {
      return { bg: 'red', text: '#fff' };
    } else {
      return { bg: 'blue', text: '#fff' };
    }
  };

  const ButtonWrapperStyle = styled(Radio.Button)`
    display: block;
    border: none;
    margin-bottom: 10px;
    &:first-child {
      border-left: none;
    }
    &:not(:first-child)::before {
      content: none;
    }
    span {
      span {
        vertical-align: middle;
      }
    }
  `;

  const StyledCol = styled.span((props) => {
    return `
      width: 20px;
      height: 20px;
      text-align: center;
      font-size: 10px;
      line-height: 20px;
      margin-right: 5px;
      border-radius: 50%;
      background: ${props ? props.filmRatingColor.bg : 'transparent'};
      color: ${props ? props.filmRatingColor.text : '#000'};
      display: inline-block;
    `;
  });

  return (
    <>
      {MovieAPI &&
        movieList.map((movie, idx) => {
          return (
            <ButtonWrapperStyle value={movie.movieNm} onClick={(e) => chooseMovie(e)} key={`movie-list-${idx}`}>
              <StyledCol filmRatingColor={filmRatingColor(movie.age)} textcolor={'yellow'}>
                {movie.age}
              </StyledCol>
              <span>{movie.movieNm}</span>
            </ButtonWrapperStyle>
          );
        })}
    </>
  );
};

export default MovieList;
