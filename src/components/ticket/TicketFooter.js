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

const DividerStyle = {
  borderLeft: '1px solid #ffffff',
  height: '20px',
  top: '35px',
  marginLeft: '15px',
  marginRight: '15px',
}

const nonSelectFontStyle = {
  position: 'relative',
  top: '35px',
  fontSize: '30px',
  verticalAlign: 'middle'
}

const seatSelectButtonStyle = {
  float:'right',
  height: '70%',
  marginTop: '20px'
}

const TicketFooter = (props) => {
  const { ticketPageStatus, setTicketPageStatus } = props;
  const seatSelectorButtonClick = (e) => {
      setTicketPageStatus('seatSelector')
  }

  return (
    <>
      <FooterBlock>
        <Text style={nonSelectFontStyle}>영화선택</Text>
        <Divider type='vertical' style={DividerStyle}/>
        <Text style={nonSelectFontStyle}>극장선택</Text>
        <Divider type='vertical' style={DividerStyle} />
        <Text style={nonSelectFontStyle}>&gt; 좌석선택 </Text>
        <Text style={nonSelectFontStyle}>&gt; 결제</Text>
        <Button onClick={seatSelectorButtonClick} style={seatSelectButtonStyle}>좌석선택</Button>
      </FooterBlock>
    </>
  ) 
};



export default TicketFooter;