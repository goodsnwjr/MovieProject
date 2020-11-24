import React, { useEffect, useState } from 'react';

//modules
import { movieList, theaterList } from 'modules/movieList.js';
import { Row } from 'antd';

//component
import TicketCommonLayout from '../../components/ticket/TicketCommonLayout';
import MovieList from '../../components/ticket/movie/MovieList';
import TheaterList from '../../components/ticket/movie/TheaterList';
import DateList from '../../components/ticket/movie/DateList';
import TimeList from '../../components/ticket/movie/TimeList';

const MovieSelectorContainer = () => {
	const [movie, setMovie] = useState(null);
	const [theater, setTheater] = useState(null);
	const [date, setsetDate] = useState(new Date());

	const [loading, setLoading] = useState(null);
	const [error, setError] = useState(null);

	const [decide, setDecide] = useState({
		movie: '',
		theater: '',
		date: '',
		time: '',
	});

	let MovieAPI = movieList;
	let TheaterAPI = theaterList;

	console.log(MovieAPI);
	const day = date.getDay().toString().length === 1 ? '0' + date.getDay() : date.getDay();
	const today = date.getFullYear().toString() + date.getMonth().toString() + day;

	const chooseMovie = (e) => {
		setDecide({
			...decide,
			[e.target.name]: [e.target.value],
		});

		console.log(decide);
	};
	const chooseTheater = (e) => {
		// e.target.value
	};
	const chooseDate = (e) => {
		// e.target.value
	};
	const chooseTime = (e) => {
		// e.target.value
	};

	//전송도 여기서!!

	return (
		<Row justify="center" style={{ minHeight: '500px' }}>
			<TicketCommonLayout title="영화" width="30%">
				<MovieList
					MovieAPI={MovieAPI}
					movie={movie}
					setMovie={setMovie}
					today={today}
					setsetDate={setsetDate}
					chooseMovie={chooseMovie}
					setDecide={setDecide}
					setLoading={setLoading}
					setError={setError}
				/>
			</TicketCommonLayout>
			<TicketCommonLayout title="극장" width="30%">
				<TheaterList
					TheaterAPI={TheaterAPI}
					theater={theater}
					chooseTheater={chooseTheater}
					setTheater={setTheater}
					today={today}
					setsetDate={setsetDate}
					setDecide={setDecide}
					setLoading={setLoading}
					setError={setError}
				/>
			</TicketCommonLayout>
			<TicketCommonLayout title="날짜" width="10%">
				<DateList date={date} chooseDate={chooseDate} />
			</TicketCommonLayout>
			<TicketCommonLayout title="시간" width="30%">
				<TimeList movie={movie} chooseTime={chooseTime} />
			</TicketCommonLayout>
		</Row>
	);
};

export default MovieSelectorContainer;
