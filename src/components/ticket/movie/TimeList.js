import React from 'react';

//modulse
import { Row, Col } from 'antd';

const TimeList = (props) => {
  const { movie, chooseMovie, setDecide } = props;
  return <Row>{<div>예약가능한 시간이 없습니다.</div>}</Row>;
};

export default TimeList;
