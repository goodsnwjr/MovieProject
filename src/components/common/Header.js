import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import { Link, useHistory } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';


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
    & > a > a{
      color:black;
    }
  }
`;


const MovieMenu = (
  <Menu>
    <Menu.Item key="1"><Link type="link" to="/MovieChart">무비차트</Link></Menu.Item>
    <Menu.Item key="2"><Link type="link" to="/HDTrailer">HD 트레일러</Link></Menu.Item>
    <Menu.Item key="3"><Link type="link" to="/MovieFinder">무비파인더</Link></Menu.Item>
    <Menu.Item key="4"><Link type="link" to="/Arthoust">CGV 아트하우스</Link></Menu.Item>
  </Menu>
);

const TicketMenu = (
  <Menu>
    <Menu.Item key="1">빠른예매</Menu.Item>
    <Menu.Item key="2">상영시간표</Menu.Item>
  </Menu>
);

const TheaterMenu = (
  <Menu>
    <Menu.Item key="1">CGV 극장</Menu.Item>
    <Menu.Item key="2">특별관</Menu.Item>
    <Menu.Item key="3">CLUB 서비스</Menu.Item>
  </Menu>
);

const EventCultureMenu = (
  <Menu>
    <Menu.Item key="1">이벤트</Menu.Item>
    <Menu.Item key="2">기프트샵</Menu.Item>
    <Menu.Item key="3">매거진</Menu.Item>
  </Menu>
);


const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            MOVIE
        </Link>
          <div className="center">
            {/* <Link type="link" to="/">영화</Link>
            <Link type="link" to="/ticket">예매</Link>
            <Link type="link" to="/">극장</Link>
            <Link type="link" to="/">이벤트&컬처</Link> */}
            <Dropdown overlay={MovieMenu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <Link type="link" to="/">영화</Link>
              </a>
            </Dropdown>
            <Dropdown overlay={TicketMenu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <Link type="link" to="/ticket">예매</Link>
              </a>
            </Dropdown>
            <Dropdown overlay={TheaterMenu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <Link type="link" to="/">극장</Link>
              </a>
            </Dropdown>
            <Dropdown overlay={EventCultureMenu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <Link type="link" to="/">이벤트&컬처</Link>
              </a>
            </Dropdown>
          </div>

        </Wrapper>
      </HeaderBlock>
    </>
  );
};



export default Header;