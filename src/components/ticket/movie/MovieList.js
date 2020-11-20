import React from 'react';

//modulse
import {Row, Col} from 'antd';

const MovieList = (props) => {
  const {movie, chooseMovie, setDecide} = props;
  let movieList = movie && movie.boxOfficeResult.dailyBoxOfficeList;
  return (
    <Row>
      {
        movie && movieList.map((ele, idx) => {
          return(
            <Row key={'movie-list-'+idx}>
              <Col>{ele.rankOldAndNew}</Col>
              <Col>{ele.movieNm}</Col>
            </Row>
          )
        }) 
      }
    </Row>
  ) 
};



export default MovieList;