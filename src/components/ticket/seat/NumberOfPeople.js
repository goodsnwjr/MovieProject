import React, { useEffect } from 'react';
import { Row, Col, Button } from 'antd';

const NumberOfPeople = (props) => {
  const { type, peoType } = props;
  const seet = [1, 2, 3, 4, 5, 6, 7, 8];
  peoType[type] = 0;

  let pType = '';

  switch (type) {
    case 'adult':
      pType = '어른';
      break;
    case 'youth':
      pType = '어린이';
      break;
    case 'preference':
      pType = '우대';
      break;
    default:
      pType = 'adult';
  }

  const stypectNum = (checkNum, target) => {
    let parentName = target.parentNode.className.substr(8);
    peoType[parentName] = checkNum;
    console.log(peoType);
  };

  return (
    <Row>
      <Col>{pType}</Col>
      <Col className={type}>
        {seet.map((ele, idx) => {
          return (
            <Button key={`seet-${ele}`} onClick={(e) => stypectNum(ele, e.target)}>
              {ele}
            </Button>
          );
        })}
      </Col>
    </Row>
  );
};

export default NumberOfPeople;
