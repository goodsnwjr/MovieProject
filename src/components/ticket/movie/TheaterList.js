import React, { Fragment, useEffect, useState } from 'react';

//modulse
import styled from 'styled-components';
import { Row, Col, Cascader } from 'antd';

const TheaterList = (props) => {
	const { TheaterAPI, theater, setTheater, today, chooseTheater, setDecide, setError, setLoading } = props;
	console.log(TheaterAPI);
	useEffect(() => {
		const fetchTheater = async () => {
			try {
				setError(null);
				setLoading(true);
				setTheater(TheaterAPI.Theater);
			} catch (e) {
				// setError(e);
			}
			// setLoading(false);
		};
		fetchTheater();
	}, []);

	const TheaterStyle = styled(Col)`
		display: block;
	`;

	return (
		<>
			{TheaterAPI.Theater && (
				<Cascader
					className="theater"
					options={TheaterAPI.Theater}
					onChange={(value) => chooseTheater(value)}
					defaultValue={['서울', '강변', '10: 30']}
					style={{}}
				/>
			)}
		</>
	);
};

export default TheaterList;
