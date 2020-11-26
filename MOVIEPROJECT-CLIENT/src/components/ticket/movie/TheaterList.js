import React, { useState } from 'react';

//modulse
import styled from 'styled-components';
import { Radio } from 'antd';

const TheaterList = (props) => {
  const { TheaterAPI, selectLocal, chooseCity, selectedTheater, chooseTheater } = props;
  console.log(selectedTheater.length);
  console.log(selectedTheater);
  console.log(TheaterAPI['서울']);
  console.log(TheaterAPI);

  return (
    <>
      <Radio.Group>
        {TheaterAPI &&
          Object.keys(TheaterAPI).map((theater, idx) => {
            return (
              <Radio.Button key={`city-${idx}`} value={Object.keys(theater)} onClick={(e) => chooseCity(e)}>
                {theater}
              </Radio.Button>
            );
          })}
      </Radio.Group>
      {selectedTheater.length && (
        <Radio.Group>
          {Object.keys(TheaterAPI[selectedTheater[0]]).map((theater, idx) => {
            return (
              <Radio.Button key={`local-${idx}`} value={theater.value} onClick={(e) => chooseTheater(e)}>
                {theater}
              </Radio.Button>
            );
          })}
        </Radio.Group>
      )}
    </>
  );
};

export default TheaterList;
