import React from 'react';
import styled from 'styled-components';

const TicketWrapper = styled.div`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: 100%;
`;

const TicketHeader = styled.div`
  padding: 5px 0;
  box-sizing: border-box;
  background: black;
  color: #fff;
  text-align: center;
  .retry {
    float: right;
  }
`;

const TicketBody = styled.div`
  width: 100%;
  height: 100%;
`;

const emptySeet = (peoType) => {
  peoType = {};
};

const TicketCommonLayout = ({ children, title, retry, width, peoType, ...rest }) => {
  return (
    <TicketWrapper width={width} {...rest}>
      <TicketHeader>
        {title}
        {retry && (
          <span className='retry' onClick={emptySeet}>
            {' '}
            다시하기
          </span>
        )}
      </TicketHeader>
      <TicketBody>{children}</TicketBody>
    </TicketWrapper>
  );
};

export default TicketCommonLayout;
