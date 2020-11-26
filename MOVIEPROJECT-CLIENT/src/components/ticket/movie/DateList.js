import React, { useEffect } from 'react';

//modulse
import styled from 'styled-components';

import { monthList, dayList } from 'lib/ticket/movieList';
import DatePicker from 'react-horizontal-datepicker';
import './DateList.css';

const DateList = (props) => {
  const { chooseDate } = props;

  const customCalender = (obj, list) => {
    Array.from(obj)
      .map((date) => {
        return date.innerText;
      })
      .forEach((dateText, index) => {
        obj[index].innerHTML = list[dateText];
      });
  };

  useEffect(() => {
    customCalender(document.querySelectorAll('.DatePicker_monthYearLabel__137fh'), monthList);
    customCalender(document.querySelectorAll('.DatePicker_dayLabel__3gxfP'), dayList);
  }, []);

  return (
    <DatePicker labelFormat={'MMMM'} getSelectedDay={(value) => chooseDate(value)} color={'#374e8c'} endDate='60' />
  );
};

export default DateList;
