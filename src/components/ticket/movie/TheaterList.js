import React,{useEffect, useState} from 'react';

//modulse
import styled from 'styled-components';
import {Row, Col, Cascader} from 'antd';


const TheaterList = (props) => {
  const {TheaterAPI, theater, setTheater, today, chooseMovie, setDecide, setError, setLoading} = props;
  console.log(TheaterAPI);
  useEffect(()=> {
    const fetchTheater = async () => {
      try {
        setError(null);
        setLoading(true);
        setTheater(TheaterAPI.Theater);
      } catch (e) {
        // setError(e);
      } 
      // setLoading(false);
    }
    fetchTheater();
  }, []);
  function onChange(value) {
    console.log(value);
  }
  
  const TheaterStyle = styled(Col)`
    display: block;
  `

  return (
    <>
      {
        TheaterAPI.Theater && 
        <Cascader 
          options={TheaterAPI.Theater}
          onChange={onChange} 
          defaultValue={['서울', '강변', '10: 30']}
        />
      }
    </>
  ) 
};

export default TheaterList;