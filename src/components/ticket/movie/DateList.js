import React,{useState} from 'react';

//modulse
import {Row, Col} from 'antd';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
const DateList = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker 
      selected={startDate} 
      onChange={date => setStartDate(date)}
      inline 
    />
  ) 
};



export default DateList;