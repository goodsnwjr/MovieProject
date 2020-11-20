import React, {useState} from 'react';
// import {Row, Col} from 'antd';
import styled from 'styled-components';

const TicketWrapper = styled.div`
  width: ${props => props.width ? props.width : '100%'};
  height: 100%;
`
const TicketHeader = styled.div`
  padding: 5px 0;
  box-sizing: border-box;
  background: black;
  color: #fff;
  text-align: center;
  .retry {
    float: right;
  }
`

const TicketBody = styled.div`
  width: 100%;
  height: 100%;
`


const emptySeet = (peoType) => {
  peoType={};
}

const SeatSelectorContainer = ({children, title, retry, width, peoType}) => {
  return (
      <TicketWrapper style={{width: width? width : false}}>
        <TicketHeader>
          {title}
          {retry && <span className="retry" onClick={emptySeet}> 다시하기</span>}
        </TicketHeader>
        <TicketBody>{children}</TicketBody>
      </TicketWrapper>
  )
};



export default SeatSelectorContainer;