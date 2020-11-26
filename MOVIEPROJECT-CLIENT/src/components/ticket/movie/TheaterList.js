import React from 'react';

//modulse
import styled from 'styled-components';
import { Cascader } from 'antd';

const TheaterList = (props) => {
  const { TheaterAPI, chooseTheater } = props;

  return (
    <>
      {TheaterAPI.Theater && (
        <Cascader
          className='theater'
          options={TheaterAPI.Theater}
          onChange={(value) => chooseTheater(value)}
          defaultValue={['서울', '강변', '10: 30']}
        />
      )}
    </>
  );
};

export default TheaterList;
