import React, { useState, useEffect } from 'react';

//modulse
import styled from 'styled-components';

import { ko } from 'date-fns/locale';

import { dayList } from 'modules/movieList';
import DatePicker from 'react-horizontal-datepicker';
import './DateList.css';

const DateList = (props) => {
	const { chooseDate } = props;

	const customCalender = (obj, list) => {
		console.log(obj);
		Array.from(obj)
			.map((ele) => {
				return ele.innerText;
			})
			.forEach((e, index) => {
				obj[index].innerHTML = list[e];
			});
	};

	useEffect(() => {
		// customCalender(document.querySelectorAll('.DatePicker_monthYearLabel__137fh'), monthList);
		customCalender(document.querySelectorAll('.DatePicker_dayLabel__3gxfP'), dayList);
	}, []);

	return <DatePicker labelFormat={'M'} getSelectedDay={(value) => chooseDate(value)} color={'#374e8c'} endDate="60" />;
};

export default DateList;
