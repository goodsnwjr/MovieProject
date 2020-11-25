import React from 'react';
import { Button, Typography, Divider } from 'antd';
import styled, { css } from 'styled-components';

const { Text } = Typography;

const FooterBlock = styled.div`
  position: relative;
  width: 100%;
  height:128px;
  top: 0;
  background: #1d1d1c;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 99;
  > span {
    color:white;
  }
`;

const DividerVertical = styled(Divider)`
  border-left: 1px solid #ffffff;
  height: 20px;
  top: 45px;
  margin-left: 5px;
  margin-right: 5px;
`;

const FotterDivCommon = css`
  height: 100%;
  width: 109px;
  display: inline-block;
`;

const MovieSelectDiv = styled.div`
  ${FotterDivCommon}
`;

const TheaterSelectDiv = styled.div`
  ${FotterDivCommon}
`;

const SeatSelectDiv = styled.div`
  ${FotterDivCommon}
`;

const PaymentSelectDiv = styled.div`
  ${FotterDivCommon}
`;

const NonSelectText = styled(Text)`
  position: relative;
  top: 45px;
  left: 10px;
  font-size: 23px;
  vertical-align: middle;
  color: white;
  :nth-of-type(2) {
    font-size:20px;
  }
`;

const MovieSelectButton = styled(Button)`
  float:left;
  height: 70%;
  margin-top: 20px;
`;

const SeatSelectButton = styled(Button)`
  float:right;
  height: 70%;
  margin-top: 20px;
`;

const TicketFooter = (props) => {
  const { ticketPageStatus, setTicketPageStatus } = props;
  const seatSelectorButtonClick = (e) => {
    const ticketStatus = e.currentTarget.dataset.status;
    setTicketPageStatus(ticketStatus)
  }

  return (
    <>
      <FooterBlock>
        {ticketPageStatus === 'seatSelector' && <MovieSelectButton data-status="movieSelector" onClick={seatSelectorButtonClick}>영화선택</MovieSelectButton>}
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
        <SeatSelectButton onClick={seatSelectorButtonClick} data-status="seatSelector" >{ticketPageStatus === 'seatSelector' ? '결제선택' : '좌석선택'}</SeatSelectButton>
      </FooterBlock>
    </>
  )
};



export default TicketFooter;