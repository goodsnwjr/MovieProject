import React, { useEffect, useState } from 'react';

//modulse
import { Col, Radio } from 'antd';

const MovieList = (props) => {
	const { MovieAPI, chooseMovie } = props;
	let movieList = MovieAPI && MovieAPI.dailyBoxOfficeList;

	return (
		<Radio.Group defaultValue="a" size="large" name="movie">
			{MovieAPI &&
				movieList.map((ele, idx) => {
					return (
						<Radio.Button value={ele.movieNm} onClick={(e) => chooseMovie(e)} key={`movie-list-${idx}`}>
							<Col>{ele.age}</Col>
							<Col>{ele.movieNm}</Col>
						</Radio.Button>
					);
				})}
		</Radio.Group>
	);
};

export default MovieList;
