import React, { useEffect, useState } from 'react';

//modules
import { movieList, theaterList } from 'modules/movieList.js';
import { Row } from 'antd';
import { format } from 'date-fns';

//component
import TicketCommonLayout from '../../components/ticket/TicketCommonLayout';
import MovieList from '../../components/ticket/movie/MovieList';
import TheaterList from '../../components/ticket/movie/TheaterList';
import DateList from '../../components/ticket/movie/DateList';
import TimeList from '../../components/ticket/movie/TimeList';

const MovieSelectorContainer = () => {
	const [date, setsetDate] = useState(new Date());
	const [loading, setLoading] = useState(null);
	const [error, setError] = useState(null);
	const [decide, setDecide] = useState({});

	let MovieAPI = movieList;
	let TheaterAPI = theaterList;

	const day = date.getDay().toString().length === 1 ? '0' + date.getDay() : date.getDay();
	const today = date.getFullYear().toString() + date.getMonth().toString() + day;

	const chooseMovie = (e) => {
		console.log(e);
		setDecide({
			// ...decide,
			movie: e.target.value,
		});
	};
	const chooseTheater = (value) => {
		setDecide({
			...decide,
			theater: value,
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
		<Row justify="center" style={{ minHeight: '600px', maxHeight: '600px', overflow: 'hidden' }}>
			<TicketCommonLayout title="영화" width="30%">
				<MovieList
					MovieAPI={MovieAPI}
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
					chooseTheater={chooseTheater}
					today={today}
					setsetDate={setsetDate}
					setDecide={setDecide}
					setLoading={setLoading}
					setError={setError}
				/>
			</TicketCommonLayout>
			<TicketCommonLayout title="날짜" width="10%" style={{ height: '600px', overflow: 'scroll' }}>
				<DateList date={date} setDecide={setDecide} chooseDate={chooseDate} />
			</TicketCommonLayout>
			<TicketCommonLayout title="시간" width="30%">
				<TimeList MovieAPI={MovieAPI} decide={decide} setDecide={setDecide} chooseTime={chooseTime} />
			</TicketCommonLayout>
		</Row>
	);
};

export default MovieSelectorContainer;
