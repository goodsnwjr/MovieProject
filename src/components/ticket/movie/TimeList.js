import React from 'react';

//modulse
import { Row, Radio } from 'antd';

const TimeList = (props) => {
  const { MovieAPI, decide, chooseTime } = props;
  let timeArray;
  if (decide.movie) {
    for (let i = 0; i < MovieAPI.dailyBoxOfficeList.length; i++) {
      if (MovieAPI.dailyBoxOfficeList[i].movieNm === decide.movie) {
        timeArray = MovieAPI.dailyBoxOfficeList[i].show[decide.date];
      }
    }
  }
  return (
    <>
      {!decide.movie || !decide.theater || !decide.date ? (
        <Row>예약가능한 시간이 없습니다.</Row>
      ) : (
        <Radio.Group>
          {timeArray &&
            timeArray.map((time, idx) => {
              return (
                <Radio.Button key={`time-${idx}`} value={time} onClick={(e) => chooseTime(e)}>
                  {time}
                </Radio.Button>
              );
            })}
        </Radio.Group>
      )}
    </>
  );
};

export default TimeList;
