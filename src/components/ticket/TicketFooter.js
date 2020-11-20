import React from 'react';
import { Button, Typography, Divider } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const FooterBlock = styled.div`
  position: relative;
  width: 100%;
  height:128px;
  top: 0;
  background: #1d1d1c;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 99;
  & > span {
    color:white;
  }
`;

const DividerVertical = styled(Divider)`
  border-left: 1px solid #ffffff;
  height: 20px;
  top: 45px;
  margin-left: 10px;
  margin-right: 10px;
`;

const MovieSelectDiv = styled.div`
  height: 100%;
  width: 110px;
  display: inline-block;
`;

const TheaterSelectDiv = styled.div`
  height: 100%;
  width: 110px;
  display: inline-block;
`;

const SeatSelectDiv = styled.div`
  height: 100%;
  width: 120px;
  display: inline-block;
`;


const PaymentSelectDiv = styled.div`
  height: 100%;
  width: 110px;
  display: inline-block;
`;

const NonSelectText = styled(Text)`
  position: relative;
  top: 45px;
  left: 10px;
  font-size: 25px;
  vertical-align: middle;
  color: white;
`;

const SeatSelectButton = styled(Button)`
  float:right;
  height: 70%;
  margin-top: 20px;
  margin-right: 15px;
`;



const TicketFooter = (props) => {
  const { ticketPageStatus, setTicketPageStatus } = props;
  const seatSelectorButtonClick = (e) => {
      setTicketPageStatus('seatSelector')
  }

  return (
    <>
      <FooterBlock>
        <MovieSelectDiv>
          <NonSelectText>영화선택</NonSelectText>
        </MovieSelectDiv>
        <DividerVertical type='vertical' />
        <TheaterSelectDiv>
          <NonSelectText>극장선택</NonSelectText>
        </TheaterSelectDiv>
        <DividerVertical type='vertical' />
        <SeatSelectDiv>
          <NonSelectText>&gt; 좌석선택 </NonSelectText>
        </SeatSelectDiv>
        <PaymentSelectDiv>
          <NonSelectText>&gt; 결제</NonSelectText>
        </PaymentSelectDiv>
        <SeatSelectButton onClick={seatSelectorButtonClick}>{ticketPageStatus === 'seatSelector' ? '결제선택' : '좌석선택' }</SeatSelectButton>
      </FooterBlock>
    </>
  ) 
};



export default TicketFooter;