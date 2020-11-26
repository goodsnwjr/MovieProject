import React, { useEffect } from 'react';
import { Row, Col, Button } from 'antd';
import styled from 'styled-components';

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

  const FocusStyle = styled(Row)`
    /* antd custom */
    .select-type {
      min-width: 50px;
      line-height: 34px;
    }

    .ant-btn {
      padding: 4px 10px;
      font-weight: 900;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
    .ant-btn:hover {
      background-color: red;
      color: #fff;
      border-color: #fff;
    }
    .ant-btn:focus {
      background-color: #000;
      color: #fff;
      border-color: #fff;
    }
  `;

  return (
    <FocusStyle>
      <Col className='select-type'>{pType}</Col>
      <Col className={type}>
        {seet.map((ele, idx) => {
          return (
            <Button key={`seet-${ele}`} onClick={(e) => stypectNum(ele, e.target)}>
              {ele}
            </Button>
          );
        })}
      </Col>
    </FocusStyle>
  );
};

export default NumberOfPeople;
