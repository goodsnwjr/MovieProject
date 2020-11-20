import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import { Link } from 'react-router-dom';


const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 99;
`;



/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이의 여백을 최대로 설정 */
  .logo {
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 2px;
    color:red;
  }
  .center {
    display: flex;
    left: 0;
    right: 0;
    margin: 0 auto;
    align-items: center;
    & > a{
    color:black;
    font-size: 1.125rem;
    font-weight: 800;
    padding: 0 15px;
  }
  }
`;


const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            MOVIE
        </Link>
          <div className="center">
            <Link type="link" to="/">영화</Link>
            <Link type="link" to="/ticket">예매</Link>
            <Link type="link" to="/">극장</Link>
            <Link type="link" to="/">이벤트&컬처</Link>
          </div>
        </Wrapper>
      </HeaderBlock>
    </>
  );
};



export default Header;